// ============================================================
// MEMBERS DATA — organized by semester, newest first
// ============================================================
//
// HOW TO ADD A NEW SEMESTER:
//   1. Create folder: public/members/<semester>/
//   2. Add a new key at the TOP of membersBySemester below
//   3. Add members with their roles, photos, and LinkedIn URLs
//
// ============================================================

export type Member = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

export const membersBySemester: Record<string, Member[]> = {
  "Fall 2025": [
    {
      name: "TBD",
      role: "President",
      img: "/members/placeholder.svg",
      linkedin: "",
    },
    {
      name: "TBD",
      role: "Member",
      img: "/members/placeholder.svg",
      linkedin: "",
    },
  ],
};

export const ALL_SEMESTERS = Object.keys(membersBySemester);

export const CURRENT_SEMESTER = ALL_SEMESTERS[0];

export const MEMBERS = membersBySemester[CURRENT_SEMESTER];

export const getMemberCount = (): number => {
  return MEMBERS.length;
};
