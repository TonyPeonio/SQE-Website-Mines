"use client";

import React, { useEffect, useRef, useState } from "react";
import smartcrop from "smartcrop";

type HeadshotProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Where the subject's head sits in the source image, as 0-1 fractions. */
type FaceFocus = {
  centerX: number;
  eyesY: number;
  top: number;
  height: number;
};

type Analysis = {
  focus: FaceFocus;
  aspect: number;
};

const FALLBACK_FOCUS: FaceFocus = {
  centerX: 0.5,
  eyesY: 0.3,
  top: 0.16,
  height: 0.32,
};

/** Eyes sit slightly above the middle of the frame in a well-composed headshot. */
const EYE_ANCHOR = 0.42;

/** Empty space kept above the detected face box, as a multiple of its height. */
const HEADROOM = 0.75;

const analysisCache = new Map<string, Analysis>();

let detector: {
  detect: (image: HTMLCanvasElement) => {
    detections: Array<{
      boundingBox?: { originX: number; originY: number; width: number; height: number };
      keypoints?: Array<{ x: number; y: number }>;
    }>;
  };
} | null = null;
let detectorFailed = false;
let detectorLoading: Promise<unknown> | null = null;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

async function imageToCanvas(img: HTMLImageElement, maxSize = 960): Promise<HTMLCanvasElement> {
  const scale = Math.min(1, maxSize / Math.max(img.naturalWidth, img.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
  canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

async function loadDetector() {
  if (detectorFailed || detector) return;
  if (!detectorLoading) {
    detectorLoading = import("@mediapipe/tasks-vision")
      .then(async (vision) => {
        const fileset = await vision.FilesetResolver.forVisionTasks("/mediapipe/wasm");
        detector = await vision.FaceDetector.createFromOptions(fileset, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
          },
          runningMode: "IMAGE",
          minDetectionConfidence: 0.35,
        });
      })
      .catch(() => {
        detectorFailed = true;
      });
  }
  await detectorLoading;
}

function detectFace(canvas: HTMLCanvasElement): FaceFocus | null {
  if (!detector) return null;

  try {
    const best = detector
      .detect(canvas)
      .detections.filter((d) => d.boundingBox)
      .sort(
        (a, b) =>
          b.boundingBox!.width * b.boundingBox!.height -
          a.boundingBox!.width * a.boundingBox!.height,
      )[0];

    if (!best?.boundingBox) return null;

    const box = best.boundingBox;
    const top = box.originY / canvas.height;
    const height = box.height / canvas.height;

    // BlazeFace returns the eyes as its first two keypoints, already normalized.
    const eyes = best.keypoints?.slice(0, 2) ?? [];
    const eyesY =
      eyes.length === 2 ? (eyes[0].y + eyes[1].y) / 2 : top + height * 0.4;
    const centerX =
      eyes.length === 2
        ? (eyes[0].x + eyes[1].x) / 2
        : (box.originX + box.width / 2) / canvas.width;

    return { centerX, eyesY, top, height };
  } catch {
    return null;
  }
}

async function smartCropFocus(canvas: HTMLCanvasElement): Promise<FaceFocus | null> {
  try {
    const size = Math.min(canvas.width, canvas.height);
    const { topCrop } = await smartcrop.crop(canvas, { width: size, height: size });
    const top = topCrop.y / canvas.height;
    const height = topCrop.height / canvas.height;
    return {
      centerX: (topCrop.x + topCrop.width / 2) / canvas.width,
      eyesY: top + height * 0.35,
      top,
      height: height * 0.5,
    };
  } catch {
    return null;
  }
}

async function analyze(src: string): Promise<Analysis> {
  const cached = analysisCache.get(src);
  if (cached) return cached;

  if (src.endsWith(".svg")) {
    const result = { focus: { centerX: 0.5, eyesY: 0.5, top: 0.25, height: 0.5 }, aspect: 1 };
    analysisCache.set(src, result);
    return result;
  }

  const img = await loadImage(src);
  const canvas = await imageToCanvas(img);
  await loadDetector();

  const focus = detectFace(canvas) ?? (await smartCropFocus(canvas)) ?? FALLBACK_FOCUS;
  const result = { focus, aspect: canvas.width / canvas.height };

  analysisCache.set(src, result);
  return result;
}

/**
 * `object-position` percentages align the same relative point of the image and
 * the box, so the offset depends on how much of the image survives the crop.
 */
function axisPercent(
  target: number,
  visible: number,
  anchor: number,
  maxStart: number,
): number {
  if (visible >= 1) return 50;
  const limit = clamp(maxStart, 0, 1 - visible);
  const start = clamp(target - anchor * visible, 0, limit);
  return (start / (1 - visible)) * 100;
}

function objectPositionFor(focus: FaceFocus, imgAspect: number, boxAspect: number): string {
  const visibleHeight = Math.min(1, imgAspect / boxAspect);
  const visibleWidth = Math.min(1, boxAspect / imgAspect);

  const x = axisPercent(focus.centerX, visibleWidth, 0.5, 1);
  const y = axisPercent(
    focus.eyesY,
    visibleHeight,
    EYE_ANCHOR,
    focus.top - focus.height * HEADROOM,
  );

  return `${x}% ${y}%`;
}

export default function Headshot({ src, alt, className = "" }: HeadshotProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(() => analysisCache.get(src) ?? null);
  const [boxAspect, setBoxAspect] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    analyze(src)
      .then((result) => {
        if (!cancelled) setAnalysis(result);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const measure = () => {
      const { clientWidth, clientHeight } = element;
      if (clientWidth > 0 && clientHeight > 0) {
        setBoxAspect(clientWidth / clientHeight);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const objectPosition =
    analysis && boxAspect
      ? objectPositionFor(analysis.focus, analysis.aspect, boxAspect)
      : "50% 25%";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      style={{ objectPosition }}
    />
  );
}
