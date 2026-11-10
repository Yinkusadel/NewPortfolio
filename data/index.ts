export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Website Builder WebApp",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type ProjectCategory = "app" | "landing";

export type Project = {
  id: number;
  category: ProjectCategory;
  title: string;
  des: string;
  img: string;
  // Tool names must match keys in data/tools.ts
  stack: string[];
  highlights: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: 6,
    category: "app",
    title: "Flolyt - AI Revenue Leakage Workspace",
    des: "A conversational workspace that helps businesses find and recover lost revenue, with collaborative rooms and business memory.",
    img: "/p6.png",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Axios",
    ],
    highlights: [
      "Leakage Map",
      "Collaborative Rooms",
      "Inbox",
      "Playbooks",
      "Business memory",
    ],
    link: "https://flolyt-workspace-version-git-fc0935-olayinkas-projects-e863e0fc.vercel.app/",
  },
  {
    id: 1,
    category: "app",
    title: "StoreIt",
    des: "A modern file storage app for uploading, organising and managing files with secure sign-in.",
    img: "/p2.png",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
    highlights: ["Drag & drop uploads", "OTP login", "Storage usage charts"],
    link: "https://storage-app-delta.vercel.app/",
  },
  {
    id: 2,
    category: "app",
    title: "AdelMeets - Video Conferencing App",
    des: "A Zoom-style video conferencing app for instant and scheduled meetings.",
    img: "/p1.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Stream Video SDK",
      "Radix UI",
    ],
    highlights: ["Video meetings", "Scheduled meetings", "Authentication"],
    link: "https://adel-meets.vercel.app/",
  },
  {
    id: 5,
    category: "app",
    title: "Finance - Personal Finance Dashboard",
    des: "A full-stack dashboard to track income, expenses and balances across accounts.",
    img: "/p5.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Clerk",
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "Recharts",
      "Zod",
    ],
    highlights: [
      "Multiple accounts",
      "Category breakdowns",
      "CSV import",
      "Charts",
    ],
    link: "https://finance-app-lovat-kappa.vercel.app/",
  },
  {
    id: 10,
    category: "app",
    title: "TraQFit - Personal Trainer Dashboard",
    des: "A fitness platform for personal trainers to manage clients, assign workouts, track progress and get paid.",
    img: "/p10.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Resend",
      "Web Push",
      "Radix UI",
      "Recharts",
      "jsPDF",
    ],
    highlights: [
      "Stripe billing",
      "White-label checkout",
      "Realtime chat",
      "Push notifications",
      "Email invites",
      "PDF reports",
      "QR referrals",
      "Nutrition data",
    ],
    link: "https://trainer.traqfit.net/",
  },
  {
    id: 4,
    category: "app",
    title: "Talent Screen AI",
    des: "An AI resume scanner that analyses uploaded resumes and gives recruiters and job seekers actionable feedback.",
    img: "/p4.png",
    stack: [
      "React",
      "TypeScript",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Puter",
      "pdf.js",
    ],
    highlights: [
      "AI resume feedback",
      "PDF upload & preview",
      "Cloud file storage",
      "Puter sign-in",
    ],
    link: "https://talent-screen-ai-two.vercel.app/",
  },
  {
    id: 3,
    category: "app",
    title: "NoteTaker - Full-Stack Note-Taking App",
    des: "A full-stack note-taking app with a Markdown editor, secure authentication and a fully typed API.",
    img: "/p3.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "tRPC",
      "Prisma",
      "NextAuth",
      "TanStack Query",
      "CodeMirror",
      "Zod",
    ],
    highlights: [
      "Markdown editor",
      "Markdown preview",
      "Secure sign-in",
      "End-to-end typed API",
    ],
    link: "https://notetaker-two-alpha.vercel.app/",
  },
  {
    id: 7,
    category: "app",
    title: "EWURABA - 3D Snake Game",
    des: "A futuristic 3D snake game: guide a naga through a glowing cyber-garden, eating fruit and dodging thorns.",
    img: "/p7.png",
    stack: ["React", "TypeScript", "Vite", "Three.js", "Web Audio API"],
    highlights: [
      "Power-ups",
      "Combo scoring",
      "Touch controls",
      "Generated soundtrack",
      "Adaptive quality",
    ],
    link: "https://snake-game-ashy-seven.vercel.app",
  },
  {
    id: 8,
    category: "landing",
    title: "ClinEase - Burnout Relief for Healthcare Workers",
    des: "Landing page for a burnout-relief app built for nurses and doctors, with quick relaxation sessions for stressful shifts.",
    img: "/p8.png",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    highlights: [
      "Waitlist form",
      "Contact form",
      "Terms & privacy",
      "Light & dark theme",
      "Particle background",
    ],
    link: "https://www.clineaseapp.com/",
  },
  {
    id: 9,
    category: "landing",
    title: "AgentPesa - Voice-First AI Banking",
    des: "Landing page for a voice-first AI banking app that works in English, Pidgin, Yoruba, Igbo and Hausa.",
    img: "/p9.png",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "AOS",
      "Owl Carousel",
      "Typed.js",
      "SweetAlert",
    ],
    highlights: [
      "Contact form",
      "Waitlist form",
      "Blog",
      "Privacy & terms",
      "Store download links",
      "Product video",
    ],
    link: "https://agentpesa.ai/",
  },
  {
    id: 11,
    category: "landing",
    title: "Flolyt - Revenue Intelligence Landing Page",
    des: "The marketing site for Flolyt, a revenue intelligence workspace, built for search with prerendered pages and an API-powered blog.",
    img: "/p11.png",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Motion",
      "Vercel",
      "Search Console",
    ],
    highlights: [
      "Prerendered pages",
      "Sitemap & robots.txt",
      "Canonical URLs",
      "JSON-LD schema",
      "Open Graph cards",
      "API-powered blog",
      "Pricing page",
    ],
    link: "https://www.flolyt.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Olayinka was an incredible experience. He brought creativity and precision to every task, turning our ideas into a polished, functional product. His attention to detail and commitment to excellence are unmatched.",
    name: "Adeleye Jamiu",
    title: "Co-Founder of AdejamTech",
  },
  {
    quote:
      "Olayinka’s expertise and professionalism made the project run smoothly from start to finish. He consistently delivered high-quality solutions and communicated clearly every step of the way. I highly recommend collaborating with him.",
    name: "Bello AbdulMateen",
    title: "Founder of Codetrative Solutions",
  },
  {
    quote:
      "Olayinka transformed our vision into reality with his technical skill and thoughtful design. He went above and beyond to ensure every detail was perfect, making our project a resounding success.",
    name: "Bola Ahmend",
    title: "Founder of Teckciphers & Rizpay",
  },

];

export const workExperience = [
  {
    id: 5,
    title: "Founding Frontend Engineer – Flolyt",
    date: "Dec 2025 – Present",
    desc: "Leading end-to-end frontend development of an AI-powered customer engagement platform built with React (Vite) and TypeScript, from the dashboard and segmentation to an AI Workflow Studio.",
    className: "lg:col-span-4",
    thumbnail: "/exp2.svg",
  },

  {
    id: 1,
    title: "Full-Stack Engineer – Codetratives",
    date: "Dec 2024 – Dec 2025",
    desc: "Designed, developed, and maintained full-stack web applications using modern frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },


  {
    id: 2,
    title: "Software Engineer – AdejamTech",
    desc: "Worked on multiple web projects, implementing robust features and optimizing performance for client applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Full-Stack Engineer – Freelance",
    date: "May 2023 – Dec 2024",
    desc: "Led end-to-end development of client projects, from concept to deployment, using modern web and mobile technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Frontend Engineer – Teckciphers",
    date: "May 2018 – Sep 2022",
    desc: "Built and enhanced interactive web interfaces using React.js, improving user engagement and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Yinkusadel"
  },
  {
    id: 2,
    name: "X (Twitter)",
    img: "/twit.svg",
    link: "https://x.com/HashiraAdel"
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/adeleye-olayinka/"
  },
];