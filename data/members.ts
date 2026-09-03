// ============================================================
// MEMBERS DATA — organized by semester, newest first
// ============================================================
//
// HOW TO ADD A NEW SEMESTER:
//   1. Create folder: public/members/<semester>/  (e.g. "2026-Fall")
//   2. Add headshot images to that folder (e.g. jane-doe.jpg)
//   3. Add a new key at the TOP of membersBySemester below
//   4. Add members with name, role, img path, and linkedin URL
//
// HEADSHOTS: Store images in public/members/<semester>/
//            Use a folder name without spaces (2026-Fall, not 2026 Fall)
// LINKEDIN:  Store URLs in this file (not a separate text file)
//
// Example entry:
//   {
//     name: "Jane Doe",
//     role: "President",
//     img: "/members/2026-Fall/jane-doe.jpg",
//     linkedin: "https://www.linkedin.com/in/janedoe",
//   }
//
// ============================================================

export type Member = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

export const membersBySemester: Record<string, Member[]> = {
  "Fall 2026": [
    {
      name: "Tony Peonio",
      role: "President",
      img: "/members/2026-Fall/TonyPeonio.jpg",
      linkedin: "https://www.linkedin.com/in/tony-peonio-3b819534a/",
    },
    {
      name: "Zack Disler",
      role: "Treasurer",
      img: "/members/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/zack-disler/",
    },
    {
      name: "Hiram Despain",
      role: "Events Chair",
      img: "/members/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/hiramdespain/",
    },
    {
      name: "Jackson Fisher",
      role: "Advertising Chair",
      img: "/members/2026-Fall/JacksonFisher.png",
      linkedin: "https://www.linkedin.com/in/jacksonfisher04/",
    },
    {
      name: "Grey Garner",
      role: "Outreach Chair",
      img: "/members/2026-Fall/GreyGarner.jpg",
      linkedin: "https://www.linkedin.com/in/grey-garner/",
    },
    {
      name: "Margaux Basart",
      role: "Web Communications Chair",
      img: "/members/2026-Fall/MargauxBasart.JPG",
      linkedin: "https://www.linkedin.com/in/margaux-basart/",
    },
    {
      name: "Om Biyani",
      role: "Support Chair",
      img: "/members/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/ombiyani/",
    },
  ],
};

export const ALL_SEMESTERS = Object.keys(membersBySemester);

export const CURRENT_SEMESTER = ALL_SEMESTERS[0];

export const MEMBERS = membersBySemester[CURRENT_SEMESTER];

export const getMemberCount = (): number => {
  return MEMBERS.length;
};
