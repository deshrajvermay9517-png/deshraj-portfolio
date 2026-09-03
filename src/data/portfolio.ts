export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  categories: string[];
};

export const portfolio = {
  profile: {
    name: "Deshraj Verma",
    title: "Full Stack Developer",
    location: "Greater Noida, Uttar Pradesh, India",
    email: "deshrajvermay9517@gmail.com",
    workPreference: "Remote / Hybrid / On-site",
    relocation: "Open to relocation",
    profileImage: "/images/profile/deshraj.webp",
    resumeUrl: "/resume/deshraj-verma-resume.pdf",
    intro: "Final-year B.Tech CSE student specializing in AI/ML, with hands-on experience building full-stack applications using React, Next.js, Node.js, Express, PostgreSQL, Supabase, MongoDB, and modern API integrations."
  },
  socials: {
    github: "https://github.com/deshrajvermay9517-png",
    gitlab: "https://gitlab.com/deshrajvermay9517",
    linkedin: "https://linkedin.com/in/deshraj-verma-892312206",
    x: "https://x.com/deshrajv_dev",
    threads: "https://www.threads.com/@deshraj_v07",
    leetcode: "https://leetcode.com/u/deshraj1234/",
    codeforces: "https://codeforces.com/profile/deshrajvermay9517",
    instagram: "https://www.instagram.com/futureroutex/",
    youtube: "https://www.youtube.com/@FutureRouteX"
  },
  about: [
    "I'm a Full Stack Developer and final-year B.Tech Computer Science & Engineering student at IILM University, specializing in AI/ML.",
    "I enjoy turning ideas into complete web products — from responsive interfaces and APIs to authentication, databases, payments, and AI integrations.",
    "Alongside building projects, I contribute to open-source software, practice data structures and algorithms, and create JavaScript and Three.js coding content through FutureRouteX."
  ],
  experience: {
    company: "VSERV Infosystems Pvt. Ltd.",
    role: "Fullstack Intern",
    dates: "16 July 2026 – 30 August 2026",
    location: "Remote · Noida, Uttar Pradesh",
    repo: "https://github.com/deshrajvermay9517-png/task-dashboard",
    bullets: [
      "Built a full-stack task dashboard based on provided product requirements and application flows.",
      "Developed reusable and responsive frontend components for task-management workflows.",
      "Integrated a MongoDB-backed backend to persist task data and support create/update operations.",
      "Used Git and GitHub for source control, implementation delivery, fixes, and feature development."
    ]
  },
  projects: [
    {
      title:"BizPilot AI", subtitle:"AI-enabled SaaS Business Operations Platform",
      description:"A SaaS-style platform for local service businesses to manage leads, appointments, invoices, testimonials, analytics, and business workflows from one dashboard.",
      tech:["Next.js","React","TypeScript","Supabase","PostgreSQL","Tailwind","Razorpay","Recharts"],
      highlights:["CRM and lead management","Appointment scheduling","Invoices and reporting","Authentication and database security","Razorpay test-mode billing","AI-style follow-up workflow"],
      github:"https://github.com/deshrajvermay9517-png/bizpilot-ai", live:"https://bizpilot-ai-ten.vercel.app", categories:["Full Stack","AI"]
    },
    {
      title:"Vaccination Record Management System", subtitle:"Secure Multi-role Healthcare Management Platform",
      description:"A full-stack healthcare system for patients, healthcare providers, and administrators with vaccination records, appointments, inventory, reminders, and verifiable certificates.",
      tech:["Next.js","TypeScript","Prisma","Neon PostgreSQL","Auth.js","Zod","PDFKit","QR Code","Resend"],
      highlights:["Role-based access control","Vaccination history and dose scheduling","Inventory management","PDF + QR vaccination certificates","Public certificate verification","Reminder workflows"],
      github:"https://github.com/deshrajvermay9517-png/Vaccination-Record-Management-System", live:"https://vaccination-record-management-syste.vercel.app", categories:["Full Stack"]
    },
    {
      title:"MatchMind AI", subtitle:"AI-powered Football Match Analysis Platform",
      description:"Built for the IBM SkillsBuild AI Builders Challenge to turn match events, tactical changes, VAR decisions, and momentum data into understandable AI-assisted insights.",
      tech:["React","Vite","Node.js","Express","IBM watsonx.ai","Granite","Recharts","Tailwind"],
      highlights:["Match Event Explainer","Tactical Shift Analyzer","VAR Trust Companion","Momentum Insight Dashboard"],
      github:"https://github.com/deshrajvermay9517-png/matchmind-ai-deshraj", live:"https://matchmind-ai-deshraj.vercel.app", categories:["AI","Full Stack"]
    },
    {
      title:"Meetwise AI", subtitle:"AI Meeting Notes SaaS",
      description:"A meeting productivity platform architecture for managing meetings, transcripts, summaries, action items, and semantic search.",
      tech:["Next.js","TypeScript","Supabase","PostgreSQL","pgvector"],
      highlights:["Authentication","Meeting and transcript data architecture","AI-integration-ready workflow","Semantic search infrastructure","Supabase storage/database","Open-source repository structure and CI"],
      github:"https://github.com/deshrajvermay9517-png/Meetwise-ai", categories:["AI","Full Stack"]
    },
    {
      title:"HelioShield AI", subtitle:"Explainable Space-weather Launch Risk Decision Support",
      description:"A proof of concept created for the August AI Builders Challenge with IBM Bob, using public space-weather signals to produce understandable launch-risk recommendations.",
      tech:["React","TypeScript","NOAA SWPC","Cloudflare"],
      highlights:["NOAA space-weather signal ingestion","Mission-aware risk assessment","GO / CONDITIONAL / HOLD recommendations","Safer-window analysis","Counterfactual scenarios","Resilient fallback handling"],
      github:"https://github.com/deshrajvermay9517-png/helioshield-ai", categories:["AI"]
    },
    {
      title:"Traffic Detection YOLOv8", subtitle:"Computer Vision Traffic Detection System",
      description:"A computer-vision application for detecting and monitoring vehicles in traffic footage using YOLOv8.",
      tech:["Python","YOLOv8","OpenCV","Flask"],
      highlights:["Vehicle detection","Image/video processing","Traffic monitoring","Flask-based user interface"],
      github:"https://github.com/deshrajvermay9517-png/traffic-detection-Yolov8", categories:["Computer Vision","AI"]
    }
  ] as Project[],
  openSource: [
    {repo:"Hamplard-Hub / Hamplard-frontend",title:"Free Courses Landing Page",detail:"Implemented free-course discovery, category filtering, enrollment CTA flows, SEO metadata, navigation integrations, and related testing.",url:"https://github.com/Hamplard-Hub/Hamplard-frontend/pull/311"},
    {repo:"mergepay / mergepay-web",title:"Currency & Memo Utility Test Coverage",detail:"Expanded test coverage for currency-format edge cases, decimal and large values, and Stellar memo utilities.",url:"https://github.com/mergepay/mergepay-web/pull/452"},
    {repo:"faker-js / faker",title:"String API Error Documentation",detail:"Improved faker.string.numeric() documentation by documenting missing error conditions.",url:"https://github.com/faker-js/faker/pull/4023"}
  ],
  skills: {
    Frontend:["React.js","Next.js","TypeScript","JavaScript","Tailwind CSS","HTML5","CSS3"],
    Backend:["Node.js","Express.js","REST APIs","Authentication","API Integration"],
    Database:["PostgreSQL","Supabase","MongoDB","Prisma ORM","SQL"],
    "AI & Integrations":["AI API Integration","IBM watsonx.ai / Granite","pgvector","Razorpay Integration"],
    Tools:["Git","GitHub","GitHub Actions","Postman","Vercel"],
    Fundamentals:["Java","Python","Data Structures & Algorithms","OOP","DBMS"]
  },
  coding: { leetcode:{solved:"110+",easy:39,medium:69,hard:2,badge:"50 Days Badge 2026"}, codeforces:{rating:433,rank:"Newbie"} },
  education: {institution:"IILM University, Greater Noida",degree:"B.Tech in Computer Science & Engineering",specialization:"Artificial Intelligence & Machine Learning",years:"2023–2027",cgpa:"8.09",coursework:["Data Structures & Algorithms","Object-Oriented Programming","Database Management Systems","Operating Systems","Computer Networks"]},
  certifications:[{name:"Lab: Troubleshoot Your Code Using IBM Bob",issuer:"IBM SkillsBuild",date:"August 2026"}],
  achievements:[
    {title:"Forge 2: Edition 2",organizer:"NMG Labs",result:"Qualified for the Grand Finale"},
    {title:"AI Inside the Match Challenge",organizer:"IBM SkillsBuild / BeMyApp",result:"MatchMind AI submitted · $50 project-submission incentive received"},
    {title:"July AI Builders Challenge",organizer:"IBM SkillsBuild / BeMyApp",result:"CineForge AI submitted"},
    {title:"August AI Builders Challenge with IBM Bob",organizer:"IBM SkillsBuild / BeMyApp",result:"HelioShield AI submitted"}
  ],
  content:{brand:"FutureRouteX",description:"JavaScript, Three.js, interactive visualization, creative-coding tutorials, Reels, and Shorts.",stats:["100+ Instagram posts","200+ Instagram followers","Selected reels reaching around 10K views","99 YouTube videos"],selected:[
    {title:"Interactive 3D AGI Singularity in Three.js & JavaScript",platform:"YouTube" as const,url:"https://youtu.be/8oOgLLjmAbM",embedUrl:"https://www.youtube-nocookie.com/embed/8oOgLLjmAbM"},
    {title:"Interactive 11D String Theory / Calabi-Yau Visualization",platform:"YouTube" as const,url:"https://youtu.be/GsADwc0DfG0",embedUrl:"https://www.youtube-nocookie.com/embed/GsADwc0DfG0"},
    {title:"10K-view JavaScript / Three.js Reel",platform:"Instagram" as const,url:"https://www.instagram.com/reel/DcOiW2dAiaz/",embedUrl:"https://www.instagram.com/reel/DcOiW2dAiaz/embed/"},
    {title:"9K+ view JavaScript / Three.js Reel",platform:"Instagram" as const,url:"https://www.instagram.com/reel/Db51KOrAybL/",embedUrl:"https://www.instagram.com/reel/Db51KOrAybL/embed/"}
  ]},
  services:["Full Stack Web Development","React / Next.js Development","Node.js / Express REST APIs","PostgreSQL / Supabase / MongoDB Integration","Authentication & Third-party API Integration","AI API / Feature Integration"]
};
