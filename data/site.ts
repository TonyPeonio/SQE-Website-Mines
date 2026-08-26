import type { Metadata } from "next";

export const siteConfig = {
  name: "SQE Society of Quantum Engineers",
  school: "Colorado School of Mines",
  schoolShort: "Mines",
  tagline:
    "Building the quantum community at Mines, connecting faculty and students.",
  url: "https://TBD.mines.edu",
  contactEmail: "TBD@mines.edu",
  social: {
    instagram: "https://www.instagram.com/TBD",
    linkedin: "https://www.linkedin.com/company/TBD",
    github: "https://github.com/TBD",
    discord: "https://discord.gg/TBD",
    twitter: "TBD",
  },
  colors: {
    primary: "#21314d",
    accent: "#c5b783",
    accentHover: "#b0a472",
    background: "#181818",
  },
  lab: {
    location: "TBD — Mines campus building/room",
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
          url: `${siteConfig.url}/favicon.png`,
          width: 512,
          height: 512,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: siteConfig.social.twitter,
      card: "summary_large_image",
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
        url: `${siteConfig.url}/favicon.png`,
        width: 512,
        height: 512,
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
    title: siteConfig.social.twitter,
    card: "summary_large_image",
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

export const accentCtaClassName =
  "inline-flex items-center px-4 py-2 bg-[#c5b783] text-[#181818] text-sm font-semibold rounded-full hover:bg-[#b0a472] transition-colors duration-300";
