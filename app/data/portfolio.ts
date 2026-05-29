// ============================================================
// PORTFOLIO DATA — Muhammad Talha Saeed
// ============================================================

export const personal = {
  name: "Muhammad Talha Saeed",
  title: "Full-Stack Developer & Architect",
  subtitle: "Laravel · Next.js · C++",
  email: "italha.saeedsbr@gmail.com",
  phone: "+92 328 2255882",
  location: "Gujrat, Pakistan",
  github: "https://github.com/saeedsbr",
  githubUsername: "saeedsbr",
  linkedin: "https://www.linkedin.com/in/talha-saeed-0437a6329/",
  twitter: "",
  leetcode: "",
  resumeUrl: "/resume.pdf",
  university: "YOUR UNIVERSITY",       // TODO: fill manually
  degree: "Bachelor of Computer Science",
  graduation: "2024 - 2028",
  university: "University of Management and Technology, Lahore",
  gpa: "",                             // TODO: fill manually
  gpaMax: "4.0",
  status: "Open to opportunities",
  bio: "Motivated software developer with hands-on experience building responsive web interfaces and practical full-stack applications. Strong foundation in Laravel, PHP, Next.js, Spring Boot and C++ programming. Focused on clean structure, team-ready code and real user workflows.",
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
    { name: "PHP",        level: 82 },
    { name: "C++",        level: 75 },
    { name: "Java",       level: 70 },
    { name: "TypeScript", level: 68 },
    { name: "JavaScript", level: 68 },
    { name: "SQL",        level: 70 },
  ],
  frameworks: [
    { name: "Laravel",         level: 88 },
    { name: "Next.js / React", level: 80 },
    { name: "Spring Boot",     level: 70 },
    { name: "HTML/CSS",        level: 78 },
    { name: "Tailwind CSS",    level: 72 },
  ],
  tools: [
    { name: "MySQL",        level: 78 },
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code",      level: 80 },
    { name: "REST APIs",    level: 75 },
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
    title: "Bachelor of Computer Science",
    org: "University of Management and Technology (UMT), Lahore",
    location: "Lahore, Pakistan",
    period: "2024 - 2028",
    bullets: [
      "Pursuing Bachelor of Computer Science (2024-2028)",
    ],
    tech: ["Algorithms", "Data Structures", "Web Development"],
    color: "#00C6FF",
  },
  {
    type: "education" as const,
    title: "Intermediate in Computer Science",
    org: "(Board) - Intermediate",
    location: "Gujrat, Pakistan",
    period: "-",
    bullets: [
      "Approx. 72%",
    ],
    tech: ["HTML", "CSS", "Programming Fundamentals"],
    color: "#00C6FF",
  },
  {
    type: "education" as const,
    title: "Matriculation",
    org: "(Board) - Matriculation",
    location: "Gujrat, Pakistan",
    period: "-",
    bullets: [
      "Approx. 90%",
    ],
    tech: [],
    color: "#00C6FF",
  },
  {
    type: "training" as const,
    title: "C++ Programming Internship & Training",
    org: "Arch Technologies",
    location: "",
    period: "Feb 1 - Mar 25, 2026",
    bullets: [
      "Completed structured C++ programming internship and training program.",
      "Recognized for professionalism, punctuality, and growth potential.",
    ],
    tech: ["C++", "Problem Solving"],
    color: "#FF0055",
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
