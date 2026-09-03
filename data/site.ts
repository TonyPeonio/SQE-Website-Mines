import type { Metadata } from "next";

export const siteConfig = {
  name: "SQE Society of Quantum Engineers",
  school: "Colorado School of Mines",
  schoolShort: "Mines",
  tagline:
    "Building the quantum community at Mines, connecting faculty and students.",
  url: "",
  contactEmail: "MinesSQE@gmail.com",
  social: {
    instagram: "https://www.instagram.com/mines_sqe/",
    linkedin: "https://www.linkedin.com/company/mines-sqe/posts/",
    newsletter: "https://forms.gle/YGNxMWrxUJ56mAjH6",
  },
  colors: {
    primary: "#21314D",
    accent: "#8B9196",
    accentHover: "#737980",
    background: "#FFFFFF",
    surface: "#F4F5F6",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    border: "#D1D5DB",
  },
  lab: {
    location: "Quantum Theory Lab — CoorsTek 230",
    description:
      "Our clubroom is home to our quantum lab at Colorado School of Mines.",
  },
  stats: {
    researchProjects: "2+",
    facultyCollaborations: "4+",
  },
} as const;

export function getFullTitle(pageTitle?: string): string {
  const base = `${siteConfig.name} at ${siteConfig.schoolShort}`;
  return pageTitle ? `${pageTitle} | ${base}` : base;
}

export function createPageMetadata(
  title: string,
  description?: string,
): Metadata {
  const desc = description ?? siteConfig.tagline;
  return {
    title: getFullTitle(title),
    description: desc,
    openGraph: {
      title: getFullTitle(title),
      description: desc,
      url: siteConfig.url,
      siteName: `${siteConfig.name} at ${siteConfig.schoolShort}`,
      images: [
        {
          url: "/quantumlogo.png",
          width: 667,
          height: 374,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url.startsWith("http") ? siteConfig.url : "http://localhost:3000"),
  title: {
    default: getFullTitle(),
    template: `%s | ${siteConfig.name} at ${siteConfig.schoolShort}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: `${siteConfig.name} at ${siteConfig.schoolShort}`,
    images: [
      {
        url: "/quantumlogo.png",
        width: 667,
        height: 374,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const pageShellClassName =
  "w-screen min-h-screen overflow-hidden bg-white text-mines-black";

export const sectionDividerClassName = "w-full h-px bg-mines-silver/30";

export const gridCardClassName =
  "border border-mines-navy/10 hover:bg-mines-silver-light/50 transition-colors";

export const accentCtaClassName =
  "inline-flex items-center px-4 py-2 bg-mines-navy text-white text-sm font-semibold rounded-full hover:bg-mines-navy-dark transition-colors duration-300";

export const outlineBtnClassName =
  "inline-flex items-center px-4 py-2 bg-transparent border border-mines-silver text-mines-navy text-sm font-medium rounded-full hover:border-mines-navy hover:text-mines-navy-dark transition-colors duration-300";

export const pillActiveClassName =
  "bg-mines-navy text-white border-mines-navy";

export const pillInactiveClassName =
  "bg-transparent text-mines-silver border-mines-silver/40 hover:border-mines-navy hover:text-mines-navy";
