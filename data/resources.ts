// ============================================================
// RESOURCES — shown on /resources
// ============================================================
//
// HOW TO UPDATE:
//   - Add a card: append an item to the matching group's items
//   - Add a group: append { heading, items } to a section
//   - Conference funding form: paste the link into
//     CONFERENCE_FUNDING_FORM_URL below
//
// ============================================================

export type ResourceItem = {
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  /** Point of contact shown on the card (e.g. alumni recommendations). */
  contact?: { name: string; email: string };
};

export type ResourceGroup = {
  heading: string;
  note?: string;
  items: ResourceItem[];
};

export type ResourceSection = {
  id: string;
  navLabel: string;
  title: string;
  intro?: string[];
  cta?: { label: string; url: string | null; pendingLabel: string };
  groups: ResourceGroup[];
};

const CONFERENCE_FUNDING_FORM_URL: string | null = null;

const LAB_BOOK_NOTE =
  "Available in the Quantum Theory Lab library (CoorsTek 230). Books can be read in the lab but cannot be checked out.";

export const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    id: "software",
    navLabel: "Quantum Software",
    title: "Learn More About Quantum Software",
    groups: [
      {
        heading: "Recommended Books",
        note: LAB_BOOK_NOTE,
        items: [
          {
            title: "Introduction to Quantum Computing: From a Layperson to a Programmer in 30 Steps",
            subtitle: "Hiu Yung Wong",
            url: "https://link.springer.com/book/10.1007/978-3-031-36985-8",
          },
        ],
      },
      {
        heading: "Videos & Tutorials",
        items: [
          {
            title: "But what is quantum computing? (Grover's Algorithm)",
            subtitle: "3Blue1Brown",
            url: "https://www.youtube.com/watch?v=RQWpF2Gb-gU",
          },
          {
            title: "Where my explanation of Grover's algorithm failed",
            subtitle: "3Blue1Brown",
            url: "https://www.youtube.com/watch?v=Dlsa9EBKDGI",
          },
          {
            title: "What makes quantum computers SO powerful?",
            subtitle: "Veritasium",
            url: "https://www.youtube.com/watch?v=-UrdExQW0cs",
          },
          {
            title: "Qiskit on YouTube",
            subtitle: "IBM Quantum",
            description: "Tutorials, lectures, and coding walkthroughs from the Qiskit team.",
            url: "https://www.youtube.com/@qiskit",
          },
        ],
      },
      {
        heading: "Events",
        items: [
          {
            title: "Qiskit Fall Fest",
            subtitle: "Every fall · Hosted by SQE with IBM",
            description:
              "Workshops that introduce Qiskit, IBM's Python library for programming its quantum computers, plus a hackathon and guided notebooks for independent learning. No classical or quantum programming experience required.",
            url: "/qiskit-fall-fest",
          },
        ],
      },
    ],
  },
  {
    id: "hardware",
    navLabel: "Quantum Hardware",
    title: "Learn More About Quantum Hardware",
    intro: [
      "The best way to learn quantum hardware is hands-on: through coursework (like Low-Temperature Microwave Measurements and the Silicon-Based Microprocessing Laboratory in the QE hardware track), research with a Mines lab, or an internship. If you don't have access to those yet, these resources will help you build your understanding of hardware before you get your hands on real devices.",
    ],
    groups: [
      {
        heading: "Recommended Books",
        note: LAB_BOOK_NOTE,
        items: [
          {
            title: "Quantum Computing Architecture and Hardware for Engineers: Step by Step",
            subtitle: "Hiu Yung Wong",
            url: "https://link.springer.com/book/10.1007/978-3-031-78219-0",
          },
        ],
      },
      {
        heading: "Papers & Reviews",
        items: [
          {
            title: "A Quantum Engineer's Guide to Superconducting Qubits",
            subtitle: "Krantz, Kjaergaard, Yan, Orlando, Gustavsson & Oliver",
            description: "A thorough, engineering-focused review of superconducting qubit design, control, and readout.",
            url: "https://arxiv.org/abs/1904.06560",
          },
        ],
      },
    ],
  },
  {
    id: "research",
    navLabel: "Research at Mines",
    title: "Quantum Research Groups at Mines",
    intro: [
      "Research is one of the best ways to get hands-on quantum experience. These Mines faculty lead groups working on quantum theory, devices, materials, and sensing. Read about their work, then reach out to ask about openings.",
    ],
    groups: [
      {
        heading: "Theory & Quantum Information",
        items: [
          {
            title: "Carr Complexity Science Group",
            subtitle: "Dr. Lincoln Carr · Physics",
            description:
              "Theory of quantum many-body systems and complexity, from ultracold atoms and molecules to superconducting and optical platforms and new quantum computing architectures.",
            url: "https://people.mines.edu/lcarr/",
          },
          {
            title: "Gong Group",
            subtitle: "Dr. Zhexuan Gong · Physics",
            description:
              "Quantum information theory applied to quantum materials, algorithms, sensing, and trapped-ion quantum simulators.",
            url: "https://www.mines.edu/about/faculty-directory/profiles/zhexuan-gong.html",
          },
          {
            title: "Wakin Group",
            subtitle: "Dr. Michael Wakin · Electrical Engineering",
            description:
              "Sparse and low-rank signal processing, including sample-efficient quantum state tomography.",
            url: "https://mines.edu/about/faculty-directory/profiles/michael-wakin.html",
          },
          {
            title: "Tahmasebi Group",
            subtitle: "Dr. Pejman Tahmasebi · Civil & Environmental Engineering",
            description:
              "Physics-guided AI and quantum computing for simulating porous media and materials.",
            url: "https://www.mines.edu/about/faculty-directory/profiles/pejman-tahmasebi.html",
          },
        ],
      },
      {
        heading: "Quantum Devices & Sensing",
        items: [
          {
            title: "Singh Lab",
            subtitle: "Dr. Meenakshi Singh · Physics · QE Program Director",
            description:
              "Cryogenic charge, spin, and heat transport in nanoscale quantum devices: superconductivity, quantum dots, and spintronics.",
            url: "https://people.mines.edu/msingh/",
          },
          {
            title: "Zhang Hybrid Quantum Systems Lab",
            subtitle: "Dr. Zihuai Zhang · Physics",
            description:
              "Superconducting circuits, quantum acoustics and nanomechanics, and quantum defects for sensing and information transfer.",
            url: "https://zhangquantumlab.com/",
          },
          {
            title: "Quantum Materials and Devices (QMAD)",
            subtitle: "Dr. Dharmraj Kotekar-Patil · Physics",
            description:
              "Quantum transport in 2D materials, semiconductor quantum dots, and superconductor–semiconductor hybrid devices.",
            url: "https://dharamkotekar.wordpress.com/",
          },
          {
            title: "Quantum Technologies at the Sensitivity Frontier (QTSF)",
            subtitle: "Dr. Wouter Van De Pontseele · Physics",
            description:
              "Superconducting quantum sensors and quantum-limited amplifiers for neutrino and dark-matter searches, including the CURIE underground lab in the Edgar Mine.",
            url: "https://qtsf.mines.edu/",
          },
          {
            title: "QuILL — Quantum Interfaces Leveraging Laboratory",
            subtitle: "Dr. Hung-Yu Yang · Electrical Engineering",
            description:
              "2D superconducting, topological, and magnetic interfaces for cryogenic electronics, quantum sensing, and topological quantum computing.",
            url: "https://sites.google.com/view/hyylab-quill",
          },
          {
            title: "Microwave & Photonics Lab",
            subtitle: "Dr. Gabriel Santamaria Botello · Electrical Engineering",
            description:
              "Low-noise microwave and photonic sensors, quantum transducers, and parametric amplifiers.",
            url: "https://mwphotonics.com/",
          },
        ],
      },
      {
        heading: "Quantum Optics & Photonics",
        items: [
          {
            title: "Genevet Group",
            subtitle: "Dr. Patrice Genevet · Physics",
            description:
              "Metasurfaces and nanophotonics, including optical characterization of solid-state qubits.",
            url: "https://2dphotonics.weebly.com/",
          },
          {
            title: "Ultrafast Science Research Lab",
            subtitle: "Dr. Jeff Squier · Physics",
            description:
              "Ultrafast laser instrumentation and quantum-enhanced optical characterization and imaging.",
            url: "https://ultrafastoptics.mines.edu/",
          },
          {
            title: "The Crane Lab",
            subtitle: "Dr. Matthew Crane · Chemical & Biological Engineering",
            description:
              "Nanomaterial synthesis, ultrafast spectroscopy, and nanophotonic design, including nanomaterials for quantum information.",
            url: "https://www.thecranelab.org/",
          },
        ],
      },
      {
        heading: "Quantum Materials",
        items: [
          {
            title: "Holtz Research Group",
            subtitle: "Dr. Megan Holtz · Metallurgical & Materials Engineering",
            description:
              "Thin-film growth and atomic-scale electron microscopy of quantum materials, including defects in AlN for quantum information.",
            url: "https://holtz-lab.com/",
          },
          {
            title: "Functional Ceramics Group",
            subtitle: "Dr. Geoff Brennecka · Metallurgical & Materials Engineering",
            description:
              "Dielectric and ferroelectric ceramics, including atomic-scale defects and coherence for quantum applications.",
            url: "https://brenneckalab.mines.edu/",
          },
        ],
      },
    ],
  },
  {
    id: "careers",
    navLabel: "Jobs & Internships",
    title: "Quantum Job Opportunities",
    groups: [
      {
        heading: "Job Boards",
        items: [
          {
            title: "Quantum Economic Development Consortium (QED-C)",
            description:
              "Filter by corporate, academic, and national lab positions, plus internships.",
            url: "https://quantumconsortium.org/quantum-jobs/",
          },
          {
            title: "Chicago Quantum Exchange Talent Portal",
            url: "https://jobs.chicagoquantum.org/jobs",
          },
          {
            title: "NSF Research Experiences for Undergraduates (REUs)",
            description:
              "Summer research across all of science, with many quantum projects. Geared toward students without prior research experience.",
            url: "https://www.nsf.gov/funding/initiatives/reu",
          },
          {
            title: "Elevate Quantum",
            description: "Colorado's quantum tech hub. Updated less frequently.",
            url: "https://www.elevatequantum.org/careers",
          },
        ],
      },
      {
        heading: "Recommended by Students",
        note: "Programs that members of the Mines QE community have done. Reach out to the listed contact with questions.",
        items: [
          {
            title: "Open Quantum Initiative Undergraduate Fellowship",
            subtitle: "Chicago Quantum Exchange",
            url: "https://chicagoquantum.org/oqi-undergraduate-fellowship",
            contact: { name: "Margaux Basart", email: "mbasart@mines.edu" },
          },
          {
            title: "Vescent Systems Engineering Internship",
            subtitle: "Vescent · Golden, CO",
            url: "https://vescent.com/careers",
            contact: { name: "Grey Garner", email: "greygarner@mines.edu" },
          },
          {
            title: "Knight Campus Graduate Internship Program",
            subtitle: "University of Oregon",
            description:
              "An applied master's degree built around a paid, nine-month industry internship, with tracks including semiconductors and optical materials.",
            url: "https://knightcampus.uoregon.edu/internship",
          },
        ],
      },
    ],
  },
  {
    id: "programs",
    navLabel: "Quantum @ Mines",
    title: "Quantum @ Mines",
    intro: [
      "An overview of the quantum academic programs at Mines to help you decide which one is right for you. Full requirements are in the Mines course catalog and at quantum.mines.edu.",
    ],
    groups: [
      {
        heading: "Undergraduate Programs",
        items: [
          {
            title: "B.S. in Quantum Systems Engineering",
            description:
              "An interdisciplinary engineering degree spanning physics, electrical and mechanical engineering, computer science, and math, focused on building and integrating quantum hardware and systems. Ends with a year-long industry-sponsored capstone.",
            url: "https://catalog.mines.edu/undergraduate/academics/degrees/bsinquantumsystems/",
          },
          {
            title: "Minor in Quantum Engineering",
            description:
              "18 credits: linear algebra, three core quantum courses (such as quantum programming, low-temperature microwave measurements, and quantum information), and two electives.",
            url: "https://catalog.mines.edu/undergraduate/academics/minors/quantumengineering/",
          },
        ],
      },
      {
        heading: "Graduate Programs",
        note: "Graduate programs offer a Quantum Engineering Hardware track and a Quantum Engineering Software track.",
        items: [
          {
            title: "Graduate Certificate in Quantum Engineering",
            description:
              "A 12-credit entry point to quantum technologies in either the hardware or software track.",
            url: "https://www.mines.edu/academics/graduate-academics/quantum-engineering-certificate/",
          },
          {
            title: "M.S. in Quantum Engineering",
            description:
              "A 30-credit master's, thesis or non-thesis, preparing engineers for technical roles where physics, engineering, and computing meet. Also available as a combined BS/MS.",
            url: "https://catalog.mines.edu/graduate/programs/interdisciplinaryprograms/quantumengineering/",
          },
        ],
      },
      {
        heading: "More Information",
        items: [
          {
            title: "Quantum Engineering at Mines",
            subtitle: "quantum.mines.edu",
            description: "Curricula, faculty, projects, and news from the Mines Quantum Engineering program.",
            url: "https://quantum.mines.edu/",
          },
        ],
      },
    ],
  },
  {
    id: "conference-funding",
    navLabel: "Conference Funding",
    title: "Conference Funding",
    intro: [
      "SQE helps distribute club and department funds to support quantum engineering students attending conferences. Depending on available funding, grants of up to $500 may be awarded.",
      "Applications open at the beginning of each semester to support conferences that semester. Tell us about the conference you plan to attend and how it supports your professional development. We only accept applications during the application window.",
    ],
    cta: {
      label: "Apply for Conference Funding",
      url: CONFERENCE_FUNDING_FORM_URL,
      pendingLabel: "Application form coming soon",
    },
    groups: [
      {
        heading: "Application Windows",
        items: [
          {
            title: "Fall 2026",
            subtitle: "September 9 – September 27, 2026",
            description: "This window has closed.",
          },
          {
            title: "Spring 2027",
            subtitle: "Dates TBD",
          },
        ],
      },
    ],
  },
];
