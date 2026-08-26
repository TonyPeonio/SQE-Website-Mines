import { accentCtaClassName, siteConfig } from "./site";

// ============================================================
// SITE TOP BANNER — switch active banner when seasons change
// ============================================================

export type SiteBanner = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  animateCta?: boolean;
  showOnHomepage?: boolean;
  homepageCtaClassName?: string;
};

export const SITE_BANNERS: Record<string, SiteBanner> = {
  "summer-break-discord": {
    id: "summer-break-discord",
    title: "Join SQE at Mines",
    subtitle: "Connect with us on Discord",
    ctaLabel: "Join Discord",
    ctaHref: siteConfig.social.discord,
    ctaExternal: true,
    showOnHomepage: true,
    homepageCtaClassName: accentCtaClassName,
  },
  "leadership-applications": {
    id: "leadership-applications",
    title: "Leadership Applications Open",
    subtitle:
      "Apply with your Mines email. Application details coming soon.",
    ctaLabel: "APPLY FOR LEADERSHIP",
    ctaHref: "https://forms.gle/TBD",
    ctaExternal: true,
    animateCta: true,
    showOnHomepage: true,
    homepageCtaClassName: accentCtaClassName,
  },
};

export const ACTIVE_BANNER_ID: string | null = "summer-break-discord";

export const AUTO_ROTATE_BANNERS = false;
export const ROTATING_BANNER_IDS: string[] = [
  "summer-break-discord",
  "leadership-applications",
];
export const BANNER_ROTATE_INTERVAL_MS = 10_000;

export function getBannerById(id: string): SiteBanner | undefined {
  return SITE_BANNERS[id];
}

export function getActiveBanner(): SiteBanner | null {
  if (!ACTIVE_BANNER_ID) return null;
  return SITE_BANNERS[ACTIVE_BANNER_ID] ?? null;
}

export function getHomepageHeroCta(): SiteBanner | null {
  const banner = getActiveBanner();
  if (!banner?.showOnHomepage) return null;
  return banner;
}
