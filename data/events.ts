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
  "2026-2027": [],
  "2027-2028": [],
};

export const ALL_CYCLES = Object.keys(eventsByCycle);
