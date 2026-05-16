// ============================================================
// PORTFOLIO DATA — Fill in your details here
// ============================================================

export const personal = {
  name: "YOUR NAME",
  title: "Computer Science Student",
  tagline: "Full-Stack Developer | AI Enthusiast | Open Source Contributor",
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  location: "City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  resume: "/resume.pdf",
  bio: [
    "I'm a passionate Computer Science student with a love for building things that live on the internet.",
    "I specialize in full-stack development, machine learning, and competitive programming. When I'm not coding, you'll find me contributing to open source or solving algorithmic puzzles.",
    "Currently looking for internships and collaborative projects to push boundaries and ship cool stuff.",
  ],
  status: "Open to opportunities",
  university: "Your University Name",
  degree: "B.Sc. Computer Science",
  graduation: "2026",
  gpa: "3.9 / 4.0",
};

export const stats = [
  { label: "Projects Built", value: "20+", icon: "💻" },
  { label: "GitHub Stars", value: "150+", icon: "⭐" },
  { label: "Contributions", value: "500+", icon: "🔥" },
  { label: "Cups of Coffee", value: "∞", icon: "☕" },
];

export const skills = {
  languages: [
    { name: "Python",     level: 90, color: "#3776ab" },
    { name: "TypeScript", level: 85, color: "#3178c6" },
    { name: "JavaScript", level: 88, color: "#f7df1e" },
    { name: "C++",        level: 80, color: "#00599c" },
    { name: "Java",       level: 75, color: "#ed8b00" },
    { name: "Rust",       level: 60, color: "#dea584" },
  ],
  frontend: [
    { name: "React",      level: 88, color: "#61dafb" },
    { name: "Next.js",    level: 85, color: "#ffffff" },
    { name: "Tailwind",   level: 90, color: "#38bdf8" },
    { name: "TypeScript", level: 85, color: "#3178c6" },
    { name: "Redux",      level: 78, color: "#764abc" },
    { name: "GraphQL",    level: 70, color: "#e535ab" },
  ],
  backend: [
    { name: "Node.js",    level: 85, color: "#339933" },
    { name: "FastAPI",    level: 82, color: "#009688" },
    { name: "Django",     level: 78, color: "#092e20" },
    { name: "PostgreSQL", level: 80, color: "#336791" },
    { name: "Redis",      level: 72, color: "#dc382d" },
    { name: "Docker",     level: 75, color: "#2496ed" },
  ],
  ml: [
    { name: "PyTorch",    level: 80, color: "#ee4c2c" },
    { name: "TensorFlow", level: 72, color: "#ff6f00" },
    { name: "Scikit-learn",level: 85,color: "#f89939" },
    { name: "Pandas",     level: 88, color: "#150458" },
    { name: "OpenCV",     level: 70, color: "#5c3ee8" },
    { name: "LangChain",  level: 75, color: "#1c3c3c" },
  ],
};

export const techIcons = [
  "Python", "TypeScript", "React", "Next.js", "Node.js",
  "Docker", "AWS", "Git", "PostgreSQL", "Redis",
  "PyTorch", "FastAPI", "Linux", "GraphQL", "MongoDB",
];

export const projects = [
  {
    id: 1,
    name: "AI Code Reviewer",
    description:
      "An intelligent code review tool powered by GPT-4 that analyzes pull requests, detects bugs, suggests improvements, and enforces coding standards automatically.",
    tech: ["Python", "FastAPI", "React", "OpenAI API", "GitHub Actions"],
    github: "https://github.com/yourusername/ai-code-reviewer",
    demo: "https://ai-code-reviewer.vercel.app",
    featured: true,
    color: "#00d9ff",
    category: "AI/ML",
    stars: 87,
  },
  {
    id: 2,
    name: "DistributedDB",
    description:
      "A distributed key-value store built from scratch using the Raft consensus algorithm, supporting fault tolerance, leader election, and log replication.",
    tech: ["Go", "Raft", "gRPC", "Docker", "Kubernetes"],
    github: "https://github.com/yourusername/distributeddb",
    demo: null,
    featured: true,
    color: "#00ff88",
    category: "Systems",
    stars: 63,
  },
  {
    id: 3,
    name: "NeuralDraw",
    description:
      "Real-time sketch-to-image generation using diffusion models. Draw a rough sketch and watch AI render it into a photorealistic image in seconds.",
    tech: ["Python", "PyTorch", "Diffusers", "WebSocket", "React"],
    github: "https://github.com/yourusername/neuraldraw",
    demo: "https://neuraldraw.app",
    featured: true,
    color: "#7c3aed",
    category: "AI/ML",
    stars: 142,
  },
  {
    id: 4,
    name: "DevFlow",
    description:
      "A developer productivity dashboard that aggregates GitHub activity, Jira tickets, Slack messages, and CI/CD status into one unified interface.",
    tech: ["Next.js", "TypeScript", "Prisma", "tRPC", "PostgreSQL"],
    github: "https://github.com/yourusername/devflow",
    demo: "https://devflow.io",
    featured: false,
    color: "#ff6b35",
    category: "Full-Stack",
    stars: 31,
  },
  {
    id: 5,
    name: "CompetitiveCP",
    description:
      "A platform for collaborative competitive programming where teams can solve problems together with real-time shared editors and video calls.",
    tech: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB"],
    github: "https://github.com/yourusername/competitivecp",
    demo: null,
    featured: false,
    color: "#f59e0b",
    category: "Full-Stack",
    stars: 19,
  },
  {
    id: 6,
    name: "PacketScope",
    description:
      "A lightweight network packet analyzer with a beautiful TUI that captures, filters, and visualizes network traffic with protocol dissection.",
    tech: ["Rust", "libpcap", "ratatui", "async-std"],
    github: "https://github.com/yourusername/packetscope",
    demo: null,
    featured: false,
    color: "#ec4899",
    category: "Systems",
    stars: 55,
  },
];

export const experience = [
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Developed and deployed 3 microservices using Node.js and Docker, reducing API latency by 40%",
      "Built an internal CLI tool that automated deployment workflows, saving the team 5+ hours/week",
      "Contributed to open-source tooling used by 10K+ developers across the company's ecosystem",
    ],
    tech: ["Node.js", "Docker", "AWS Lambda", "TypeScript", "PostgreSQL"],
    color: "#00d9ff",
  },
  {
    type: "work",
    title: "ML Research Intern",
    company: "AI Research Lab",
    location: "University Lab",
    period: "Jan 2024 – May 2024",
    description: [
      "Trained and fine-tuned transformer models for code summarization with 78% BLEU score",
      "Published findings in a student research symposium, presented to 200+ attendees",
      "Built a dataset pipeline that processed 500K code snippets with automated quality filtering",
    ],
    tech: ["PyTorch", "Hugging Face", "Python", "CUDA", "Weights & Biases"],
    color: "#00ff88",
  },
  {
    type: "education",
    title: "B.Sc. Computer Science",
    company: "Your University",
    location: "City, Country",
    period: "2022 – 2026",
    description: [
      "GPA: 3.9/4.0 — Dean's List all semesters",
      "Relevant coursework: Data Structures, Algorithms, OS, Distributed Systems, ML, Compilers",
      "President of the CS Club — organized 15+ workshops, hackathons, and industry panels",
    ],
    tech: ["Algorithms", "OS", "Distributed Systems", "Machine Learning"],
    color: "#7c3aed",
  },
];

export const achievements = [
  { title: "ICPC Regional Finalist", desc: "Top 5% in the ICPC Regional Programming Contest", icon: "🏆" },
  { title: "Google Summer of Code", desc: "Selected contributor for open-source project", icon: "🌟" },
  { title: "Hackathon Winner", desc: "1st place at University Hackathon 2024 (150 teams)", icon: "🥇" },
  { title: "AWS Certified", desc: "AWS Certified Developer – Associate", icon: "☁️" },
];
