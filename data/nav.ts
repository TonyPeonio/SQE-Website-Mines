// ============================================================
// SITE NAVIGATION
// ============================================================
//
// To restore Community or Research:
//   1. Uncomment the matching line in navLinks below
//   2. Pages still live at app/community and app/papers
//
// ============================================================

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Team" },
  { href: "/events", label: "Events" },
  // { href: "/community", label: "Community" },
  { href: "/projects", label: "Our Lab" },
  // { href: "/papers", label: "Research" },
];
