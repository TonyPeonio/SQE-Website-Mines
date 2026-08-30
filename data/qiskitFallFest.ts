// ============================================================
// QISKIT FALL FEST 2025 — November 9–13
// ============================================================
//
// HOW TO UPDATE:
//   Edit schedule items, links, or descriptions below.
//
// ============================================================

export const qiskitFallFest = {
  title: "Qiskit Fall Fest",
  dates: "November 9–13, 2025",
  tagline: "A week of quantum computing workshops, talks, and hands-on coding at Mines.",
  description:
    "Join SQE for Qiskit Fall Fest — a global celebration of quantum computing hosted by IBM Quantum. We'll spend the week exploring quantum concepts, building circuits in Qiskit, and connecting with fellow students passionate about the quantum future.",
  registrationUrl: null as string | null,
  schedule: [
    {
      day: "Sunday, Nov 9",
      title: "Kickoff & Quantum Foundations",
      time: "TBD",
      description:
        "Welcome session, overview of the week's events, and an introduction to quantum computing concepts.",
    },
    {
      day: "Monday, Nov 10",
      title: "Intro to Qiskit",
      time: "TBD",
      description:
        "Hands-on workshop building your first quantum circuits with IBM's open-source Qiskit SDK.",
    },
    {
      day: "Tuesday, Nov 11",
      title: "Quantum Algorithms",
      time: "TBD",
      description:
        "Explore foundational algorithms like Deutsch-Jozsa, Grover's search, and quantum teleportation.",
    },
    {
      day: "Wednesday, Nov 12",
      title: "Running on Real Hardware",
      time: "TBD",
      description:
        "Submit jobs to IBM Quantum processors and learn about noise, error mitigation, and result analysis.",
    },
    {
      day: "Thursday, Nov 13",
      title: "Project Showcase & Closing",
      time: "TBD",
      description:
        "Share what you've built during the week, celebrate with the community, and wrap up Fall Fest.",
    },
  ],
  highlights: [
    {
      title: "Hands-On Workshops",
      description: "Learn by doing — write and run real quantum circuits in Qiskit.",
    },
    {
      title: "IBM Quantum Access",
      description: "Get experience submitting jobs to IBM's quantum processors.",
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
