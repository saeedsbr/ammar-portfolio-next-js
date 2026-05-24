module.exports = [
"[project]/components/MatrixBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatrixBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MatrixBackground() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        const fontSize = 13;
        let cols = Math.floor(canvas.width / fontSize);
        const drops = Array(cols).fill(1);
        const chars = '01アイウエオ{}[]()<>/\\|';
        const draw = ()=>{
            cols = Math.floor(canvas.width / fontSize);
            while(drops.length < cols)drops.push(Math.random() * -50);
            ctx.fillStyle = 'rgba(5,11,20,0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
            for(let i = 0; i < drops.length; i++){
                const bright = Math.random() > 0.95;
                ctx.fillStyle = bright ? '#FFFFFF' : '#00FF85';
                ctx.globalAlpha = bright ? 0.9 : 0.25;
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                ctx.globalAlpha = 1;
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        const id = setInterval(draw, 60);
        return ()=>{
            clearInterval(id);
            window.removeEventListener('resize', resize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: "fixed top-0 left-0 z-0 pointer-events-none",
        style: {
            opacity: 0.04
        }
    }, void 0, false, {
        fileName: "[project]/components/MatrixBackground.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PORTFOLIO DATA — Replace placeholders with your real data
// ============================================================
__turbopack_context__.s([
    "achievements",
    ()=>achievements,
    "experience",
    ()=>experience,
    "navItems",
    ()=>navItems,
    "personal",
    ()=>personal,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats,
    "techCloud",
    ()=>techCloud
]);
const personal = {
    name: "YOUR NAME",
    title: "CS Student",
    subtitle: "ML Enthusiast · Full-Stack Dev · Open Source",
    email: "your@email.com",
    phone: "+1 (555) 000-0000",
    location: "City, Country",
    github: "https://github.com/yourusername",
    githubUsername: "yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    leetcode: "https://leetcode.com/yourusername",
    resumeUrl: "/resume.pdf",
    university: "State University of Technology",
    degree: "B.Sc. Computer Science",
    graduation: "May 2026",
    gpa: "3.9",
    gpaMax: "4.0",
    status: "Open to opportunities",
    bio: "I build things at the intersection of systems, machine learning, and the web. Passionate about distributed systems, LLM tooling, and competitive programming."
};
const stats = {
    leetcodeRating: 1847,
    githubCommits: 847,
    papersRead: 23,
    hackathonsWon: 2,
    opensourcePrs: 12,
    coffeeCups: "∞"
};
const skills = {
    languages: [
        {
            name: "TypeScript",
            level: 90
        },
        {
            name: "Python",
            level: 88
        },
        {
            name: "Go",
            level: 78
        },
        {
            name: "Rust",
            level: 65
        },
        {
            name: "C++",
            level: 80
        },
        {
            name: "Java",
            level: 72
        }
    ],
    frameworks: [
        {
            name: "React / Next.js",
            level: 92
        },
        {
            name: "FastAPI",
            level: 84
        },
        {
            name: "PyTorch",
            level: 80
        },
        {
            name: "tRPC / Prisma",
            level: 78
        },
        {
            name: "Node.js",
            level: 85
        },
        {
            name: "Spring Boot",
            level: 68
        }
    ],
    tools: [
        {
            name: "Docker / K8s",
            level: 80
        },
        {
            name: "AWS",
            level: 75
        },
        {
            name: "Git / CI-CD",
            level: 90
        },
        {
            name: "PostgreSQL",
            level: 82
        },
        {
            name: "Redis",
            level: 74
        },
        {
            name: "Linux / Shell",
            level: 85
        }
    ]
};
const techCloud = [
    "TypeScript",
    "Python",
    "Go",
    "Rust",
    "React",
    "Next.js",
    "PyTorch",
    "FastAPI",
    "Docker",
    "AWS",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "gRPC",
    "Linux",
    "Kubernetes",
    "TensorFlow",
    "LangChain",
    "Prisma",
    "WebRTC"
];
const projects = [
    {
        id: 1,
        name: "NeuralCode",
        description: "GPT-4 powered code reviewer that analyzes PRs using RAG over your codebase, detecting bugs with 91% precision. Processes 10K lines/sec via multithreaded AST parsing.",
        techStack: [
            "Next.js",
            "FastAPI",
            "Vector DB",
            "OpenAI",
            "GitHub Actions"
        ],
        githubRepo: "yourusername/neuralcode",
        liveUrl: "https://neuralcode.app",
        difficulty: "Expert",
        featured: true,
        lastCommit: "2h ago",
        color: "#00FF85",
        category: "AI/ML",
        stars: 142
    },
    {
        id: 2,
        name: "DistributedDB",
        description: "Key-value store built from scratch using the Raft consensus algorithm. Supports leader election, log replication, and snapshotting with sub-5ms p99 latency.",
        techStack: [
            "Go",
            "Raft",
            "gRPC",
            "Docker"
        ],
        githubRepo: "yourusername/distributeddb",
        liveUrl: null,
        difficulty: "Expert",
        featured: true,
        lastCommit: "1d ago",
        color: "#FF0055",
        category: "Systems",
        stars: 89
    },
    {
        id: 3,
        name: "DevFlow",
        description: "Developer productivity hub aggregating GitHub, Jira, and CI/CD status. Real-time updates via WebSocket with tRPC end-to-end type safety across 40+ API endpoints.",
        techStack: [
            "Next.js",
            "tRPC",
            "Prisma",
            "PostgreSQL",
            "WebSocket"
        ],
        githubRepo: "yourusername/devflow",
        liveUrl: "https://devflow.sh",
        difficulty: "Advanced",
        featured: true,
        lastCommit: "5h ago",
        color: "#00C6FF",
        category: "Full-Stack",
        stars: 56
    },
    {
        id: 4,
        name: "PacketScope",
        description: "Zero-dependency network packet analyzer with a TUI. Captures, filters, and visualizes traffic with protocol dissection down to the TCP/IP layer.",
        techStack: [
            "Rust",
            "libpcap",
            "ratatui"
        ],
        githubRepo: "yourusername/packetscope",
        liveUrl: null,
        difficulty: "Advanced",
        featured: false,
        lastCommit: "3d ago",
        color: "#FF5500",
        category: "Systems",
        stars: 34
    },
    {
        id: 5,
        name: "CompeteCP",
        description: "Real-time collaborative competitive programming platform with shared Monaco editor, WebRTC video calls, and automated judge backed by sandbox execution.",
        techStack: [
            "React",
            "Node.js",
            "Socket.IO",
            "WebRTC",
            "Docker"
        ],
        githubRepo: "yourusername/competecp",
        liveUrl: "https://competecp.io",
        difficulty: "Advanced",
        featured: false,
        lastCommit: "1w ago",
        color: "#FFB800",
        category: "Full-Stack",
        stars: 23
    },
    {
        id: 6,
        name: "LLM Eval Bench",
        description: "Automated evaluation harness for LLMs on coding tasks. Runs parallel sandboxed execution, computes pass@k metrics, and plots latency/accuracy tradeoffs.",
        techStack: [
            "Python",
            "PyTorch",
            "Docker",
            "Celery",
            "Redis"
        ],
        githubRepo: "yourusername/llm-eval",
        liveUrl: null,
        difficulty: "Intermediate",
        featured: false,
        lastCommit: "12h ago",
        color: "#7C3AED",
        category: "AI/ML",
        stars: 67
    }
];
const experience = [
    {
        type: "work",
        title: "Software Engineering Intern",
        org: "TechCorp Inc.",
        location: "San Francisco, CA (Remote)",
        period: "Jun – Aug 2024",
        bullets: [
            "Shipped 3 microservices in Node.js + Docker, cutting API p99 latency by 40%",
            "Built an internal deployment CLI used by 60+ engineers, saving 5+ hrs/week",
            "Contributed upstream to an OSS project with 10K+ stars (2 PRs merged)"
        ],
        tech: [
            "Node.js",
            "TypeScript",
            "Docker",
            "AWS Lambda"
        ],
        color: "#00FF85"
    },
    {
        type: "work",
        title: "ML Research Intern",
        org: "University AI Lab",
        location: "On-campus",
        period: "Jan – May 2024",
        bullets: [
            "Fine-tuned CodeBERT for code summarization — achieved 78.4 BLEU on CodeSearchNet",
            "Published at the university research symposium (200+ attendees)",
            "Built a 500K-sample data pipeline with automated deduplication and quality scoring"
        ],
        tech: [
            "PyTorch",
            "Hugging Face",
            "CUDA",
            "W&B"
        ],
        color: "#FF0055"
    },
    {
        type: "education",
        title: "B.Sc. Computer Science",
        org: "State University of Technology",
        location: "City, Country",
        period: "2022 – 2026",
        bullets: [
            "GPA 3.9/4.0 — Dean's List (all 5 semesters)",
            "Coursework: Algorithms, OS, Distributed Systems, Compilers, ML, Cryptography",
            "President — CS Club (15 workshops, 3 hackathons, 200+ members)"
        ],
        tech: [
            "Algorithms",
            "OS",
            "Distributed Systems",
            "ML"
        ],
        color: "#00C6FF"
    }
];
const achievements = [
    {
        icon: "🏆",
        title: "ICPC Regional Finalist",
        desc: "Top 3% out of 4,200 contestants"
    },
    {
        icon: "🌟",
        title: "Google Summer of Code",
        desc: "Selected contributor — open source"
    },
    {
        icon: "🥇",
        title: "Hackathon Winner × 2",
        desc: "1st place @UniHack (150 teams)"
    },
    {
        icon: "☁️",
        title: "AWS Developer Associate",
        desc: "Certified — cloud architecture"
    }
];
const navItems = [
    {
        label: "About",
        href: "#about",
        icon: "01"
    },
    {
        label: "Skills",
        href: "#skills",
        icon: "02"
    },
    {
        label: "Projects",
        href: "#projects",
        icon: "03"
    },
    {
        label: "Experience",
        href: "#experience",
        icon: "04"
    },
    {
        label: "Contact",
        href: "#contact",
        icon: "05"
    }
];
}),
"[project]/components/CommandPalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const commands = [
    {
        label: 'Go to About',
        icon: '01',
        action: ()=>document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
            })
    },
    {
        label: 'Go to Skills',
        icon: '02',
        action: ()=>document.getElementById('skills')?.scrollIntoView({
                behavior: 'smooth'
            })
    },
    {
        label: 'Go to Projects',
        icon: '03',
        action: ()=>document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
            })
    },
    {
        label: 'Go to Experience',
        icon: '04',
        action: ()=>document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth'
            })
    },
    {
        label: 'Go to Contact',
        icon: '05',
        action: ()=>document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
            })
    },
    {
        label: 'Open GitHub',
        icon: '↗',
        action: ()=>window.open(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].github, '_blank')
    },
    {
        label: 'Open LinkedIn',
        icon: '↗',
        action: ()=>window.open(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].linkedin, '_blank')
    },
    {
        label: 'Download Resume',
        icon: '↓',
        action: ()=>window.open(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].resumeUrl, '_blank')
    },
    {
        label: 'Send Email',
        icon: '✉',
        action: ()=>{
            window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].email}`;
        }
    }
];
function CommandPalette({ open, onClose }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filtered = commands.filter((c)=>c.label.toLowerCase().includes(query.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            setQuery('');
            setCursor(0);
            inputRef.current?.focus();
        }
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCursor(0);
    }, [
        query
    ]);
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cmd)=>{
        cmd.action();
        onClose();
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (!open) return;
            if (e.key === 'Escape') {
                onClose();
                return;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setCursor((c)=>Math.min(c + 1, filtered.length - 1));
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setCursor((c)=>Math.max(c - 1, 0));
            }
            if (e.key === 'Enter' && filtered[cursor]) {
                execute(filtered[cursor]);
            }
        };
        window.addEventListener('keydown', handler);
        return ()=>window.removeEventListener('keydown', handler);
    }, [
        open,
        cursor,
        filtered,
        execute,
        onClose
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cmd-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cmd-box",
            onClick: (e)=>e.stopPropagation(),
            style: {
                margin: '0 16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    style: {
                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: '#8B9BB4',
                                paddingLeft: 20,
                                fontSize: '1.1rem'
                            },
                            children: "⌘"
                        }, void 0, false, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            className: "cmd-input",
                            placeholder: "Type a command...",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            style: {
                                fontFamily: 'var(--font-mono)',
                                paddingLeft: 4
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "text-xs mr-4 px-2 py-1 rounded",
                            style: {
                                color: '#8B9BB4',
                                border: '1px solid rgba(139,155,180,0.2)',
                                whiteSpace: 'nowrap'
                            },
                            children: "ESC"
                        }, void 0, false, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommandPalette.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxHeight: 340,
                        overflowY: 'auto',
                        padding: '8px 0'
                    },
                    children: [
                        filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center py-8 text-sm",
                            style: {
                                color: '#8B9BB4'
                            },
                            children: [
                                'No results for "',
                                query,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        filtered.map((cmd, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `cmd-item ${i === cursor ? 'active' : ''}`,
                                onClick: ()=>execute(cmd),
                                onMouseEnter: ()=>setCursor(i),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 rounded flex items-center justify-center text-xs flex-shrink-0",
                                        style: {
                                            background: i === cursor ? 'rgba(0,255,133,0.12)' : 'rgba(255,255,255,0.04)',
                                            color: i === cursor ? '#00FF85' : '#8B9BB4',
                                            fontFamily: 'var(--font-mono)',
                                            border: '1px solid rgba(255,255,255,0.06)'
                                        },
                                        children: cmd.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/CommandPalette.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: i === cursor ? '#FFFFFF' : '#8B9BB4',
                                            fontSize: '0.9rem'
                                        },
                                        children: cmd.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/CommandPalette.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    i === cursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "ml-auto text-xs px-2 py-0.5 rounded",
                                        style: {
                                            color: '#00FF85',
                                            border: '1px solid rgba(0,255,133,0.2)',
                                            background: 'rgba(0,255,133,0.06)'
                                        },
                                        children: "Enter ↵"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CommandPalette.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cmd.label, true, {
                                fileName: "[project]/components/CommandPalette.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommandPalette.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 px-5 py-3 text-xs",
                    style: {
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        color: '#8B9BB4'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    style: {
                                        color: '#00FF85'
                                    },
                                    children: "↑↓"
                                }, void 0, false, {
                                    fileName: "[project]/components/CommandPalette.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                " navigate"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    style: {
                                        color: '#00FF85'
                                    },
                                    children: "↵"
                                }, void 0, false, {
                                    fileName: "[project]/components/CommandPalette.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this),
                                " select"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    style: {
                                        color: '#00FF85'
                                    },
                                    children: "Esc"
                                }, void 0, false, {
                                    fileName: "[project]/components/CommandPalette.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                " close"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto",
                            style: {
                                fontFamily: 'var(--font-mono)'
                            },
                            children: "⌘K"
                        }, void 0, false, {
                            fileName: "[project]/components/CommandPalette.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommandPalette.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CommandPalette.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CommandPalette.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CommandPalette.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cmdOpen, setCmdOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ── Scroll tracking ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 60);
            const ids = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((n)=>n.href.slice(1));
            for (const id of [
                ...ids
            ].reverse()){
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    /* ── Cmd+K / Ctrl+K ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCmdOpen((prev)=>!prev);
            }
        };
        window.addEventListener('keydown', handler);
        return ()=>window.removeEventListener('keydown', handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: cmdOpen,
                onClose: ()=>setCmdOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                style: {
                    background: scrolled ? 'rgba(5,11,20,0.92)' : 'transparent',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-6 py-5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: {
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    letterSpacing: '-0.02em',
                                    color: '#FFFFFF'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#00FF85'
                                        },
                                        children: '<'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name.split(' ')[0],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#00FF85'
                                        },
                                        children: '>'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-1",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            className: "relative px-4 py-2 text-sm transition-colors duration-200",
                                            style: {
                                                fontFamily: 'var(--font-mono)',
                                                color: active === item.href.slice(1) ? '#00FF85' : '#8B9BB4',
                                                letterSpacing: '0.05em'
                                            },
                                            onMouseEnter: (e)=>{
                                                if (active !== item.href.slice(1)) e.currentTarget.style.color = '#FFFFFF';
                                            },
                                            onMouseLeave: (e)=>{
                                                if (active !== item.href.slice(1)) e.currentTarget.style.color = '#8B9BB4';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#00FF85',
                                                        fontSize: '0.65rem',
                                                        marginRight: 4
                                                    },
                                                    children: [
                                                        item.icon,
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                item.label.toLowerCase(),
                                                active === item.href.slice(1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bottom-0 left-4 right-4 h-px",
                                                    style: {
                                                        background: 'linear-gradient(90deg, #00FF85, transparent)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.href, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCmdOpen(true),
                                        className: "ml-3 flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-all duration-200",
                                        style: {
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#8B9BB4',
                                            background: 'rgba(255,255,255,0.03)',
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = 'rgba(0,255,133,0.4)';
                                            e.currentTarget.style.color = '#00FF85';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.color = '#8B9BB4';
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⌘K"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].resumeUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "ml-2 px-4 py-2 text-xs rounded-md transition-all duration-200",
                                        style: {
                                            border: '1px solid rgba(0,255,133,0.4)',
                                            color: '#00FF85',
                                            background: 'rgba(0,255,133,0.06)',
                                            fontFamily: 'var(--font-mono)',
                                            letterSpacing: '0.08em'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = 'rgba(0,255,133,0.12)';
                                            e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,133,0.2)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'rgba(0,255,133,0.06)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        },
                                        children: "resume.pdf"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden flex flex-col gap-1.5 p-1",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                "aria-label": "Menu",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-px w-6 transition-all",
                                        style: {
                                            background: menuOpen ? '#00FF85' : '#8B9BB4',
                                            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : menuOpen && i === 1 ? 'scaleX(0)' : 'none'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden px-6 pb-8 flex flex-col gap-1",
                        style: {
                            background: 'rgba(5,11,20,0.98)',
                            borderTop: '1px solid rgba(255,255,255,0.06)'
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    onClick: ()=>setMenuOpen(false),
                                    className: "flex items-center gap-3 py-3",
                                    style: {
                                        color: '#8B9BB4',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#00FF85'
                                            },
                                            children: [
                                                item.icon,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        item.label.toLowerCase()
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMenuOpen(false);
                                    setCmdOpen(true);
                                },
                                className: "flex items-center gap-3 py-3 mt-2",
                                style: {
                                    color: '#8B9BB4',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.9rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#00FF85'
                                        },
                                        children: "⌘"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    "Command palette"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/MagneticButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MagneticButton({ children, className = '', style = {}, href, onClick, strength = 0.35, target, rel }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMove = (e)=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        setPos({
            x: (e.clientX - cx) * strength,
            y: (e.clientY - cy) * strength
        });
    };
    const handleLeave = ()=>setPos({
            x: 0,
            y: 0
        });
    const common = {
        className: `mag-btn ${className}`,
        style: {
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: pos.x === 0 && pos.y === 0 ? 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' : 'transform 0.1s ease',
            ...style
        },
        onMouseMove: handleMove,
        onMouseLeave: handleLeave,
        onClick
    };
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            href: href,
            target: target,
            rel: rel,
            ...common,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/MagneticButton.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: "button",
        ...common,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/MagneticButton.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MagneticButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const G = '#00FF85', W = '#FFFFFF', P = '#FF0055', M = '#8B9BB4', B = '#00C6FF';
const TERMINAL_LINES = [
    [
        {
            t: '❯ ',
            c: M
        },
        {
            t: 'const ',
            c: P
        },
        {
            t: 'csStudent',
            c: B
        },
        {
            t: ' = ',
            c: M
        },
        {
            t: 'new ',
            c: P
        },
        {
            t: 'Portfolio',
            c: G
        },
        {
            t: '(',
            c: M
        },
        {
            t: `"${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name}"`,
            c: G
        },
        {
            t: ');',
            c: M
        }
    ],
    [
        {
            t: '❯ ',
            c: M
        },
        {
            t: 'csStudent',
            c: B
        },
        {
            t: '.skills',
            c: W
        },
        {
            t: ' = ',
            c: M
        },
        {
            t: '["React"',
            c: G
        },
        {
            t: ', ',
            c: M
        },
        {
            t: '"Rust"',
            c: G
        },
        {
            t: ', ',
            c: M
        },
        {
            t: '"PyTorch"]',
            c: G
        },
        {
            t: ';',
            c: M
        }
    ],
    [
        {
            t: '❯ ',
            c: M
        },
        {
            t: 'csStudent',
            c: B
        },
        {
            t: '.status',
            c: W
        },
        {
            t: ' = ',
            c: M
        },
        {
            t: '"Building the future"',
            c: G
        },
        {
            t: ';',
            c: M
        }
    ],
    [
        {
            t: '❯ ',
            c: M
        },
        {
            t: 'console',
            c: B
        },
        {
            t: '.log(',
            c: M
        },
        {
            t: 'await ',
            c: P
        },
        {
            t: 'csStudent',
            c: B
        },
        {
            t: '.getResume()',
            c: W
        },
        {
            t: ');',
            c: M
        }
    ]
];
const OUTPUT_LINE = [
    {
        t: '  ✓ ',
        c: G
    },
    {
        t: `{ name: "${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name}", available: `,
        c: M
    },
    {
        t: 'true',
        c: P
    },
    {
        t: `, location: "${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].location}" }`,
        c: M
    }
];
function totalLen(line) {
    return line.reduce((s, seg)=>s + seg.t.length, 0);
}
function renderUpTo(line, chars) {
    const out = [];
    let rem = chars;
    for (const seg of line){
        if (rem <= 0) break;
        if (rem >= seg.t.length) {
            out.push(seg);
            rem -= seg.t.length;
        } else {
            out.push({
                t: seg.t.slice(0, rem),
                c: seg.c
            });
            rem = 0;
        }
    }
    return out;
}
/* ── Stat counter animation ─────────────────────── */ function CountUp({ target, suffix = '' }) {
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof target !== 'number') return;
        const steps = 60;
        const inc = target / steps;
        let current = 0;
        const id = setInterval(()=>{
            current += inc;
            if (current >= target) {
                setVal(target);
                clearInterval(id);
            } else setVal(Math.floor(current));
        }, 25);
        return ()=>clearInterval(id);
    }, [
        target
    ]);
    if (typeof target !== 'number') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            target,
            suffix
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            val.toLocaleString(),
            suffix
        ]
    }, void 0, true);
}
function HeroSection() {
    /* ── Typing state ── */ const [doneLines, setDoneLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [curLine, setCurLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [curChar, setCurChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showOut, setShowOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allDone, setAllDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (curLine >= TERMINAL_LINES.length) {
            const t = setTimeout(()=>{
                setShowOut(true);
                setAllDone(true);
            }, 300);
            return ()=>clearTimeout(t);
        }
        const line = TERMINAL_LINES[curLine];
        const total = totalLen(line);
        if (curChar < total) {
            const id = setTimeout(()=>setCurChar((c)=>c + 1), 28);
            return ()=>clearTimeout(id);
        }
        // line complete — wait then move to next
        const t = setTimeout(()=>{
            setDoneLines((prev)=>[
                    ...prev,
                    line
                ]);
            setCurLine((l)=>l + 1);
            setCurChar(0);
        }, 240);
        return ()=>clearTimeout(t);
    }, [
        curLine,
        curChar
    ]);
    const currentPartial = curLine < TERMINAL_LINES.length ? renderUpTo(TERMINAL_LINES[curLine], curChar) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center scanline",
        style: {
            paddingTop: 90
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-green w-[600px] h-[600px] -top-32 -left-32 pointer-events-none",
                style: {
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-pink  w-[400px] h-[400px]  top-1/2 right-0 pointer-events-none",
                style: {
                    zIndex: 1,
                    animationDelay: '3s'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-blue  w-[300px] h-[300px]  bottom-0 left-1/3 pointer-events-none",
                style: {
                    zIndex: 1,
                    animationDelay: '8s'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dot-grid absolute inset-0 pointer-events-none",
                style: {
                    zIndex: 1,
                    opacity: 0.6
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto px-6 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-14 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8",
                                        style: {
                                            border: '1px solid rgba(0,255,133,0.25)',
                                            background: 'rgba(0,255,133,0.06)',
                                            fontFamily: 'var(--font-mono)',
                                            letterSpacing: '0.08em'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full ring-pulse",
                                                style: {
                                                    background: '#00FF85',
                                                    boxShadow: '0 0 6px #00FF85'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#00FF85'
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].status
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-heading)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mb-2",
                                                style: {
                                                    color: '#8B9BB4',
                                                    fontFamily: 'var(--font-mono)',
                                                    letterSpacing: '0.15em'
                                                },
                                                children: "Hello, World! I'm"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "glitch font-black leading-none mb-4",
                                                "data-text": __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name,
                                                style: {
                                                    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                                                    letterSpacing: '-0.03em'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 font-semibold",
                                                style: {
                                                    fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                    color: '#8B9BB4',
                                                    letterSpacing: '-0.01em'
                                                },
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].title,
                                                    " /",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#FFFFFF'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-8 leading-relaxed max-w-md",
                                        style: {
                                            color: '#8B9BB4',
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].bio
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#projects",
                                                className: "px-7 py-3.5 rounded-lg font-semibold text-sm",
                                                style: {
                                                    background: '#00FF85',
                                                    color: '#050B14',
                                                    fontFamily: 'var(--font-heading)',
                                                    letterSpacing: '-0.01em',
                                                    boxShadow: '0 0 30px rgba(0,255,133,0.3)'
                                                },
                                                children: "View Projects ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#contact",
                                                className: "px-7 py-3.5 rounded-lg font-semibold text-sm",
                                                style: {
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    color: '#FFFFFF',
                                                    background: 'rgba(255,255,255,0.04)',
                                                    fontFamily: 'var(--font-heading)',
                                                    letterSpacing: '-0.01em'
                                                },
                                                children: "Get In Touch"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            [
                                                {
                                                    label: 'GitHub',
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].github
                                                },
                                                {
                                                    label: 'LinkedIn',
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].linkedin
                                                },
                                                {
                                                    label: 'LeetCode',
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].leetcode
                                                }
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: s.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-xs tracking-widest uppercase transition-colors duration-200",
                                                    style: {
                                                        color: '#475569',
                                                        fontFamily: 'var(--font-mono)'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = '#00FF85';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = '#475569';
                                                    },
                                                    children: s.label
                                                }, s.label, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs ml-auto",
                                                style: {
                                                    color: '#333d4d',
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: "⌘K to explore"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "float",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "term",
                                        style: {
                                            boxShadow: '0 0 60px rgba(0,255,133,0.08), 0 40px 80px rgba(0,0,0,0.4)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "term-bar",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "term-dot",
                                                        style: {
                                                            background: '#FF5F56'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "term-dot",
                                                        style: {
                                                            background: '#FFBD2E'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "term-dot",
                                                        style: {
                                                            background: '#27C93F'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-4 text-xs flex-1 text-center -ml-12",
                                                        style: {
                                                            color: '#475569',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        children: "~/portfolio.sh"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs px-2 py-0.5 rounded",
                                                        style: {
                                                            background: 'rgba(0,255,133,0.1)',
                                                            color: '#00FF85',
                                                            border: '1px solid rgba(0,255,133,0.2)',
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.65rem'
                                                        },
                                                        children: "bash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 text-sm leading-7",
                                                style: {
                                                    minHeight: 280,
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: [
                                                    doneLines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap",
                                                            children: line.map((seg, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: seg.c
                                                                    },
                                                                    children: seg.t
                                                                }, j, false, {
                                                                    fileName: "[project]/components/HeroSection.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, i, false, {
                                                            fileName: "[project]/components/HeroSection.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, this)),
                                                    currentPartial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center",
                                                        children: [
                                                            currentPartial.map((seg, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: seg.c
                                                                    },
                                                                    children: seg.t
                                                                }, j, false, {
                                                                    fileName: "[project]/components/HeroSection.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 23
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cursor w-2 h-5 ml-0.5 inline-block",
                                                                style: {
                                                                    background: '#00FF85'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HeroSection.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    showOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap mt-1",
                                                        children: OUTPUT_LINE.map((seg, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: seg.c
                                                                },
                                                                children: seg.t
                                                            }, j, false, {
                                                                fileName: "[project]/components/HeroSection.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this),
                                                    allDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: G
                                                                },
                                                                children: "❯"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HeroSection.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cursor w-2 h-5 inline-block",
                                                                style: {
                                                                    background: '#00FF85'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HeroSection.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-3 mt-4",
                                        children: [
                                            {
                                                label: 'LeetCode',
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].leetcodeRating,
                                                suffix: '',
                                                icon: '🏅'
                                            },
                                            {
                                                label: 'Commits',
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].githubCommits,
                                                suffix: '+',
                                                icon: '📦'
                                            },
                                            {
                                                label: 'Papers',
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].papersRead,
                                                suffix: '',
                                                icon: '📄'
                                            },
                                            {
                                                label: 'Hackathons',
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].hackathonsWon,
                                                suffix: '×',
                                                icon: '🏆'
                                            }
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg text-center",
                                                style: {
                                                    background: 'rgba(10,17,31,0.8)',
                                                    border: '1px solid rgba(255,255,255,0.06)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg mb-0.5",
                                                        children: s.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-black",
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            color: '#00FF85'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                                            target: s.value,
                                                            suffix: s.suffix
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-0.5",
                                                        style: {
                                                            color: '#475569',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3 mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs tracking-widest uppercase",
                                style: {
                                    color: '#2d3748',
                                    fontFamily: 'var(--font-mono)'
                                },
                                children: "scroll"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-16",
                                style: {
                                    background: 'linear-gradient(to bottom, #00FF85, transparent)',
                                    animation: 'float 2s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSection.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function StatCard({ icon, label, value, suffix = '', accent = '#00FF85', delay = 0 }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setVis(true);
        }, {
            threshold: 0.3
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!vis || typeof value !== 'number') return;
        const t = setTimeout(()=>{
            const steps = 50;
            const inc = value / steps;
            let curr = 0;
            const id = setInterval(()=>{
                curr += inc;
                if (curr >= value) {
                    setCount(value);
                    clearInterval(id);
                } else setCount(Math.floor(curr));
            }, 28);
            return ()=>clearInterval(id);
        }, delay);
        return ()=>clearTimeout(t);
    }, [
        vis,
        value,
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative p-6 rounded-xl overflow-hidden",
        style: {
            background: 'rgba(10,17,31,0.9)',
            border: `1px solid ${accent}22`,
            boxShadow: vis ? `0 0 30px ${accent}08` : 'none',
            transition: 'box-shadow 0.6s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-16 h-16",
                style: {
                    background: `radial-gradient(circle at 100% 0%, ${accent}18 0%, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-3",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl font-black mb-1",
                style: {
                    fontFamily: 'var(--font-mono)',
                    color: accent
                },
                children: [
                    typeof value === 'number' ? count.toLocaleString() : value,
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs uppercase tracking-widest",
                style: {
                    color: '#475569',
                    fontFamily: 'var(--font-mono)'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AboutSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-32 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 inset-x-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label mb-3",
                                children: "01 / About"
                            }, void 0, false, {
                                fileName: "[project]/components/AboutSection.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    fontFamily: 'var(--font-heading)'
                                },
                                children: "Who I Am"
                            }, void 0, false, {
                                fileName: "[project]/components/AboutSection.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AboutSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg leading-relaxed mb-6",
                                        style: {
                                            color: '#CBD5E1',
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].bio
                                    }, void 0, false, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "leading-relaxed mb-10",
                                        style: {
                                            color: '#8B9BB4',
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: "When I'm not coding, I'm usually reading distributed systems papers, grinding LeetCode hard problems, or contributing to open-source projects. I believe in writing code that is not just functional, but elegant and maintainable."
                                    }, void 0, false, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-xl mb-6",
                                        style: {
                                            background: 'rgba(10,17,31,0.9)',
                                            border: '1px solid rgba(0,255,133,0.12)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#00FF85',
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.7rem'
                                                    },
                                                    children: "🎓 EDUCATION"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AboutSection.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-base mb-0.5",
                                                style: {
                                                    fontFamily: 'var(--font-heading)',
                                                    color: '#FFFFFF'
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].degree
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mb-2",
                                                style: {
                                                    color: '#00FF85'
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].university
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 text-xs",
                                                style: {
                                                    color: '#475569',
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].graduation
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#00FF85'
                                                        },
                                                        children: [
                                                            "GPA ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].gpa,
                                                            "/",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].gpaMax
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["achievements"].map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-4 rounded-xl",
                                                style: {
                                                    background: 'rgba(10,17,31,0.7)',
                                                    border: '1px solid rgba(255,255,255,0.06)',
                                                    transition: 'border-color 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(0,255,133,0.2)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl",
                                                        children: a.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                style: {
                                                                    fontFamily: 'var(--font-heading)',
                                                                    color: '#FFFFFF'
                                                                },
                                                                children: a.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AboutSection.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs mt-0.5",
                                                                style: {
                                                                    color: '#475569'
                                                                },
                                                                children: a.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AboutSection.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AboutSection.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: "🎯",
                                                label: "LeetCode Rating",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].leetcodeRating,
                                                accent: "#00FF85",
                                                delay: 0
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: "📦",
                                                label: "GitHub Commits/yr",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].githubCommits,
                                                suffix: "+",
                                                accent: "#FF0055",
                                                delay: 100
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: "📄",
                                                label: "Papers Read",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].papersRead,
                                                accent: "#00C6FF",
                                                delay: 200
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                icon: "☕",
                                                label: "Coffee Cups",
                                                value: "∞",
                                                accent: "#FFB800",
                                                delay: 0
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 rounded-xl",
                                                style: {
                                                    background: 'rgba(10,17,31,0.9)',
                                                    border: '1px solid rgba(255,255,255,0.06)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-black mb-1",
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            color: '#00FF85'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].opensourcePrs
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-widest",
                                                        style: {
                                                            color: '#475569',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        children: "OSS PRs Merged"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 rounded-xl",
                                                style: {
                                                    background: 'rgba(10,17,31,0.9)',
                                                    border: '1px solid rgba(255,255,255,0.06)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-black mb-1",
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            color: '#FF0055'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].hackathonsWon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-widest",
                                                        style: {
                                                            color: '#475569',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        children: "Hackathons Won"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AboutSection.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-5 rounded-xl",
                                        style: {
                                            background: 'rgba(0,255,133,0.03)',
                                            border: '1px solid rgba(0,255,133,0.15)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-3",
                                                style: {
                                                    color: '#00FF85',
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: "// currently hacking on"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AboutSection.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                '🔬 Fine-tuning LLMs for code generation',
                                                '🏗️  Distributed messaging system (Rust)',
                                                '📚 "Designing Data-Intensive Applications"'
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-2",
                                                    style: {
                                                        color: '#8B9BB4',
                                                        fontFamily: 'var(--font-body)'
                                                    },
                                                    children: item
                                                }, i, false, {
                                                    fileName: "[project]/components/AboutSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AboutSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AboutSection.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AboutSection.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AboutSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AboutSection.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SkillsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const TABS = [
    {
        key: 'languages',
        label: 'Languages',
        prefix: 'lang'
    },
    {
        key: 'frameworks',
        label: 'Frameworks & ML',
        prefix: 'fw'
    },
    {
        key: 'tools',
        label: 'DevOps & Tools',
        prefix: 'tools'
    }
];
function SkillBar({ name, level, visible, delay = 0 }) {
    const pct = visible ? level : 0;
    const color = level >= 85 ? '#00FF85' : level >= 75 ? '#00C6FF' : '#8B9BB4';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        style: {
                            color: '#CBD5E1',
                            fontFamily: 'var(--font-body)'
                        },
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/SkillsSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        style: {
                            color,
                            fontFamily: 'var(--font-mono)'
                        },
                        children: [
                            level,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SkillsSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SkillsSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skill-track",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skill-fill",
                    style: {
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${color}88, ${color})`,
                        boxShadow: visible ? `0 0 10px ${color}44` : 'none',
                        transitionDelay: `${delay}ms`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/SkillsSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SkillsSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SkillsSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function SkillsSection() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('languages');
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setVis(true);
        }, {
            threshold: 0.15
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    // Reset bars when tab changes so they re-animate
    const [localVis, setLocalVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalVis(false);
        const t = setTimeout(()=>setLocalVis(true), 50);
        return ()=>clearTimeout(t);
    }, [
        tab
    ]);
    const show = vis && localVis;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-32 relative",
        style: {
            background: 'rgba(10,17,31,0.4)'
        },
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(255,0,85,0.2), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/SkillsSection.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label mb-3",
                                children: "02 / Skills"
                            }, void 0, false, {
                                fileName: "[project]/components/SkillsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    fontFamily: 'var(--font-heading)'
                                },
                                children: "Tech Stack"
                            }, void 0, false, {
                                fileName: "[project]/components/SkillsSection.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SkillsSection.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16 overflow-hidden rounded-xl",
                        style: {
                            background: 'rgba(10,17,31,0.6)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-track flex gap-4 py-4 w-max",
                            style: {
                                paddingLeft: 20
                            },
                            children: [
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["techCloud"],
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["techCloud"]
                            ].map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-4 py-1.5 rounded-lg text-xs whitespace-nowrap",
                                    style: {
                                        border: '1px solid rgba(0,255,133,0.15)',
                                        color: '#8B9BB4',
                                        background: 'rgba(0,255,133,0.04)',
                                        fontFamily: 'var(--font-mono)',
                                        letterSpacing: '0.05em'
                                    },
                                    children: tech
                                }, i, false, {
                                    fileName: "[project]/components/SkillsSection.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SkillsSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SkillsSection.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-5 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mb-10 flex-wrap",
                                        children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTab(t.key),
                                                className: "px-4 py-2 rounded-lg text-xs transition-all duration-200",
                                                style: {
                                                    border: tab === t.key ? '1px solid rgba(0,255,133,0.4)' : '1px solid rgba(255,255,255,0.08)',
                                                    color: tab === t.key ? '#00FF85' : '#8B9BB4',
                                                    background: tab === t.key ? 'rgba(0,255,133,0.08)' : 'transparent',
                                                    fontFamily: 'var(--font-mono)',
                                                    letterSpacing: '0.06em',
                                                    boxShadow: tab === t.key ? '0 0 16px rgba(0,255,133,0.12)' : 'none'
                                                },
                                                children: [
                                                    tab === t.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#00FF85',
                                                            marginRight: 6
                                                        },
                                                        children: "▶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SkillsSection.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 37
                                                    }, this),
                                                    t.label
                                                ]
                                            }, t.key, true, {
                                                fileName: "[project]/components/SkillsSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/SkillsSection.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skills"][tab].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                                name: s.name,
                                                level: s.level,
                                                visible: show,
                                                delay: i * 80
                                            }, `${tab}-${s.name}`, false, {
                                                fileName: "[project]/components/SkillsSection.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/SkillsSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SkillsSection.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 flex flex-col gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl",
                                        style: {
                                            background: 'rgba(10,17,31,0.9)',
                                            border: '1px solid rgba(255,255,255,0.07)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-5",
                                                style: {
                                                    color: '#00FF85',
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: "// core strengths"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SkillsSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                {
                                                    label: 'Problem Solving',
                                                    val: 95,
                                                    icon: '🧩'
                                                },
                                                {
                                                    label: 'System Design',
                                                    val: 82,
                                                    icon: '🏗️'
                                                },
                                                {
                                                    label: 'Algorithm Design',
                                                    val: 88,
                                                    icon: '⚡'
                                                },
                                                {
                                                    label: 'Code Quality',
                                                    val: 85,
                                                    icon: '✨'
                                                },
                                                {
                                                    label: 'Team Leadership',
                                                    val: 80,
                                                    icon: '🤝'
                                                }
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg w-7 flex-shrink-0",
                                                            children: item.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between mb-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: '#8B9BB4'
                                                                            },
                                                                            children: item.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: '#00C6FF',
                                                                                fontFamily: 'var(--font-mono)'
                                                                            },
                                                                            children: [
                                                                                item.val,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SkillsSection.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "skill-track",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "skill-fill",
                                                                        style: {
                                                                            width: show ? `${item.val}%` : '0%',
                                                                            background: 'linear-gradient(90deg, #7C3AED, #00C6FF)',
                                                                            transitionDelay: `${i * 100 + 400}ms`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/SkillsSection.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SkillsSection.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/SkillsSection.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SkillsSection.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl",
                                        style: {
                                            background: 'rgba(10,17,31,0.9)',
                                            border: '1px solid rgba(255,255,255,0.07)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-4",
                                                style: {
                                                    color: '#FF0055',
                                                    fontFamily: 'var(--font-mono)'
                                                },
                                                children: "// daily driver"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SkillsSection.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                {
                                                    icon: '⌨️',
                                                    text: 'NeoVim + Tmux'
                                                },
                                                {
                                                    icon: '🐧',
                                                    text: 'Linux (Arch btw)'
                                                },
                                                {
                                                    icon: '🐳',
                                                    text: 'Docker / Kubernetes'
                                                },
                                                {
                                                    icon: '☁️',
                                                    text: 'AWS + GCP'
                                                },
                                                {
                                                    icon: '🔀',
                                                    text: 'Git + GitHub Actions'
                                                },
                                                {
                                                    icon: '📊',
                                                    text: 'Grafana + Prometheus'
                                                }
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            style: {
                                                                color: '#8B9BB4',
                                                                fontFamily: 'var(--font-mono)'
                                                            },
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SkillsSection.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/SkillsSection.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SkillsSection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SkillsSection.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SkillsSection.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SkillsSection.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SkillsSection.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const CATS = [
    'All',
    'AI/ML',
    'Full-Stack',
    'Systems'
];
const DIFF_CLASS = {
    Beginner: 'diff-beginner',
    Intermediate: 'diff-intermediate',
    Advanced: 'diff-advanced',
    Expert: 'diff-expert'
};
function TiltCard({ project }) {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [glow, setGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const onMove = (e)=>{
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({
            x,
            y
        });
        setGlow({
            x: (e.clientX - rect.left) / rect.width * 100,
            y: (e.clientY - rect.top) / rect.height * 100
        });
    };
    const onLeave = ()=>{
        setTilt({
            x: 0,
            y: 0
        });
        setHovered(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "relative rounded-xl overflow-hidden cursor-pointer",
        style: {
            background: 'rgba(10,17,31,0.95)',
            border: `1px solid ${hovered ? project.color + '35' : 'rgba(255,255,255,0.07)'}`,
            transform: hovered ? `perspective(800px) rotateX(${-tilt.y * 10}deg) rotateY(${tilt.x * 10}deg) translateZ(8px)` : 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)',
            transition: hovered ? 'transform 0.08s ease, border-color 0.3s ease, box-shadow 0.3s ease' : 'transform 0.5s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease, box-shadow 0.3s ease',
            boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}12` : 'none',
            transformStyle: 'preserve-3d'
        },
        onMouseMove: onMove,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: onLeave,
        children: [
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
                    zIndex: 1,
                    borderRadius: 'inherit'
                }
            }, void 0, false, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-0.5 w-full transition-opacity duration-300",
                style: {
                    background: `linear-gradient(90deg, ${project.color}, transparent 70%)`,
                    opacity: hovered ? 1 : 0.4
                }
            }, void 0, false, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 relative",
                style: {
                    transform: 'translateZ(1px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill text-xs",
                                        style: {
                                            color: project.color,
                                            borderColor: `${project.color}35`,
                                            background: `${project.color}0d`
                                        },
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `pill text-xs ${DIFF_CLASS[project.difficulty]}`,
                                        children: project.difficulty
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill text-xs",
                                        style: {
                                            color: '#FFB800',
                                            borderColor: 'rgba(255,184,0,0.3)',
                                            background: 'rgba(255,184,0,0.08)'
                                        },
                                        children: "★ Featured"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs",
                                style: {
                                    color: '#475569',
                                    fontFamily: 'var(--font-mono)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#FFB800'
                                        },
                                        children: "★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: project.stars
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2 transition-colors duration-200",
                        style: {
                            fontFamily: 'var(--font-heading)',
                            letterSpacing: '-0.02em',
                            color: hovered ? project.color : '#FFFFFF'
                        },
                        children: project.name
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed mb-5",
                        style: {
                            color: '#8B9BB4',
                            fontFamily: 'var(--font-body)'
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-5",
                        children: project.techStack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pill",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full",
                                        style: {
                                            background: '#00FF85',
                                            boxShadow: '0 0 4px #00FF85'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: '#475569',
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        children: [
                                            "Last commit: ",
                                            project.lastCommit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://github.com/${project.githubRepo}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-xs transition-colors duration-200",
                                        style: {
                                            color: '#475569',
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = '#00FF85';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = '#475569';
                                        },
                                        onClick: (e)=>e.stopPropagation(),
                                        children: "↗ GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.liveUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-xs transition-colors duration-200",
                                        style: {
                                            color: '#475569',
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = project.color;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = '#475569';
                                        },
                                        onClick: (e)=>e.stopPropagation(),
                                        children: "↗ Live"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 inset-x-0 h-24 pointer-events-none transition-opacity duration-300",
                style: {
                    background: `radial-gradient(ellipse at 50% 100%, ${project.color}14, transparent 70%)`,
                    opacity: hovered ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectsSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function ProjectsSection() {
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const filtered = cat === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.category === cat);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-32 relative dot-grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label mb-3",
                                children: "03 / Projects"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    fontFamily: 'var(--font-heading)'
                                },
                                children: "Things I've Built"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 mb-10 flex-wrap",
                        children: [
                            CATS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCat(c),
                                    className: "px-4 py-1.5 rounded-full text-xs transition-all duration-200",
                                    style: {
                                        border: cat === c ? '1px solid rgba(0,255,133,0.5)' : '1px solid rgba(255,255,255,0.08)',
                                        color: cat === c ? '#00FF85' : '#8B9BB4',
                                        background: cat === c ? 'rgba(0,255,133,0.08)' : 'transparent',
                                        fontFamily: 'var(--font-mono)',
                                        letterSpacing: '0.06em',
                                        boxShadow: cat === c ? '0 0 12px rgba(0,255,133,0.15)' : 'none'
                                    },
                                    children: c === 'All' ? '⬡ All' : c
                                }, c, false, {
                                    fileName: "[project]/components/ProjectsSection.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-xs self-center",
                                style: {
                                    color: '#475569',
                                    fontFamily: 'var(--font-mono)'
                                },
                                children: [
                                    filtered.length,
                                    " projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filtered.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TiltCard, {
                                project: p
                            }, p.id, false, {
                                fileName: "[project]/components/ProjectsSection.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://github.com/yourusername`,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-200",
                            style: {
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#8B9BB4',
                                fontFamily: 'var(--font-mono)',
                                letterSpacing: '0.06em'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(0,255,133,0.3)';
                                e.currentTarget.style.color = '#00FF85';
                                e.currentTarget.style.background = 'rgba(0,255,133,0.04)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = '#8B9BB4';
                                e.currentTarget.style.background = 'transparent';
                            },
                            children: "↗ View all on GitHub"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectsSection.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsSection.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectsSection.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectsSection.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ExperienceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ExperienceSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-32 relative",
        style: {
            background: 'rgba(10,17,31,0.4)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(255,0,85,0.2), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ExperienceSection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label mb-3",
                                children: "04 / Experience"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperienceSection.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    fontFamily: 'var(--font-heading)'
                                },
                                children: "Where I've Been"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperienceSection.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperienceSection.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative pl-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-line"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperienceSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experience"].map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-node",
                                                style: {
                                                    background: exp.color,
                                                    boxShadow: `0 0 16px ${exp.color}66`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-6 p-6 rounded-xl transition-all duration-300",
                                                style: {
                                                    background: 'rgba(10,17,31,0.9)',
                                                    border: `1px solid ${exp.color}18`
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = `${exp.color}35`;
                                                    e.currentTarget.style.boxShadow = `0 0 30px ${exp.color}08`;
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = `${exp.color}18`;
                                                    e.currentTarget.style.boxShadow = 'none';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between flex-wrap gap-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mb-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs px-2 py-0.5 rounded-full",
                                                                            style: {
                                                                                background: `${exp.color}14`,
                                                                                color: exp.color,
                                                                                border: `1px solid ${exp.color}30`,
                                                                                fontFamily: 'var(--font-mono)',
                                                                                fontSize: '0.65rem',
                                                                                letterSpacing: '0.08em'
                                                                            },
                                                                            children: exp.type === 'work' ? '💼 WORK' : '🎓 EDUCATION'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ExperienceSection.tsx",
                                                                            lineNumber: 62,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 61,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-bold",
                                                                        style: {
                                                                            fontFamily: 'var(--font-heading)',
                                                                            letterSpacing: '-0.02em',
                                                                            color: '#FFFFFF'
                                                                        },
                                                                        children: exp.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: exp.color
                                                                        },
                                                                        children: exp.org
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs mt-0.5",
                                                                        style: {
                                                                            color: '#475569'
                                                                        },
                                                                        children: [
                                                                            "📍 ",
                                                                            exp.location
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs px-3 py-1.5 rounded-md flex-shrink-0",
                                                                style: {
                                                                    fontFamily: 'var(--font-mono)',
                                                                    color: '#8B9BB4',
                                                                    background: 'rgba(255,255,255,0.04)',
                                                                    border: '1px solid rgba(255,255,255,0.06)'
                                                                },
                                                                children: exp.period
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 mb-5",
                                                        children: exp.bullets.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-sm",
                                                                style: {
                                                                    color: '#8B9BB4'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1.5 w-1 h-1 rounded-full flex-shrink-0",
                                                                        style: {
                                                                            background: exp.color
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'var(--font-body)'
                                                                        },
                                                                        children: b
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                                        lineNumber: 103,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: exp.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pill",
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExperienceSection.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExperienceSection.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/ExperienceSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ExperienceSection.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperienceSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperienceSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperienceSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MagneticButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ASCII = `
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝
`.trim();
const SOCIALS = [
    {
        label: 'Email',
        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].email}`,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].email,
        icon: '✉'
    },
    {
        label: 'GitHub',
        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].github,
        value: `@${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].githubUsername}`,
        icon: '⌥'
    },
    {
        label: 'LinkedIn',
        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].linkedin,
        value: '/in/yourusername',
        icon: '◈'
    },
    {
        label: 'Location',
        href: null,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].location,
        icon: '◉'
    }
];
function ContactSection() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStatus('sending');
        setTimeout(()=>setStatus('sent'), 1600);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-32 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-14 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-xs leading-tight",
                            style: {
                                color: 'rgba(0,255,133,0.18)',
                                fontFamily: 'var(--font-mono)',
                                userSelect: 'none'
                            },
                            children: ASCII
                        }, void 0, false, {
                            fileName: "[project]/components/ContactSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label mb-3",
                                children: "05 / Contact"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    fontFamily: 'var(--font-heading)'
                                },
                                children: "Let's Build Together"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-xl",
                                style: {
                                    color: '#8B9BB4',
                                    fontFamily: 'var(--font-body)'
                                },
                                children: "Always open to internship opportunities, research collaborations, and interesting projects. If you want to build something great together — my inbox is open."
                            }, void 0, false, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-10",
                                        children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-5 rounded-xl transition-all duration-200",
                                                style: {
                                                    background: 'rgba(10,17,31,0.8)',
                                                    border: '1px solid rgba(255,255,255,0.06)'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(0,255,133,0.2)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0",
                                                        style: {
                                                            background: 'rgba(0,255,133,0.08)',
                                                            color: '#00FF85',
                                                            border: '1px solid rgba(0,255,133,0.15)'
                                                        },
                                                        children: s.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs mb-0.5",
                                                                style: {
                                                                    color: '#475569',
                                                                    fontFamily: 'var(--font-mono)',
                                                                    letterSpacing: '0.1em'
                                                                },
                                                                children: s.label.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 21
                                                            }, this),
                                                            s.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: s.href,
                                                                target: s.href.startsWith('http') ? '_blank' : undefined,
                                                                rel: "noreferrer",
                                                                className: "text-sm transition-colors duration-200",
                                                                style: {
                                                                    color: '#CBD5E1',
                                                                    fontFamily: 'var(--font-mono)'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.color = '#00FF85';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.color = '#CBD5E1';
                                                                },
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm",
                                                                style: {
                                                                    color: '#CBD5E1',
                                                                    fontFamily: 'var(--font-mono)'
                                                                },
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-xl",
                                        style: {
                                            background: 'rgba(0,255,133,0.04)',
                                            border: '1px solid rgba(0,255,133,0.18)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full ring-pulse",
                                                        style: {
                                                            background: '#00FF85',
                                                            boxShadow: '0 0 6px #00FF85'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        style: {
                                                            color: '#00FF85',
                                                            fontFamily: 'var(--font-heading)'
                                                        },
                                                        children: "Available for opportunities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs leading-relaxed",
                                                style: {
                                                    color: '#475569',
                                                    fontFamily: 'var(--font-body)'
                                                },
                                                children: "Seeking Summer 2025 internships in SWE, ML research, or distributed systems. Also open to part-time freelance projects."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: status === 'sent' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full min-h-[400px] flex flex-col items-center justify-center rounded-xl text-center p-12",
                                    style: {
                                        background: 'rgba(0,255,133,0.04)',
                                        border: '1px solid rgba(0,255,133,0.2)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl mb-5 w-20 h-20 rounded-full flex items-center justify-center",
                                            style: {
                                                background: 'rgba(0,255,133,0.1)',
                                                color: '#00FF85',
                                                border: '1px solid rgba(0,255,133,0.3)'
                                            },
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContactSection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mb-2",
                                            style: {
                                                fontFamily: 'var(--font-heading)',
                                                color: '#00FF85'
                                            },
                                            children: "Message Sent!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContactSection.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: '#8B9BB4'
                                            },
                                            children: "Thanks for reaching out. I'll reply within 24 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContactSection.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContactSection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-4",
                                    children: [
                                        [
                                            {
                                                field: 'name',
                                                label: 'Name',
                                                type: 'text',
                                                ph: 'John Doe'
                                            },
                                            {
                                                field: 'email',
                                                label: 'Email',
                                                type: 'email',
                                                ph: 'john@example.com'
                                            },
                                            {
                                                field: 'subject',
                                                label: 'Subject',
                                                type: 'text',
                                                ph: 'Internship Opportunity'
                                            }
                                        ].map(({ field, label, type, ph })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs uppercase tracking-widest mb-2",
                                                        style: {
                                                            color: '#475569',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: type,
                                                        placeholder: ph,
                                                        required: true,
                                                        value: form[field],
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                [field]: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 rounded-lg outline-none text-sm transition-all duration-200",
                                                        style: {
                                                            background: 'rgba(10,17,31,0.9)',
                                                            border: '1px solid rgba(255,255,255,0.08)',
                                                            color: '#FFFFFF',
                                                            fontFamily: 'var(--font-mono)'
                                                        },
                                                        onFocus: (e)=>{
                                                            e.currentTarget.style.borderColor = 'rgba(0,255,133,0.4)';
                                                            e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,133,0.08)';
                                                        },
                                                        onBlur: (e)=>{
                                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                            e.currentTarget.style.boxShadow = 'none';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, field, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs uppercase tracking-widest mb-2",
                                                    style: {
                                                        color: '#475569',
                                                        fontFamily: 'var(--font-mono)'
                                                    },
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContactSection.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 5,
                                                    placeholder: "Tell me about the opportunity...",
                                                    required: true,
                                                    value: form.message,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            message: e.target.value
                                                        }),
                                                    className: "w-full px-4 py-3 rounded-lg outline-none resize-none text-sm transition-all duration-200",
                                                    style: {
                                                        background: 'rgba(10,17,31,0.9)',
                                                        border: '1px solid rgba(255,255,255,0.08)',
                                                        color: '#FFFFFF',
                                                        fontFamily: 'var(--font-mono)'
                                                    },
                                                    onFocus: (e)=>{
                                                        e.currentTarget.style.borderColor = 'rgba(0,255,133,0.4)';
                                                        e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,133,0.08)';
                                                    },
                                                    onBlur: (e)=>{
                                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContactSection.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContactSection.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onClick: ()=>{},
                                            className: "w-full py-4 rounded-lg font-bold text-sm tracking-wide",
                                            style: {
                                                background: status === 'sending' ? 'rgba(0,255,133,0.4)' : '#00FF85',
                                                color: '#050B14',
                                                fontFamily: 'var(--font-heading)',
                                                letterSpacing: '-0.01em',
                                                boxShadow: '0 0 30px rgba(0,255,133,0.2)',
                                                cursor: status === 'sending' ? 'wait' : 'pointer'
                                            },
                                            children: status === 'sending' ? '// Sending...' : '// Send Message →'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContactSection.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContactSection.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 relative",
        style: {
            borderTop: '1px solid rgba(255,255,255,0.05)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "font-bold text-base",
                            style: {
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#00FF85'
                                    },
                                    children: '<'
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name.split(' ')[0],
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#00FF85'
                                    },
                                    children: '>'
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                {
                                    label: 'GitHub',
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].github
                                },
                                {
                                    label: 'LinkedIn',
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].linkedin
                                },
                                {
                                    label: 'Twitter',
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].twitter
                                },
                                {
                                    label: 'Email',
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].email}`
                                }
                            ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-xs tracking-widest uppercase transition-colors duration-200",
                                    style: {
                                        color: '#475569',
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = '#00FF85';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = '#475569';
                                    },
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            style: {
                                color: '#2d3748',
                                fontFamily: 'var(--font-mono)'
                            },
                            children: "Built with Next.js · TypeScript · Tailwind"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: '#1e2a3a',
                            fontFamily: 'var(--font-mono)'
                        },
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personal"].name,
                            ". Designed & coded by hand."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0b2hv.8._.js.map