export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export type Project = {
  name: string;
  githubUrl: string;
  bullets: string[];
};

export type Resume = {
  name: string;
  title: string;
  location: string;
  phone: string;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  links: {
    email: string;
    linkedin: string;
    phone: string;
  };
};

export const resume: Resume = {
  name: "Eric Tran",
  title: "Senior Full Stack Software Engineer",
  location: "San Francisco Bay Area",
  phone: "408.701.7348",
  summary:
    "Hey! You found me. I'm Eric, a full stack developer based in San Jose, CA. For the past 10+ years I've been building products people use every day, most recently at Quizlet on AI, search, and growth for 60M+ monthly users. What excites me most is the user-facing side: adding small, delightful touches and fixing the everyday problems that genuinely get in people's way. I love owning work end to end — from the backend to the screen someone is staring at when they're just trying to get something done.",
  experience: [
    {
      company: "Quizlet",
      role: "Senior Software Engineer",
      location: "San Francisco, CA",
      dates: "June 2025 – June 2026",
      bullets: [
        "Designed Quizlet's RAG indexing pipeline using Vertex AI RAG Engine and Go microservices — event-driven file ingestion, chunk retrieval APIs, and GCP infrastructure for AI-generated content.",
        "Migrated core search logic from a PHP monolith to a Go microservice; built Elasticsearch query classes and reduced SLO breaches from 11 to 4 across search endpoints.",
      ],
    },
    {
      company: "Quizlet",
      role: "Software Engineer",
      location: "San Francisco, CA",
      dates: "Nov 2021 – June 2025",
      bullets: [
        "Overhauled Folders into a cross-material organizational system with tag-based hierarchy; authored the engineering plan, DB schema, APIs, and frontend — shipped on time for Back to School.",
        "Built ML-driven course and exam discovery — SDUI endpoints, Next.js routing, feature flags, and SEO metadata as a primary organic entry point for students and teachers.",
        "Owned 10% of production traffic cutover in Hack-to-PHP migration; resolved blockers, enhanced diffing tooling, and migrated async batch jobs.",
        "Integrated Zuora subscription lifecycle workflows and led end-to-end Apple Pay implementation on web and mWeb.",
      ],
    },
    {
      company: "Infor Nexus",
      role: "Software Engineer",
      location: "Oakland, CA",
      dates: "July 2016 – Nov 2021",
      bullets: [
        "Delivered full stack supply chain features — inventory visibility, shipment tracking, and predictive supply chain intelligence including a global inventory dashboard.",
        "Recruited and mentored 8 junior engineers and interns through university channels over a 5-year tenure.",
      ],
    },
    {
      company: "Harman International",
      role: "Software Development Intern",
      location: "Palo Alto, CA",
      dates: "June 2015 – September 2015",
      bullets: [
        "Built an end-to-end IoT proof-of-concept for Harman's connected speaker platform — modeled smart-home scenarios with multi-device audio orchestration.",
        "Integrated third-party APIs and connected-home platforms into iOS client applications that powered the demo experience.",
        "Supported engineering teams and hackathon participants on Harman SDK integration, troubleshooting, and adoption patterns.",
      ],
    },
  ],
  projects: [
    {
      name: "Surplus",
      githubUrl: "https://github.com/etran04/Surplus",
      bullets: [
        "Built an iOS marketplace connecting Cal Poly freshmen with surplus dining credit to upperclassmen and campus-area buyers.",
        "Owned backend data handling and front-end design for listings, transactions, and credential exchange flows.",
      ],
    },
    {
      name: "Follow Me Audio",
      githubUrl: "https://github.com/etran04/FollowMeAudio",
      bullets: [
        "Developed a Swift iOS app integrating iBeacons with Harman speakers for proximity-triggered audio playback.",
        "Implemented beacon ranging and speaker handoff logic so audio followed users as they moved through a space.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "PHP", "Java", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML/CSS"],
    },
    {
      category: "Backend & Cloud",
      items: [
        "Go",
        "REST APIs",
        "Microservices",
        "GCP",
        "Event-Driven Architecture",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQL Server"],
    },
    {
      category: "AI Tooling",
      items: [
        "Vertex AI RAG Engine",
        "Claude Code",
        "Cursor",
        "MCPs",
        "LLM Integration",
      ],
    },
  ],
  education: [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      degree: "Bachelor of Science, Software Engineering",
      year: "June 2016",
    },
  ],
  links: {
    email: "erictritrann@gmail.com",
    linkedin: "https://linkedin.com/in/erictritran",
    phone: "4087017348",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
