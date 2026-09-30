// ============================================================
// QISKIT FALL FEST 2026 — November 6–20
// ============================================================
//
// HOW TO UPDATE:
//   Edit schedule items, links, or descriptions below.
//   When the RSVP/interest form is ready, paste its link into
//   rsvpUrl — the page buttons switch from the newsletter to it.
//
// ============================================================

export const qiskitFallFest = {
  title: "Qiskit Fall Fest",
  dates: "November 6–20, 2026",
  location: "Quantum Theory Lab — CoorsTek 230",
  tagline:
    "Qiskit workshops for every level, a two-weekend hackathon, and Quantum Jeopardy at Mines.",
  description:
    "Join SQE for Qiskit Fall Fest — a global celebration of quantum computing hosted by IBM Quantum. We'll learn to build circuits in Qiskit, put those skills to work in a hackathon, and connect with fellow students passionate about the quantum future.",
  rsvpUrl: null as string | null,
  hackathon: {
    opens: "Friday, Nov 6",
    deadline: "Monday, Nov 16",
    description:
      "Hackathon prompts drop at Quantum Lunch on November 6 and submissions are due November 16 — that's two full weekends to build, with a weekend between the workshops and the deadline to put what you learned into practice.",
  },
  schedule: [
    {
      day: "Friday, Nov 6",
      title: "Hackathon Kickoff at Quantum Lunch",
      time: "12:00 PM",
      location: "CoorsTek 230",
      description:
        "Hackathon prompts are released. Grab lunch, form a team, and start planning your project.",
    },
    {
      day: "Monday, Nov 9",
      title: "Beginner Qiskit Workshop",
      time: "6:00–8:00 PM",
      location: "Brown Building W210",
      description:
        "No quantum or coding experience needed. Get started with Qiskit and the fundamentals of quantum computing.",
    },
    {
      day: "Thursday, Nov 12",
      title: "Advanced Qiskit Workshop",
      time: "5:00–8:00 PM",
      location: "Berthoud Hall 241",
      description:
        "Dive deeper into Qiskit with advanced techniques, circuits, and quantum algorithms.",
    },
    {
      day: "Friday, Nov 13",
      title: "Quantum Jeopardy",
      time: "Time TBD",
      location: "Location TBD",
      description:
        "Test your quantum knowledge in a game of Quantum Jeopardy. Prizes and fun guaranteed!",
    },
    {
      day: "Monday, Nov 16",
      title: "Hackathon Submission Deadline",
      time: "Time TBD",
      location: "Details TBD",
      description:
        "Final hackathon projects are due.",
    },
    {
      day: "Friday, Nov 20",
      title: "Winner & Participant Recognition at Quantum Lunch",
      time: "12:00 PM",
      location: "CoorsTek 230",
      description:
        "We celebrate the hackathon winners and recognize everyone who participated.",
    },
  ],
  partnerEvents: [
    {
      title: "CU Boulder Qiskit Fall Fest",
      dates: "November 4–11, 2026",
      description:
        "Our friends at CU Boulder are running their own Fall Fest — Mines students are welcome to check out their events too.",
      url: null as string | null,
    },
  ],
  highlights: [
    {
      title: "Hands-On Workshops",
      description: "Learn by doing — write and run real quantum circuits in Qiskit.",
    },
    {
      title: "Two-Weekend Hackathon",
      description: "Put what you learn to work on a real problem, with recognition for winners and participants.",
    },
    {
      title: "All Skill Levels Welcome",
      description: "Whether you're brand new to quantum or already coding circuits, there's something for you.",
    },
    {
      title: "Community & Networking",
      description: "Meet fellow quantum enthusiasts at Mines and grow the local quantum community.",
    },
  ],
} as const;
