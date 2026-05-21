// ============================================================
// PORTFOLIO DATA — Muhammad Talha Saeed
// ============================================================

export const personal = {
  name: "Muhammad Talha Saeed",
  title: "Full-Stack Developer & Architect",
  subtitle: "Java · Spring Boot · Next.js · Laravel",
  email: "italha.saeedsbr@gmail.com",
  phone: "",
  location: "Lahore, Pakistan",
  github: "https://github.com/saeedsbr",
  githubUsername: "saeedsbr",
  linkedin: "https://www.linkedin.com/in/talha-saeed-0437a6329/",
  twitter: "",
  leetcode: "",
  resumeUrl: "/resume.pdf",
  university: "YOUR UNIVERSITY",       // TODO: fill manually
  degree: "YOUR DEGREE",               // TODO: fill manually
  graduation: "YOUR GRADUATION YEAR",  // TODO: fill manually
  gpa: "",                             // TODO: fill manually
  gpaMax: "4.0",
  status: "Open to opportunities",
  bio: "I architect full-stack systems — from robust Spring Boot APIs to pixel-perfect Next.js UIs. Focused on clean code, scalable architecture, and enterprise-grade applications that deliver real-world impact.",
};

export const stats = {
  leetcodeRating: 0,    // TODO: add if you have a LeetCode profile
  githubCommits: 500,   // TODO: verify your actual commit count
  papersRead: 0,        // TODO: update if applicable
  hackathonsWon: 0,     // TODO: update if applicable
  opensourcePrs: 0,     // TODO: update if applicable
  coffeeCups: "999+",
};

export const skills = {
  languages: [
    { name: "Java",       level: 93 },
    { name: "TypeScript", level: 82 },
    { name: "PHP",        level: 73 },
    { name: "JavaScript", level: 80 },
    { name: "Python",     level: 65 },
    { name: "C++",        level: 60 },
  ],
  frameworks: [
    { name: "Spring Boot",     level: 90 },
    { name: "Next.js / React", level: 86 },
    { name: "Laravel",         level: 76 },
    { name: "Tailwind CSS",    level: 82 },
    { name: "Hibernate / JPA", level: 78 },
    { name: "Node.js",         level: 70 },
  ],
  tools: [
    { name: "Git / GitHub",       level: 90 },
    { name: "MySQL / PostgreSQL", level: 80 },
    { name: "MongoDB",            level: 75 },
    { name: "Docker",             level: 65 },
    { name: "Redis",              level: 70 },
    { name: "Linux / Shell",      level: 74 },
  ],
};

export const techCloud = [
  "Java", "Spring Boot", "TypeScript", "Next.js", "React",
  "Laravel", "PHP", "Python", "C++", "JavaScript",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker",
  "Tailwind CSS", "Hibernate", "Maven", "Git", "Linux",
];

export const projects = [
  {
    id: 1,
    name: "LifePulse",
    description: "All-in-one personal life management app — vehicle management, budget tracking, and essential daily life activities from a single unified platform.",
    techStack: ["Java", "Spring Boot", "TypeScript", "Next.js", "MySQL"],
    githubRepo: "saeedsbr/family_app.spring-boot",
    liveUrl: null,
    difficulty: "Advanced" as const,
    featured: true,
    lastCommit: "5d ago",
    color: "#00C6FF",
    category: "Full-Stack",
    stars: 0,
  },
  {
    id: 2,
    name: "BuildCares",
    description: "A full-stack Laravel application for construction & care management — streamlining project workflows, task tracking, and team coordination.",
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    githubRepo: "saeedsbr/buildcares-laravel",
    liveUrl: null,
    difficulty: "Advanced" as const,
    featured: true,
    lastCommit: "today",
    color: "#FF0055",
    category: "Full-Stack",
    stars: 0,
  },
  {
    id: 3,
    name: "ProjFlow",
    description: "Comprehensive project, stakeholder & financial management platform — project tracking with Kanban boards, AES-256 encrypted financials, real-time team chat, WebRTC video calling, invoice generation with 7 templates, and secure client portals.",
    techStack: ["Laravel 12", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "WebRTC"],
    githubRepo: "saeedsbr/project-management-laravel",
    liveUrl: null,
    difficulty: "Expert" as const,
    featured: true,
    lastCommit: "recently",
    color: "#00FF85",
    category: "Full-Stack",
    stars: 0,
  },
];

export const experience = [
  // TODO: Add your real work experience entries here using this shape:
  // {
  //   type: "work" as const,
  //   title: "Your Role",
  //   org: "Company Name",
  //   location: "City, Country (Remote)",
  //   period: "Mon YYYY – Mon YYYY",
  //   bullets: ["achievement 1", "achievement 2", "achievement 3"],
  //   tech: ["Tech1", "Tech2"],
  //   color: "#00FF85",
  // },
  {
    type: "education" as const,
    title: "YOUR DEGREE",          // TODO: fill manually
    org: "YOUR UNIVERSITY",        // TODO: fill manually
    location: "Lahore, Pakistan",
    period: "YYYY – YYYY",         // TODO: fill manually
    bullets: [
      "TODO: add your GPA / academic standing",
      "TODO: add notable coursework",
      "TODO: add clubs, societies, or leadership roles",
    ],
    tech: ["Java", "Spring Boot", "Next.js", "Laravel", "Databases"],
    color: "#00C6FF",
  },
];

export const achievements = [
  { icon: "🚀", title: "GeoPulse Platform",        desc: "Flagship geopolitics intelligence app — targeting 1K+ users at launch" },
  { icon: "🏗️", title: "20+ Projects Built",       desc: "Spanning Java backends, Next.js frontends, and cross-platform apps" },
  { icon: "⚡", title: "Multi-Stack Architect",    desc: "Expert in Spring Boot + Next.js — production-grade enterprise systems" },
  { icon: "☕", title: "999+ Coffees Consumed",    desc: "Building real-world impact one commit at a time" },
];

export const navItems = [
  { label: "About",      href: "#about",      icon: "01" },
  { label: "Skills",     href: "#skills",     icon: "02" },
  { label: "Projects",   href: "#projects",   icon: "03" },
  { label: "Experience", href: "#experience", icon: "04" },
  { label: "Contact",    href: "#contact",    icon: "05" },
];
