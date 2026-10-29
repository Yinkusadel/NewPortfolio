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

export const projects = [
  {
    id: 1,
    title: "StoreIt",
    des: "A modern file storage app using Next.js, Appwrite, TailwindCSS, and Radix UI for seamless file management.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://storage-app-delta.vercel.app/",
  },
  {
    id: 2,
    title: "AdelMeets - Video Conferencing App",
    des: "A video conferencing app like Zoom built with Next.js, Clerk, Stream Video SDK, and TailwindCSS for seamless meetings and collaboration.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://adel-meets.vercel.app/",
  },
  {
    id: 3,
    title: "NoteTaker - Full-Stack Note-Taking App",
    des: "A modern full-stack Note Taker app with Markdown support, secure authentication, and real-time data management using Next.js, Prisma, tRPC, and TailwindCSS.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://notetaker-two-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Talsent Screen AI",
    des: "An intelligent resume scanner app built with Puter and React Router. It analyzes uploaded resumes using AI to extract key information, evaluate skills, and generate actionable insights for recruiters and job seekers.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", ],
    link: "https://talent-screen-ai-two.vercel.app/",
  },
  {
    id: 5,
    title: "Finance - Personal Finance Dashboard",
    des: "A full-stack personal finance dashboard built with Next.js, TypeScript, TailwindCSS, Hono, Drizzle ORM (Postgres), and Clerk auth. Track income, expenses, and balance across accounts with Recharts charts, category breakdowns, and CSV import.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://finance-app-lovat-kappa.vercel.app/",
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
    id: 1,
    title: "Full-Stack Engineer – Codetratives",
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
    desc: "Led end-to-end development of client projects, from concept to deployment, using modern web and mobile technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Frontend Engineer – Teckciphers",
    desc: "Built and enhanced interactive web interfaces using React.js, improving user engagement and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Yinkusadel"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/HashiraAdel"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/adeleye-olayinka/"
  },
];