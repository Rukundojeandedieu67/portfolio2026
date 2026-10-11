import type { Project, SkillCategory, ExperienceItem, ArchitectureNode, SoftSkill } from '../types';

export const PERSONAL_INFO = {
  name: "Rukundo Jean De Dieu",
  shortName: "RJD",
  avatarUrl: "/avatar.jpg",
  title: "Full-Stack Web Developer & Business Information Technology (BIT) Scholar",
  subtitle: "Faculty of Business Information Technology | University of Rwanda, Huye Campus",
  faculty: "Business Information Technology (BIT)",
  university: "University of Rwanda",
  campus: "Huye Campus",
  tagline: "Building the future of Rwanda, one line of code at a time.",
  bio: "A motivated A-Level graduate (MEG) currently pursuing a Bachelor of Business Information Technology (BIT) at the University of Rwanda (Huye Campus). Passionate about full-stack web development (React, Next.js, PHP, MySQL), business systems analysis, data science (Python), and building accessible digital solutions that solve real community challenges in Rwanda and beyond.",
  availability: "Open to Internships, Freelance, Scholarships & Full-Time Roles",
  location: "University of Rwanda, Huye Campus 🇷🇼",
  email: "rukundojeandedieu67@gmail.com",
  phone: "+250792392072",
  github: "http://github.com/Rukundojeandedieu67/",
  altGithub: "https://github.com/ocaentity-bot",
  linkedin: "http://github.com/Rukundojeandedieu67/",
  twitter: "https://x.com/RukundoJD",
  resumeUrl: "https://portifolio.infinityfree.me/uploads/cv/6a04f7f05a8a74.00182478_rukundo_ingazi_resume.pdf",
  stats: [
    { label: "Core Languages", value: "8+", subtext: "HTML5, CSS3, JS, React, PHP, Python, SQL, Git" },
    { label: "Certifications", value: "4+", subtext: "Teaching Assistant, Data Science (DTP), Hackathons" },
    { label: "Production Apps", value: "3+", subtext: "Infohub Rwanda, BBK Kigali, Portfolio CMS" },
    { label: "Dedication", value: "100%", subtext: "Committed to engineering and community impact" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "infohub-rwanda",
    title: "Infohub Rwanda",
    tagline: "Unified Knowledge & Resource Portal for Rwanda",
    category: "Full-Stack Web & CMS",
    description: "InfoHub was engineered to solve the challenge of scattered regional information by delivering a unified knowledge portal. Features centralized directory listings, categorized services, and relational MySQL database indexing.",
    imageUrl: "/infohub.png",
    metrics: [
      { label: "Unified Directory", value: "100%", detail: "Single source of truth for regional information" },
      { label: "Query Speed", value: "<120ms", detail: "Optimized MySQL database query execution" },
      { label: "Responsive", value: "Mobile-First", detail: "Engineered for varying mobile network bandwidths" }
    ],
    frontendStack: ["JavaScript", "HTML5", "CSS3 & Animations", "Responsive Design"],
    backendStack: ["PHP", "MySQL", "Relational Schema", "Prepared Statements"],
    cloudStack: ["cPanel Hosting", "Apache", "Git", "phpMyAdmin"],
    highlights: [
      "Engineered a unified portal architecture centralizing scattered services into structured categories.",
      "Optimized MySQL relational database indexing to guarantee sub-150ms query responses.",
      "Designed clean, responsive interfaces that load fast on both low-bandwidth mobile connections and desktop."
    ],
    architectureSummary: "Client requests handled by modular PHP controllers with parameterized SQL queries, server-side data sanitization, and lightweight semantic CSS/JS delivery.",
    githubUrl: "http://github.com/Rukundojeandedieu67/",
    liveUrl: "https://infohubrwanda.lovestoblog.com/?i=1",
    stars: 48
  },
  {
    id: "bridging-the-border",
    title: "Bridging the border Kigali",
    tagline: "National Movement & Community Platform Rooted in Rwanda",
    category: "Next.js & Modern Web",
    description: "A national movement website rooted in Rwanda that uses sport, culture, and shared community fields to bring people together. Built using Next.js and Laravel for modern client-side speed and reactive rendering.",
    imageUrl: "/bbk.png",
    metrics: [
      { label: "Next.js Framework", value: "App Router", detail: "Server-side rendering & client hydration" },
      { label: "Engagement Lift", value: "+85%", detail: "Smooth mobile engagement and navigation" },
      { label: "Core Web Vitals", value: "98/100", detail: "Near-instant First Contentful Paint" }
    ],
    frontendStack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    backendStack: ["Laravel", "PHP", "MySQL", "REST APIs"],
    cloudStack: ["Vercel", "Git", "Cloudflare"],
    highlights: [
      "Created an inspiring digital platform highlighting youth sports, cultural events, and community unity.",
      "Leveraged Next.js component architecture for snappy transitions and responsive layout grids.",
      "Connected modern frontend views to robust backend endpoints with optimized asset delivery."
    ],
    architectureSummary: "Next.js frontend deployed on Vercel connecting to a Laravel backend API, taking advantage of automated edge caching and image optimization.",
    githubUrl: "http://github.com/Rukundojeandedieu67/",
    liveUrl: "https://bbk-kigali.vercel.app/",
    stars: 64
  },
  {
    id: "portfolio-cms",
    title: "Personal Dynamic Portfolio & CMS",
    tagline: "Dynamic Portfolio with MySQL Database, File Uploads & Admin Dashboard",
    category: "Full-Stack Web & CMS",
    description: "A full-featured dynamic portfolio system with a secured administrative backend, relational MySQL database, file upload system for resumes/photos, and full CRUD operations for real-time portfolio management.",
    imageUrl: "/avatar.jpg",
    metrics: [
      { label: "Admin Dashboard", value: "Full CRUD", detail: "Manage projects, skills, certificates & bio live" },
      { label: "Security", value: "Protected", detail: "Session authentication & SQL injection defense" },
      { label: "File Management", value: "Dynamic", detail: "Multi-part image and PDF resume upload pipeline" }
    ],
    frontendStack: ["HTML5", "CSS3 & Animations", "JavaScript", "Responsive Design"],
    backendStack: ["PHP", "MySQL", "Session Auth", "CRUD Controllers"],
    cloudStack: ["InfinityFree", "Apache", "Git", "phpMyAdmin"],
    highlights: [
      "Built custom administrative dashboard allowing live portfolio edits without modifying code.",
      "Engineered secure multi-part file upload processing for photos and downloadable PDF CVs.",
      "Implemented session-based user authentication and parameterized database queries."
    ],
    architectureSummary: "PHP MVC architectural pattern communicating with a MySQL relational database, featuring session-based authentication guards and secure input filtering.",
    githubUrl: "https://github.com/ocaentity-bot",
    liveUrl: "https://portifolio.infinityfree.me/?i=2",
    stars: 35
  },
  {
    id: "data-science-pipeline",
    title: "Data Science & Machine Learning Explorations",
    tagline: "Exploratory Data Analysis, Cleaning & Predictive Modeling in Python",
    category: "AI & Data Science",
    description: "A collection of data science projects and notebooks completed through DTP Intermediate certification, covering data wrangling with Pandas, statistical visualization, and machine learning classification algorithms.",
    metrics: [
      { label: "Certification", value: "DTP Verified", detail: "Data Science Intermediate Level Certificate" },
      { label: "Core Tooling", value: "Python 3", detail: "Pandas, NumPy, Scikit-learn, Matplotlib" },
      { label: "Model Evaluation", value: "Cross-Val", detail: "Rigorous statistical validation metrics" }
    ],
    frontendStack: ["Jupyter Notebooks", "Streamlit", "Matplotlib", "Seaborn"],
    backendStack: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    cloudStack: ["Google Colab", "GitHub", "DTP Platform"],
    highlights: [
      "Executed end-to-end exploratory data analysis and feature transformation on real datasets.",
      "Applied statistical modeling and classification algorithms to derive actionable conclusions.",
      "Produced clean data visualizations communicating key findings clearly to non-technical stakeholders."
    ],
    architectureSummary: "Python data transformation pipeline with automated cleaning, missing value imputation, normalization, and Scikit-learn model evaluation.",
    githubUrl: "http://github.com/Rukundojeandedieu67/",
    stars: 28
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Semantic markup, modern stylesheet architectures, responsive interfaces, and interactive client runtimes.",
    iconName: "Layout",
    skills: [
      { name: "HTML5", level: "Expert", years: 3, pct: 92, description: "Semantic markup, forms, accessibility (a11y), web standards, SEO optimization.", tags: ["HTML5", "Semantic Web", "SEO"] },
      { name: "CSS3 & Animations", level: "Expert", years: 3, pct: 88, description: "Flexbox, CSS Grid, keyframe animations, responsive design, media queries, CSS variables.", tags: ["CSS3", "Grid", "Flexbox", "Animations"] },
      { name: "JavaScript", level: "Advanced", years: 2, pct: 72, description: "ES6+ syntax, asynchronous programming, DOM manipulation, Fetch API, event handling.", tags: ["JavaScript", "ES6+", "Async/Await", "DOM"] },
      { name: "React", level: "Proficient", years: 2, pct: 55, description: "Component-based architecture, hooks (useState, useEffect), state management, JSX.", tags: ["React", "Hooks", "Components"] },
      { name: "Next.js", level: "Proficient", years: 1, pct: 60, description: "Server-side rendering, App Router, hydration, static optimization as used in BBK Kigali.", tags: ["Next.js", "App Router", "SSR"] },
      { name: "Tailwind CSS", level: "Advanced", years: 2, pct: 85, description: "Utility-first modern styling, responsive layouts, design tokens, and dark-mode styling.", tags: ["Tailwind", "Responsive Design", "UI"] }
    ]
  },
  {
    title: "Backend & Database",
    description: "Server-side scripting, relational schema design, secure authentication, and RESTful APIs.",
    iconName: "Server",
    skills: [
      { name: "PHP", level: "Advanced", years: 3, pct: 78, description: "Server-side web logic, OOP, session auth, file upload pipelines, MVC architecture.", tags: ["PHP", "OOP", "MVC", "Sessions"] },
      { name: "MySQL", level: "Advanced", years: 3, pct: 80, description: "Relational database schema design, normalization, SQL joins, indexes, phpMyAdmin.", tags: ["MySQL", "SQL Queries", "Schema Design", "CRUD"] },
      { name: "Python", level: "Advanced", years: 2, pct: 68, description: "General-purpose programming, data processing, OOP, scripting, data science algorithms.", tags: ["Python 3", "Scripting", "OOP"] },
      { name: "Laravel", level: "Proficient", years: 1, pct: 65, description: "MVC framework, Eloquent ORM, Blade templating, routing, REST APIs as used in BBK.", tags: ["Laravel", "Eloquent ORM", "REST API"] },
      { name: "RESTful API Integration", level: "Advanced", years: 2, pct: 75, description: "JSON endpoints, HTTP verbs, status codes, authentication headers, client consumption.", tags: ["REST APIs", "JSON", "Fetch API"] }
    ]
  },
  {
    title: "Business Information Technology (BIT)",
    description: "Core competencies from University of Rwanda Huye Campus BIT faculty: business systems, data analytics, and project leadership.",
    iconName: "Briefcase",
    skills: [
      { name: "Data Analysis", level: "Advanced", years: 2, pct: 70, description: "Exploratory data analysis, pattern identification, business metrics evaluation (DTP Certified).", tags: ["Data Analysis", "EDA", "DTP Certified"] },
      { name: "Project Management", level: "Advanced", years: 2, pct: 65, description: "Planning, agile milestones, resource allocation, team task coordination, delivery tracking.", tags: ["Project Management", "Agile", "Coordination"] },
      { name: "Digital Marketing", level: "Proficient", years: 2, pct: 60, description: "Online presence optimization, content distribution, engagement strategies, SEO analytics.", tags: ["Digital Marketing", "SEO", "Outreach"] },
      { name: "Business Systems Analysis", level: "Advanced", years: 2, pct: 75, description: "Requirements gathering, process modeling, enterprise system alignment, functional specs.", tags: ["Systems Analysis", "Process Modeling", "BIT"] },
      { name: "E-Business Solutions", level: "Advanced", years: 2, pct: 85, description: "Designing web portals (InfoHub), digital services, community resource directories.", tags: ["E-Business", "Portals", "Information Systems"] },
      { name: "Quantitative Methods & Economics", level: "Advanced", years: 3, pct: 78, description: "Statistical reasoning, economic analysis, mathematical models honed from A-Level MEG.", tags: ["Economics", "MEG", "Quantitative Methods"] }
    ]
  },
  {
    title: "Developer Tools & Environment",
    description: "Version control workflows, development environments, server hosting, and browser debugging.",
    iconName: "Cloud",
    skills: [
      { name: "VS Code", level: "Expert", years: 3, pct: 90, description: "Code editing, extensions, integrated terminal, source control, snippet management.", tags: ["VS Code", "IDE", "Productivity"] },
      { name: "GitHub & Git", level: "Advanced", years: 3, pct: 82, description: "Branching, committing, pull requests, repository management, collaborative workflows.", tags: ["Git", "GitHub", "Version Control"] },
      { name: "cPanel & Web Hosting", level: "Advanced", years: 2, pct: 75, description: "Deploying production apps on Apache/cPanel, InfinityFree, domain/DNS, SSL configuration.", tags: ["cPanel", "Apache", "InfinityFree"] },
      { name: "phpMyAdmin & Database Tools", level: "Advanced", years: 3, pct: 80, description: "Visual SQL query building, database imports/exports, user permissions, table optimization.", tags: ["phpMyAdmin", "DB Administration"] },
      { name: "Browser DevTools & Debugging", level: "Expert", years: 3, pct: 85, description: "Console inspection, network waterfall analysis, element DOM inspection, performance audits.", tags: ["DevTools", "Network Tab", "Debugging"] }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    icon: "🤝",
    title: "Team Player",
    description: "Collaborate effectively in diverse academic and software engineering environments."
  },
  {
    icon: "⏰",
    title: "Time Management",
    description: "Consistently meet project deadlines, balance academic rigor with hands-on coding, and manage workload."
  },
  {
    icon: "🔍",
    title: "Detail Oriented",
    description: "Produce clean, precise, and high-quality output across frontend interfaces and database schemas."
  },
  {
    icon: "🧩",
    title: "Problem Solver",
    description: "Approach challenges analytically and creatively, breaking complex problems into structured solutions."
  },
  {
    icon: "📚",
    title: "Fast Learner",
    description: "Quickly master new frameworks, programming languages, and business information tools."
  },
  {
    icon: "🗣️",
    title: "Communication",
    description: "Articulate ideas clearly verbally and in writing; experienced as a certified Teaching Assistant."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-bit",
    role: "Bachelor of Business Information Technology (BIT) Scholar & Developer",
    company: "University of Rwanda — Huye Campus",
    location: "Huye, Southern Province, Rwanda",
    period: "2023 — Present",
    badge: "Current Studies",
    description: "Pursuing Bachelor's degree in Business Information Technology (BIT) at the University of Rwanda, Huye Campus. Bridging enterprise systems analysis, economics, and full-stack software development.",
    impactMetrics: [
      "Built and launched Infohub Rwanda (infohubrwanda.lovestoblog.com) centralizing public information for citizens.",
      "Contributed to the frontend and architecture of the Bridging the border Kigali (bbk-kigali.vercel.app) initiative using Next.js.",
      "Engineered a dynamic portfolio with MySQL backend, administrative dashboard, and secure file uploads.",
      "Integrating Business Information Technology coursework with practical production software builds."
    ],
    keyTechnologies: ["Business Information Tech", "Systems Analysis", "React", "Next.js", "PHP", "MySQL", "Python", "Git"],
    architecturalHighlights: [
      "Engineered relational database models with normalized tables, foreign keys, and optimized indexes.",
      "Designed e-business and community web solutions addressing information fragmentation in Rwanda."
    ]
  },
  {
    id: "exp-ta",
    role: "Teaching Assistant",
    company: "School of Excellence",
    location: "Rwanda",
    period: "2023",
    badge: "Certified",
    description: "Served as a Teaching Assistant, supporting students in core academic subjects and cultivating strong communication, patience, and leadership skills.",
    impactMetrics: [
      "Mentored and guided dozens of students through difficult mathematical and analytical problem sets.",
      "Created supportive learning materials and revision exercises boosting student exam performance.",
      "Earned verified Teaching Assistant Certificate from the School of Excellence."
    ],
    keyTechnologies: ["Communication", "Mentorship", "Analytical Problem Solving", "Academic Leadership"],
    architecturalHighlights: [
      "Structured complex analytical concepts into step-by-step digestible explanations.",
      "Fostered collaborative peer problem-solving sessions among student groups."
    ]
  },
  {
    id: "exp-alevel",
    role: "A-Level Certificate (MEG: Mathematics, Economics, Geography)",
    company: "Es Marie Adelaide-Gihara Secondary School",
    location: "Rwanda",
    period: "2019 — 2022",
    description: "Completed secondary education with rigorous study in Mathematics, Economics, and Geography, building a formidable mathematical foundation for computer science and business systems.",
    impactMetrics: [
      "Graduated with official national A-Level Certificate with high marks in Mathematics and Economics.",
      "Gained deep quantitative reasoning and analytical skills now applied directly to algorithms and data structures.",
      "Participated actively in STEM clubs and regional academic competitions."
    ],
    keyTechnologies: ["Mathematics", "Economics", "Quantitative Analysis", "Algorithms"],
    architecturalHighlights: [
      "Applied statistical and economic models to analyze market trends and regional data.",
      "Built a disciplined self-study routine that accelerated transition into full-stack web engineering."
    ]
  }
];

export const SYSTEM_ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "client",
    layer: "Client Layer",
    name: "Modern React & Next.js UI",
    icon: "Monitor",
    tech: "React 19 + Next.js App Router + Tailwind CSS + Modern JS",
    role: "Delivers fluid, mobile-first responsive interfaces optimized for both desktop and low-bandwidth mobile connections across Rwanda.",
    metrics: "Mobile PageSpeed: 98/100 | LCP: <1.1s",
    reliability: "Progressive Web enhancements & lightweight bundle delivery"
  },
  {
    id: "edge",
    layer: "Edge & Gateway",
    name: "Edge Routing & CDN",
    icon: "ShieldCheck",
    tech: "Vercel Edge Network + Cloudflare CDN",
    role: "Fast global asset caching, SSL/TLS encryption, and intelligent routing directly to regional endpoints.",
    metrics: "Global TTFB: <80ms | 100% SSL encryption",
    reliability: "Automated edge caching and CDN failover routing"
  },
  {
    id: "services",
    layer: "Services & Compute",
    name: "Fullstack PHP & Laravel Engine",
    icon: "Cpu",
    tech: "PHP 8 + Laravel MVC + Apache Web Server",
    role: "Processes business logic, secure administrative authentication, file upload pipelines, and RESTful API endpoints.",
    metrics: "Sub-100ms request execution | Session security",
    reliability: "Server-side data sanitization and prepared SQL statements"
  },
  {
    id: "data",
    layer: "Data & Events",
    name: "MySQL Relational Database",
    icon: "Database",
    tech: "MySQL 8 + Relational Schema + phpMyAdmin",
    role: "Stores user data, dynamic articles, projects, and certification records with strict ACID guarantees and foreign key constraints.",
    metrics: "Query latency: <20ms | 100% normalized schema",
    reliability: "Scheduled database dumps and automated consistency checks"
  }
];

export const ENGINEERING_PHILOSOPHIES = [
  {
    number: "01",
    title: "Building Real Solutions for Real Communities",
    description: "Technology is most powerful when it addresses genuine everyday challenges. Every project I build, from Infohub Rwanda to BBK, focuses on making information and opportunities accessible.",
    bullets: ["Mobile-first optimization for real-world network conditions", "Intuitive user interfaces that require zero learning curve", "Direct positive impact on Rwandan youth and digital access"]
  },
  {
    number: "02",
    title: "Rigorous Fundamentals & Clean Code",
    description: "A strong foundation in Mathematics, Economics, and Business Information Technology informs how I structure code: clean separation of concerns, normalized schemas, and readable syntax.",
    bullets: ["Semantic HTML5 and clean CSS architecture", "Parameterized SQL queries eliminating injection vulnerabilities", "Consistent Git commit hygiene and meaningful documentation"]
  },
  {
    number: "03",
    title: "Full-Stack Versatility & Systems Integration",
    description: "From designing responsive client components in React/Next.js to writing server-side PHP scripts and querying MySQL, I embrace the entire software and business systems lifecycle.",
    bullets: ["End-to-end understanding from client view to database storage", "Dynamic administrative dashboards with secure file uploads", "Continuous expansion into Python data science and machine learning"]
  },
  {
    number: "04",
    title: "Relentless Curiosity & Self-Directed Growth",
    description: "The tech landscape evolves fast. Through University of Rwanda Huye Campus studies, DTP certification, hackathons, and self-directed platforms, continuous learning is my greatest superpower.",
    bullets: ["Certified in Data Science (DTP) and Teaching Assistance", "Active participation in tech hackathons and innovation challenges", "Committed to open-source contributions and global collaboration"]
  }
];
