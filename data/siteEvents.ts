// ============================================================
// FEATURED EVENTS — shown on /events
// ============================================================
//
// HOW TO ADD AN EVENT:
//   1. Add an entry below with title, dates, description, and href
//   2. For full event pages, create a route (e.g. /qiskit-fall-fest)
//
// ============================================================

export type SiteEvent = {
  id: string;
  title: string;
  dates: string;
  description: string;
  href: string;
  image: string;
  external?: boolean;
};

export const FEATURED_EVENTS: SiteEvent[] = [
  {
    id: "qiskit-fall-fest",
    title: "Qiskit Fall Fest",
    dates: "November 9–13, 2025",
    description:
      "A week of quantum computing workshops, talks, and hands-on Qiskit coding at Mines.",
    href: "/qiskit-fall-fest",
    image: "/logos/ibm.png",
  },
];
