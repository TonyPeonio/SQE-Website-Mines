// ============================================================
// COMMUNITY EVENTS — organized by academic cycle
// ============================================================
//
// HOW TO ADD EVENTS:
//   1. Place event photo in public/community/<cycle>/
//   2. Add event to the appropriate cycle array below
//
// ============================================================

export type Event = {
  id: number;
  image: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
};

export const eventsByCycle: Record<string, Event[]> = {
  "2025-2026": [
    {
      id: 1,
      image: "/community/lab.jpeg",
      title: "Qiskit Fall Fest",
      speaker: "SQE at Colorado School of Mines",
      date: "November 9–13, 2025",
      description:
        "A week of quantum computing workshops, talks, and hands-on Qiskit coding. Visit /qiskit-fall-fest for the full schedule.",
    },
  ],
  "2026-2027": [],
  "2027-2028": [],
};

export const ALL_CYCLES = Object.keys(eventsByCycle);
