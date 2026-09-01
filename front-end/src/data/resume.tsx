import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ram Kumar Narayana Swami",
  initials: "RK",
  url: "https://devram.vercel.app/",
  location: "Trivandrum, India",
  locationLink: "https://maps.app.goo.gl/8kFqZ7YQjKZ9vXqR7",
  description:
    "Lead Software Engineer / Solution Architect with 14+ years building enterprise web platforms across government, banking, and retail eCommerce. Applied AI, microservices, and micro-frontends — hands-on across React, NestJS, and Azure.",
  summary:
    "I architect systems and stay in the code. Over 14+ years I've delivered enterprise web platforms across government, banking, and retail eCommerce — currently working on B2B commerce on Optimizely Configured Commerce and an internal generative-AI product visualization platform that replaced physical sample photography, cutting turnaround from around three weeks to three days. Before that I led architecture on a Saudi Vision 2030 government investment platform with a team of 8–12 engineers, building an AI-powered search engine on Azure OpenAI with RAG that improved relevance scores by 40%. My background spans regulated delivery for Lloyds Banking Group and AXA UK, and public-sector systems for Sharjah Police. I work across solution architecture, microservices, micro-frontends, and applied AI — RAG pipelines, multimodal generation, and prompt engineering — while mentoring engineers and keeping quality gates and observability in place.",
  avatarUrl: "/ramkumar-narayana-swamy.jpg",
  skills: [
    "Solution Architecture",
    "System Design",
    "Microservices",
    "Micro-frontends",
    "Nx Monorepo",
    "RAG Architectures",
    "Azure OpenAI",
    "Google Gemini",
    "Prompt Engineering",
    "Vector Search",
    "Multimodal AI",
    "Optimizely Configured Commerce",
    "Typescript",
    "Javascript",
    "Python",
    "React",
    "Next.js",
    "Remix",
    "Vite",
    "Redux",
    "Zustand",
    "Node.js",
    "NestJS",
    "Express",
    "PostgreSQL",
    "Cosmos DB",
    "Redis",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Jest",
    "React Testing Library",
    "SonarQube",
    "Prometheus",
    "Grafana",
    "Splunk",
    "Tailwind CSS",
    "Shadcn UI",
    "Radix UI",
    "SCSS",
    "git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devramengineer@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ramthenmala",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramdevengineer/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ramthenmala",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ramthenmala",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Reflections Info Systems",
      href: "https://reflectionsinfos.com/",
      badges: [],
      location: "Trivandrum, Kerala, India",
      title: "Associate Architect",
      // TODO: add /public/devram-reflections.jpg — falls back to initial "R" until then
      logoUrl: "",
      start: "May 2025",
      end: "Present",
      description:
        "Architect across B2B commerce and applied AI. Currently delivering B2B commerce engineering on Optimizely Configured Commerce — productionizing and extending a DAM integration with automated image-gap discovery across a ~900K-product catalogue. Also contributed to the architecture of an internal generative-AI platform converting product tech packs into photorealistic renders, replacing physical sample photography and cutting end-to-end turnaround from around three weeks to three days. Previously led architecture on Compass (CALX), a Saudi Vision 2030 government investment platform, running an Agile team of 8–12 engineers across a React + Vite + Nx monorepo and NestJS microservices, and building an AI-powered search engine on Azure OpenAI using RAG that improved relevance scores by 40%.",
    },
    {
      company: "Tata Consultancy Services",
      href: "https://www.tcs.com/",
      badges: [],
      location: "Halifax, UK",
      title: "Assistant Consultant (Lead Software Engineer)",
      logoUrl: "/devram-tata-consultancy-service.jpg",
      start: "Sep 2019",
      end: "May 2025",
      description:
        "Led frontend architecture for the Lloyds Banking Group mortgage platform, designing modular micro-frontends that cut application load times by 50% and re-architecting the shared UI library on atomic design principles. Owned the A/B testing programme for the mortgage journey, reducing user effort by 80% and improving conversion. Engineered Node.js and TypeScript microservices with Redis caching, containerized with Docker and orchestrated on Kubernetes, sustaining 99.9% uptime under peak demand. Earlier delivered UI transformation for AXA UK's consumer insurance platform serving 100M+ monthly users. Ran internal workshops on React, TypeScript, and RTL to raise team proficiency.",
    },
    {
      company: "PIT Solutions",
      badges: [],
      href: "https://www.pitsolutions.com/",
      location: "Trivandrum, Keralam, India",
      title: "Senior Front End Developer",
      logoUrl: "/devram-pit-solutions.jpg",
      start: "Aug 2015",
      end: "Aug 2019",
      description:
        "As a full-stack developer, I contributed to the Sharjah Police website and HR Management System (HRMS), utilizing React.js, D3.js, and Node.js for efficient JavaScript object and array manipulations. I focused on building secure, scalable, and reliable web applications for both web and tablet devices, leveraging technologies like React.js, Next.js, and CSS to create an extensible and responsive user experience.",
    },
    {
      company: "DoubleSpring Media",
      href: "#",
      badges: [],
      location: "Bengaluru, Karnataka, India",
      title: "Front End Developer",
      logoUrl: "/devram-doublespring.jpg",
      start: "Aug 2013",
      end: "Aug 2015",
      description:
        "I developed fully functional, responsive prototypes with seamless API integrations, ensuring smooth data flow and user interaction. In parallel, I focused on code refactoring, optimizing performance and maintainability. Collaborating closely with technical authors, I contributed to crafting detailed technical specifications and comprehensive operational documentation, providing clear guidelines and ensuring the technical accuracy and accessibility of the project's development and deployment processes.",
    },
    {
      company: "OptioLogic Technologies Pvt Ltd",
      href: "https://optiologic.com/",
      badges: [],
      location: "Trivandrum, Keralam, India",
      title: "GUI",
      logoUrl: "/devram-optiologic.jpg",
      start: "Apr 2012",
      end: "Aug 2013",
      description:
        "I designed and developed innovative e-learning features utilizing HTML, CSS, and JavaScript, with a strong emphasis on enhancing user engagement and learning experiences. By creating highly interactive e-learning courses, I aimed to foster an immersive educational environment. Additionally, I prepared thorough documentation to ensure clarity and accessibility for both users and stakeholders, providing essential insights into the features and functionality implemented in the courses.",
    },
  ],
  education: [
    {
      school: "University of Kerala",
      href: "https://www.keralauniversity.ac.in/home",
      degree: "BA",
      logoUrl: "/devram-kerala-university.jpg",
      start: "2007",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "Node.js Authentication REST API",
      href: "https://github.com/ramthenmala/auth-api",
      dates: "Nov 2024",
      active: true,
      description:
        "A fully functional authentication REST API built with Node.js, TypeScript, and Typegoose. This API supports user registration, email verification, password recovery, and JWT-based authentication (access and refresh tokens). It’s designed for security and scalability, making it ideal for modern web applications requiring robust authentication flows.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Typegoose",
        "Express",
        "Zod",
        "argon2",
        "JWT",
        "Nodemailer",
      ],
      links: [
        {
          type: "GitHub Repository",
          href: "https://github.com/ramthenmala/auth-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/dev-ram-api-project.mp4?alt=media&token=d10698d1-b751-40a1-b048-5abd8fa76e72",
    },
    {
      title: "Next.js Corporate GSAP Animation Theme",
      href: "https://nextjs-corporate.vercel.app/",
      dates: "Jan 2022",
      active: true,
      description:
        "A modern, professional corporate theme built using Next.js and enhanced with smooth, high-performance animations powered by GSAP (GreenSock Animation Platform). This theme is perfect for businesses looking to deliver a sleek and engaging user experience with fast, SEO-optimized web performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://nextjs-corporate.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ramthenmala/Nextjs-Corporate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/devram-nextjs-agency-animation.mp4?alt=media&token=4d2ae443-ed05-4b92-96cb-c07bbe89bc88",
    },
    {
      title: "Sleek Animated Landing",
      href: "hhttps://saas-landing-page-opal.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "A sleek and modern landing page built using Tailwind CSS, Framer Motion, React, and Next.js. This project features smooth animations, responsive design, and a focus on performance, making it a perfect template for showcasing SaaS products or web applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://saas-landing-page-opal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ramthenmala/saas-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/ramdev-landing-page.mp4?alt=media&token=d77a6250-fcc6-48f0-9b91-3278ccfc358d",
    },
    {
      title: "Animated Landing Page",
      href: "https://motion-portfolio.netlify.app/",
      dates: "June 2023",
      active: true,
      description:
        "My portfolio highlights projects that integrate Motion.js with React.js to create dynamic and engaging user interfaces. Each project showcases seamless animations that enhance user experience.",
      technologies: [
        "ReactJs",
        "Javascript",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://motion-portfolio.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ramthenmala/Motion-Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/ramdev-portfoliio-ollie.mp4?alt=media&token=74d4c121-26b2-429b-a599-00dcbfb0a708",
    },
    {
      title: "Rest API",
      href: "https://github.com/ramthenmala/Node.js-Express-TypeScript-MongoDB-Zod",
      dates: "April 2022",
      active: true,
      description:
        "I developed a robust **REST API** using **Node.js**, **Express**, and **TypeScript**, with **MongoDB** as the database and **Typegoose** for seamless data modeling. This setup ensures efficient data handling and enhances type safety throughout the application, allowing for scalable and maintainable backend solutions.",
      technologies: [
        "Typescript",
        "Nodejs",
        "MongoDB",
        "Typegoose",
        "Zod",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ramthenmala/Node.js-Express-TypeScript-MongoDB-Zod",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/devram-nextjsapi.mp4?alt=media&token=ed8ababe-729d-4b56-9484-e4960c9f4be1",
    },
    {
      title: "Appooppanthaadi",
      href: "https://appooppanthaadi.com/",
      dates: "March 2023",
      active: true,
      description:
        "Introducing Appooppanthaadi, a travel agency exclusively for women, designed to empower through unforgettable journeys. Built with WordPress, enhanced by JavaScript, and styled with CSS, it offers user-friendly navigation and a stunning design. The site incorporates SEO best practices to boost visibility, ensuring a broader reach for its audience.",
      technologies: [
        "Wordpress",
        "Javascript",
        "CSS",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://appooppanthaadi.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://firebasestorage.googleapis.com/v0/b/devram-12f0b.appspot.com/o/devram-projects.appooppanthaadi.mp4?alt=media&token=a5761e06-43bb-4129-85d6-5dff95604dc0",
    },
  ],
  projectsWorked: [
    {
      title: "B2B Commerce Platform (Retail / Apparel)",
      dates: "Jan 2026 - Present",
      location: "Trivandrum, Kerala",
      description:
        "B2B commerce engineering on Optimizely Configured Commerce for a retail apparel client, working across the core platform codebase and a separate region-specific storefront. Migrated a DAM (digital asset management) integration from proof-of-concept to production, then extended it — replacing per-product-ID lookups with automated product-image discovery and preprocessing across a catalogue of approximately 900,000 products. Designed the integration and job-processing architecture behind the image pipeline, including batch discovery, database configuration, and scheduled processing at catalogue scale.",
      image: "",
      links: [],
    },
    {
      title: "AI Product Visualization Platform",
      dates: "Jan 2026 - Present",
      location: "Trivandrum, Kerala",
      description:
        "Internal generative-AI platform converting product tech packs into photorealistic product renders, replacing physical sample photography for pre-production review — cutting end-to-end turnaround from approximately three weeks to three days. Designed the multi-stage generation pipeline: PDF rasterization, OCR-grade document analysis, automated extraction of product specifications, and prompt-driven generation across seven camera angles. Built an automated quality-audit loop that re-submits each render to the model for verification against the source tech pack, and engineered batch production with human-in-the-loop spec review and session recovery.",
      image: "",
      links: [],
    },
    {
      title: "Compass (CALX) — Government Investment Platform",
      dates: "May 2025 - Dec 2025",
      location: "Trivandrum, Kerala",
      description:
        "Lead architect for a Saudi Vision 2030 investment platform, delivering secure Investor and Admin portals with an Agile team of 8–12 engineers. Designed and governed a React + Vite + Nx monorepo with shared UI libraries and full English/Arabic i18n with RTL support. Architected NestJS microservices and PostgreSQL data models, and built an AI-powered search and recommendation engine on Azure OpenAI using RAG — vector embeddings and semantic ranking combined with structured filtering — improving relevance scores by 40%. Established Docker-based CI/CD with Jenkins, security gates, and observability with Prometheus, Grafana, and Splunk.",
      image: "",
      links: [],
    },
    {
      title: "Lloyds",
      dates: "Jul 2021 - May 2025",
      location: "Halifax, UK",
      description:
        "Developed a modern web application using React.js, TypeScript, and Webpack, following a micro-frontend architecture. Built scalable microservices with Node.js and implemented custom, responsive styling. The application is deployed and managed in a Microsoft Azure cloud environment, demonstrating strong expertise in cloud infrastructure and services.",
      image:
        "/devram-projects-lloyds.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "AXA UK, Insurance",
      dates: "Sep 2019 - Dec 2021",
      location: "Trivandrum, Kerala",
      description:
        "Developed a modern web application for AXA UK using React.js, TypeScript, and Webpack. Implemented custom, responsive styling with SCSS to deliver a seamless user experience. The application is deployed and managed in a Microsoft Azure cloud environment, showcasing strong expertise in cloud infrastructure and services.",
      image:
        "/devram-project-workedon-axa-uk.jpg",
      links: [],
    },
    {
      title: "Sharjah Police",
      dates: "Jan 2018 - Aug 2019",
      location: "Trivandrum, Kerala",
      description:
        "Led the Front-End architecture and research for the Sharjah Police website and HRMS, focusing on building a secure, scalable, reliable, and extensible web application for both web and tablet devices. Extensively used React.js, Next.js, and CSS for development, along with D3.js for advanced JavaScript object and array manipulations. Additionally, integrated Strapi for efficient CMS management. My work ensured a responsive, high-performance interface tailored to the unique needs of the project.",
      image:
        "/devram-projects-sharjah-police.jpg",
      links: [],
    },
    {
      title: "Ynoox GmBh",
      dates: "Aug 2015 - Dec 2017",
      location: "Trivandrum, Kerala",
      description:
        "I specialize in creating responsive prototypes that align with business requirements, using HTML/HTML5, CSS3, JavaScript, and jQuery. I have introduced wireframing and information architecture best practices to improve team efficiency. Additionally, I developed a custom JavaScript email template builder with pre-saved email templates and custom HTML. One of my notable projects includes designing a front-end prototype for an insurance billing web platform.",
      image:
        "/devram-projects-ynoox.jpg",
      links: [],
    },
    {
      title: "Blackmonk",
      dates: "Aug 2013 - Jul 2015",
      location: "Bengaluru, Karnataka",
      description:
        "Crafted responsive prototypes using HTML/HTML5, CSS3, JavaScript, and jQuery, and designed front-end functionality for over 20 modules. Managed key e-commerce platform features like the shopping cart, quick view, and checkout page, leveraging Bootstrap CSS and JavaScript components.",
      image:
        "/devram-blackmonk-logo.jpg",
      links: [],
    },
  ],
} as const;
