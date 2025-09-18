export const portfolioConfig = {
  // Basic Information
  name: "Sahil Sigar",
  title: "Computer Science Student",
  description:
    "Enthusiastic CSE student with strong DSA, competitive programming, and MERN skills. Built scalable full‑stack apps and solved 600+ problems across platforms.",
  location: "Nagpur, Maharashtra, India",

  // Contact Information
  email: "sahilsigar321@gmail.com",

  // Social Media Links
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/sahil-sigar-0198a4297",
    external: "",
    github: "https://github.com/Sahilsigar23",
  },

  // SEO Information
  seo: {
    ogImage: "/og-image.png",
    url: "",
    twitterHandle: "",
    keywords: [
      "Sahil",
      "Sigar",
      "Sahil Sigar",
      "portfolio",
      "MERN",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "DSA",
      "competitive programming",
      "IIIT Nagpur",
    ],
    authors: [
      {
        name: "Sahil Sigar",
        url: "https://github.com/Sahilsigar23",
      },
    ],
  },

  // About Information
  about: {
    bio: "Enthusiastic Computer Science student experienced in building full‑stack applications with the MERN stack, designing efficient algorithms, and solving real‑world problems. Strong foundation in data structures and algorithms with 600+ problems solved across platforms.",
    hobbies: [
      "Coding",
      "Competitive Programming",
      "Building side project",
      "Learning Ai/ML",
      "Gamer",
    ],
    personalInfo: {
      language: "Hindi and English",
      nationality: "India",
      gender: "Male",
    },
  },

  // Skills and Roles (reverted to initial project content)
  skills: {
    roles: [
      "Software developer",
      "Fullstack developer",
      "Gamer",
    ],
    // Technical Skills
    programmingLanguages: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      
    ],
    frameworks: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },

  // Education Information
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (CGPA: 7.67)",
      institution: "Indian Institute of Information Technology, Nagpur",
      location: "Nagpur, Maharashtra",
      period: "2022 – 2026",
      description:
        "Pursuing B.Tech in CSE with coursework in DSA, DBMS, OS, CN, SE, AI/ML, Mathematics (Probability & Statistics, Linear Algebra, Discrete Math).",
    },
  ],

  // Projects Information
  projects: [
    {
      title: "AI Trip Planning Application",
      description:
        "AI‑powered trip planner that generates personalized itineraries using Gemini AI. Integrated Firebase auth and real‑time storage; responsive React + Tailwind UI; scalable architecture for future features (hotels, maps).",
      tags: ["React", "Gemini AI", "Firebase", "TailwindCSS","Google places API"],
      link: "https://github.com/Sahilsigar23/Travel-planner",
    },
    {
      title: "File Zipper Software",
      description:
        "Compression tool in C++ using Huffman coding (trees, queues, heaps). Includes compression/decompression with efficient memory use; applies greedy algorithms and priority queues to optimize runtime.",
      tags: ["C++", "DSA", "Huffman Coding"],
      link: "https://github.com/Sahilsigar23/File-zipper/tree/main/FileZipper-Project-main",
    },
    {
      title: "Realtime Chat Application",
      description:
        "Full‑stack chat app with real‑time messaging via Socket.IO, online status, JWT auth with bcrypt and Express middleware, Zustand for global state, robust error handling, and responsive Tailwind + DaisyUI design.",
      tags: ["MERN", "Socket.IO", "TailwindCSS", "DaisyUI", "Zustand", "MongoDB"],
      link: "https://github.com/Sahilsigar23/Real-time-chat-app",
    },
    {
      title: "FastAPI Blog API",
      description:
        "Full‑featured backend for blog posts: CRUD, search, sorting/filtering, slugging, async DB ops, migrations, and seeding.",
      tags: ["FastAPI", "SQLAlchemy (Async)", "Alembic", "Pydantic", "PostgreSQL", "Python"],
      link: "https://github.com/Sahilsigar23/FastApi-blog-api",
    },
    {
      title: "LeetCode Helper Extension",
      description:
        "Browser extension template to enhance LeetCode workflows. Vite HMR, strict ESLint, and configurable TS linting.",
      tags: ["React", "TypeScript", "Vite", "ESLint"],
      link: "https://github.com/Sahilsigar23/Leetcode-helper-extension",
    },
    {
      title: "DesignSight – AI Design Feedback Platform",
      description:
        "Upload UI screenshots, get AI‑driven role‑filtered feedback, collaborate via comments, export JSON/PDF; in‑memory or MongoDB persistence.",
      tags: ["Node.js", "Express", "TypeScript", "React", "Vite", "Google Gemini API", "MongoDB"],
      link: "https://github.com/Sahilsigar23/-DesignSight---an-AI-powered-design-feedback-platform",
    },
    {
      title: "WhatsApp Auto‑Reply Bot",
      description:
        "Automated WhatsApp replies with a web dashboard. Useful for customer support and personal automation.",
      tags: ["Node.js", "Puppeteer/Evolution API","WebSockets / Socket.IO","MongoDB","Redis"],
      link: "https://github.com/Sahilsigar23/WhatsApp-Bot",
    },
  ],

  // More Links Information
  moreLinks: [
    { title: "LinkedIn", description: "Professional profile and activity", link: "https://www.linkedin.com/in/sahil-sigar-0198a4297" },
    { title: "GitHub", description: "Open‑source projects and contributions", link: "https://github.com/Sahilsigar23" },
    { title: "AI Trip Planner", description: "Repository link", link: "https://github.com/Sahilsigar23/Travel-planner" },
    { title: "File Zipper", description: "Repository link", link: "https://github.com/Sahilsigar23/File-zipper/tree/main/FileZipper-Project-main" },
    { title: "Realtime Chat App", description: "Repository link", link: "https://github.com/Sahilsigar23/Real-time-chat-app" },
  ],

  // API Keys (should be in .env but referenced here)
  apiKeys: {
    resendApiKey: "YOUR_RESEND_API_KEY", // This should be loaded from environment variables in a real app
  },
};

