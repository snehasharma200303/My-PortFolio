// ─────────────────────────────────────────────────────────────────────────────
// Portfolio Data — sourced from Sneha Sharma's resume
// ─────────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Sneha Sharma",
  firstName: "Sneha",
  role: "Full Stack Developer",
  tagline:
    "Building scalable, secure web experiences that solve real problems — one component at a time.",
  shortBio:
    "Software Engineering undergraduate at Galgotias University, passionate about crafting full-stack solutions that combine clean architecture with intuitive design. Currently interning as a Full Stack Developer at Cadera Infotech.",
  email: "snehasharma200303@gmail.com",
  phone: "+91 9761257286",
  location: "Greater Noida, India",
  linkedin: "https://www.linkedin.com/in/sneha-sharma-558580275/",
  github: "https://github.com/snehasharma200303",
  resumeUrl: "/SnehaSharmaR.pdf",
};

// ─────────────────────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm a Computer Science undergraduate at Galgotias University (GPA: 8.7), building production-ready web applications with React.js, Node.js, and MySQL. My focus is on writing secure, maintainable code that scales.",
    "From designing sub-200ms real-time chat systems to architecting e-commerce platforms with JWT authentication, I approach every project with a performance-first and security-aware mindset.",
    "Currently contributing as a Full Stack Developer Intern at Cadera Infotech, collaborating across the stack to deliver scalable features and meaningful user experiences.",
  ],
  highlights: [
    { label: "GPA", value: "8.7 / 10", icon: "🎓" },
    { label: "Projects", value: "2 Full-Stack", icon: "🛠️" },
    { label: "Technologies", value: "10+", icon: "⚡" },
    { label: "Graduation", value: "Jul 2026", icon: "📅" },
  ],
  strengths: [
    "Performance-first architecture",
    "Security & authentication (JWT, bcrypt)",
    "Real-time systems (WebSockets, Socket.IO)",
    "Clean, maintainable code",
    "REST API design",
    "Responsive UI development",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────────────────────
export type SkillCategory = {
  category: string;
  color: string;
  bgColor: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    color: "text-plum-600",
    bgColor: "bg-plum-50 border-plum-100 text-plum-700",
    skills: ["Java", "JavaScript"],
  },
  {
    category: "Frontend",
    color: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-100 text-amber-700",
    skills: ["React.js", "HTML", "CSS",],
  },
  {
    category: "Backend",
    color: "text-teal-700",
    bgColor: "bg-teal-50 border-teal-100 text-teal-800",
    skills: ["REST APIs", "JWT Authentication", "Express.js", "Socket.IO", "Node.js"],
  },
  {
    category: "Database",
    color: "text-rose-600",
    bgColor: "bg-rose-50 border-rose-100 text-rose-700",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    color: "text-ink-700",
    bgColor: "bg-ivory-100 border-ivory-300 text-ink-700",
    skills: ["Git", "GitHub", "Figma", "LeetCode", "GeeksforGeeks"],
  },
  {
    category: "CS Fundamentals",
    color: "text-amber-700",
    bgColor: "bg-amber-50 border-amber-200 text-amber-800",
    skills: ["OOP", "DBMS", "Problem Solving", "Adaptability"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  date: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  github: string;
  live: string;
  gradient: string;
  accentColor: string;
  featured: boolean;         // true = shown on homepage
  category: string;          // used for filtering on /projects page
};

export const projects: Project[] = [
  // ── FEATURED (shown on homepage) ────────────────────────────────────────────
  {
    title: "Real-Time Chat Application",
    date: "Jan 2026",
    shortDesc: "Secure, low-latency chat platform with WebSocket bidirectional communication.",
    description:
      "Built a real-time, bidirectional chat platform supporting 10+ concurrent users with instant message delivery. Engineered the WebSocket layer using Socket.IO to achieve sub-200ms latency, and developed backend services for session management, message broadcasting, and active connection tracking. The React frontend is fully responsive across desktop and mobile.",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.IO", "JavaScript", "HTML5", "CSS3"],
    metrics: [
      { label: "Real-Time Messaging", value: "Enabled" },
      { label: "Responsive Design", value: "Mobile Friendly" },
      { label: "Socket Connections", value: "Multiple Users" },
    ],
    github: "https://github.com/snehasharma200303/ChatApplicationSecure",
    live: "#",
    gradient: "from-plum-50 to-white",
    accentColor: "plum",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "E-Commerce Web Application",
    date: "Sep 2025",
    shortDesc: "Full-stack e-commerce platform with secure JWT auth and order management.",
    description:
      "Developed a production-grade e-commerce platform supporting 100+ products, full user account management, a shopping cart, and order processing. Built 15+ RESTful APIs with JWT-based authentication and bcrypt password hashing, cutting unauthorized access risk by 90%. Optimized MySQL queries and API responses to reduce page load times by ~25%.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "REST APIs", "Local Storage"],
    metrics: [
      { label: "Authentication", value: "JWT Based" },
      { label: "Database", value: "MySQL" },
      { label: "REST APIs", value: "15+" },
    ],
    github: "https://github.com/snehasharma200303/EccomerceWebsite",
    live: "#",
    gradient: "from-amber-50 to-white",
    accentColor: "amber",
    featured: true,
    category: "Full Stack",
  },

  // ── ADDITIONAL (shown only on /projects page) ────────────────────────────────
  {
    title: "Spotify Music Player Clone",
    date: "Oct 2024",
    shortDesc: "High-fidelity music streaming UI with playback controls and playlist management.",
    description: "Built a pixel-perfect Spotify clone focusing on complex UI layouts and media playback integration. Implemented dynamic play/pause, volume control, and track seek functionality. Integrated Spotify API for real-time metadata fetching.",
    techStack: ["React.js", "Tailwind CSS", "Spotify API", "Framer Motion"],
    metrics: [
      { label: "Responsive UI", value: "Yes" },
      { label: "Music Controls", value: "Integrated" },
      { label: "API Integration", value: "Spotify API" },
    ],
    github: "https://github.com/snehasharma200303/SpotifyClone",
    live: "#",
    gradient: "from-green-50 to-white",
    accentColor: "green",
    featured: false,
    category: "Frontend",
  },
  // {
  //   title: "Weather Dashboard",
  //   date: "Jun 2025",
  //   shortDesc: "Real-time weather app with location-based forecasts and clean data visualisation.",
  //   description:
  //     "Developed a responsive weather dashboard integrating the OpenWeatherMap REST API to display real-time weather conditions, 5-day forecasts, and hourly breakdowns. Implemented geolocation-based auto-detection, city search with debounced input, and animated weather icons. Built with React.js using custom hooks for API fetching and local storage caching to minimise redundant network calls.",
  //   techStack: ["React.js", "REST APIs", "JavaScript", "CSS3", "Local Storage"],
  //   metrics: [
  //   { label: "Forecast Support", value: "5-Day" },
  //   { label: "Geolocation", value: "Enabled" },
  //   { label: "API Data", value: "Real-Time" },
  // ],
  //   github: "https://github.com/snehasharma200303",
  //   live: "#",
  //   gradient: "from-plum-50 to-white",
  //   accentColor: "plum",
  //   featured: false,
  //   category: "Frontend",
  // },
  {
    title: "Interactive Quiz Platform",
    date: "Nov 2024",
    shortDesc: "Dynamic quiz application with real-time scoring and category filtering.",
    description: "Developed a feature-rich quiz application with 50+ questions across multiple categories. Implemented a custom timer, progress tracking, and instant feedback system using React state management.",
    techStack: ["React.js", "JavaScript", "CSS3", "HTML5"],
    metrics: [
      { label: "Quiz Categories", value: "Multiple" },
      { label: "Score Tracking", value: "Enabled" },
      { label: "Responsive UI", value: "Yes" },
    ],
    github: "https://github.com/snehasharma200303/QuizApp",
    live: "#",
    gradient: "from-blue-50 to-white",
    accentColor: "blue",
    featured: false,
    category: "Frontend",
  },
  {
    title: "Automated Bus Scheduling",
    date: "Aug 2024",
    shortDesc: "Algorithm-driven scheduling platform for managing bus routes and driver shifts.",
    description: "Engineered an automated scheduling system to optimize bus routes and driver assignments. Developed a custom algorithm to minimize idle time and balance workloads for 20+ active routes.",
    techStack: ["Node.js", "MySQL", "Express.js", "Algorithm Design"],
    metrics: [
      { label: "Route Management", value: "Automated" },
      { label: "Backend Logic", value: "Implemented" },
      { label: "Database", value: "MySQL" },
    ],
    github: "https://github.com/snehasharma200303/Automated-Bus-Scheduling-Route-Management-System",
    live: "#",
    gradient: "from-teal-50 to-white",
    accentColor: "teal",
    featured: false,
    category: "Full Stack",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    company: "Cadera Infotech",
    role: "Full Stack Developer Intern",
    duration: " Feb 2026 – Present",
    type: "Internship",
    location: "India",
    contributions: [
      "Contributing to development and maintenance of web applications using modern full-stack technologies across the entire product lifecycle.",
      "Collaborating with the development team to architect, build, and optimize scalable features across both frontend (React.js) and backend (Node.js) systems.",
      "Writing clean, efficient, and maintainable code adhering to industry best practices and code review standards.",
      "Actively participating in debugging, unit testing, and performance optimization to enhance application reliability and user experience.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Education
// ─────────────────────────────────────────────────────────────────────────────
export const education = [
  {
    institution: "Galgotias University",
    degree: "B.Tech — Computer Science & Engineering",
    duration: "June 2022 – June 2026",
    grade: "8.7 GPA",
    location: "Greater Noida, India",
  },
  {
    institution: "St. Andrew's Public School",
    degree: "Senior Secondary (Class XII)",
    duration: "March 2021 – March 2022",
    grade: "87%",
    location: "Agra, India",
  },
  {
    institution: "SunFlower Public School",
    degree: "Secondary (Class X)",
    duration: "March 2019 – March 2020",
    grade: "83%",
    location: "Agra, India",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Certifications & Achievements
// ─────────────────────────────────────────────────────────────────────────────
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "achievement";
  description: string;
  color: string;
};

export const certifications: Certification[] = [
  {
    title: "CyberSecurity Essentials",
    issuer: "Cisco",
    date: "June 2025",
    type: "certification",
    description:
      "Completed Cisco's CyberSecurity course covering network security fundamentals, threat management, and secure system design.",
    color: "plum",
  },
  {
    title: "Smart India Hackathon",
    issuer: "Government of India",
    date: "Sep 2024",
    type: "achievement",
    description:
      "Participated in India's largest national-level hackathon, developing innovative solutions for real-world problems.",
    color: "amber",
  },
  {
    title: "Dextrix Hackathon",
    issuer: "Galgotias University",
    date: "April 2024",
    type: "achievement",
    description:
      "Competed in Galgotias University's Dextrix Hackathon, showcasing technical skills and collaborative problem-solving.",
    color: "teal",
  },
];
