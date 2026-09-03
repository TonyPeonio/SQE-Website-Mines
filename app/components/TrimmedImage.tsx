"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type CropBounds = { x: number; y: number; w: number; h: number };
type NaturalSize = { w: number; h: number };

type TrimmedImageProps = {
  src: string;
  alt: string;
  height: number;
  className?: string;
  priority?: boolean;
};

function findOpaqueBounds(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  alphaThreshold = 10,
): CropBounds | null {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha > alphaThreshold) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX || maxY < minY) return null;
  return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
}

function computeCrop(src: string): Promise<{ crop: CropBounds; natural: NaturalSize } | null> {
  return new Promise((resolve) => {
    const img = new window.Image();
    // Same-origin assets must not set crossOrigin or canvas reads can fail.
    if (src.startsWith("http://") || src.startsWith("https://")) {
      img.crossOrigin = "anonymous";
    }

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(null);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const bounds = findOpaqueBounds(imageData.data, canvas.width, canvas.height);

        if (!bounds) {
          resolve(null);
          return;
        }

        resolve({
          crop: bounds,
          natural: { w: img.naturalWidth, h: img.naturalHeight },
        });
      } catch {
        resolve(null);
      }
    };

    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export default function TrimmedImage({
  src,
  alt,
  height,
  className = "",
  priority = false,
}: TrimmedImageProps) {
  const [trimmed, setTrimmed] = useState<{ crop: CropBounds; natural: NaturalSize } | null>(null);

  useEffect(() => {
    let cancelled = false;

    computeCrop(src).then((result) => {
      if (!cancelled && result) {
        setTrimmed(result);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!trimmed) {
    return (
      <Image
        src={src}
        alt={alt}
        width={Math.round(height * 1.78)}
        height={height}
        priority={priority}
        className={className}
      />
    );
  }

  const { crop, natural } = trimmed;
  const scale = height / crop.h;
  const displayWidth = crop.w * scale;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: displayWidth, height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute max-w-none"
        style={{
          width: natural.w * scale,
          height: natural.h * scale,
          left: -crop.x * scale,
          top: -crop.y * scale,
        }}
      />
    </div>
  );
}
