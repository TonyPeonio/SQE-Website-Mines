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
  href?: string;
  image: string;
  /** Logo cards use contain; photo cards fill the banner with cover. */
  imageStyle?: "logo" | "photo";
  external?: boolean;
};

export const FEATURED_EVENTS: SiteEvent[] = [
  {
    id: "career-pathways-seminar",
    title: "Career Pathways Seminar",
    dates: "Wednesdays, 9:00 AM · Fall semester",
    description:
      "A recurring seminar where invited speakers share their career pathways, jobs, and advice for students exploring quantum and related fields.",
    image: "/quantumlogo-white.png",
    imageStyle: "logo",
  },
  {
    id: "quantum-lunch",
    title: "Quantum Lunch",
    dates: "Fridays, 12:00 PM · CoorsTek 230",
    description:
      "A weekly social gathering for the quantum community. Pizza is provided most weeks—drop in, eat, and meet fellow enthusiasts.",
    image: "/community/quantum-lunch.jpg",
    imageStyle: "photo",
  },
  {
    id: "qolab-hackathon",
    title: "Qolab Hackathon",
    dates: "October · Dates TBD",
    description:
      "A hackathon sponsored by Qolab. The exact date range will be announced soon—check back for updates.",
    image: "/logos/qolab.png",
    imageStyle: "logo",
  },
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
