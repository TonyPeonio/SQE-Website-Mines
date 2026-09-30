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
  "2025-2026": [],
  "2026-2027": [
    {
      id: 1,
      image: "/community/lab.jpeg",
      title: "Qiskit Fall Fest",
      speaker: "SQE at Colorado School of Mines",
      date: "November 6–20, 2026",
      description:
        "Beginner and advanced Qiskit workshops, a two-weekend hackathon, and Quantum Jeopardy. Visit /qiskit-fall-fest for the full schedule.",
    },
  ],
  "2027-2028": [],
};

export const ALL_CYCLES = Object.keys(eventsByCycle);
