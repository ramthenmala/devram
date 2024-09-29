import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ram Kumar Narayana Swami",
  initials: "RK",
  url: "https://devram.vercel.app/",
  location: "Halifax, UK",
  locationLink: "https://goo.gl/maps/FFyNdrEcEukEtqHXAo",
  description:
    "Full Stack Software Engineer skilled in Node.js, JavaScript, React, and Next.js. Passionate about building solutions and supporting others.",
  summary:
    "I am a passionate developer specializing in innovative digital solutions that enhance user experiences. Proficient in React.js, Next.js, D3.js, and Node.js, I create responsive applications and interactive e-learning features using HTML, CSS, and JavaScript. Committed to code quality, I focus on refactoring and thorough documentation. I believe in mentorship and collaboration to foster growth, continuously seeking new challenges to improve my skills and contribute to impactful projects.",
  avatarUrl: "/ramkumar-narayana-swamy.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Postgres",
    "GCP",
    "Azure",
    "MongoDB",
    "SCSS",
    "LESS",
    "Styled Components",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devramthenmala@gmail.com",
    tel: "+447867031500",
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
      company: "Tata Consultancy Service",
      href: "https://www.tcs.com/",
      badges: [],
      location: "Trivandrum, Keralam, India",
      title: "Assistant Consultant",
      logoUrl: "/devram-tata-consultancy-service.jpg",
      start: "Sep 2019",
      end: "Present",
      description:
        "I successfully led a team of 10 development professionals, fostering collaboration and innovation. I provided technical leadership through mentorship in Node.js and React.js, encouraging growth in skills like React Testing Library. Additionally, I prepared detailed documentation and reports on code status and maintenance, ensuring clarity and accessibility for the team.",
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
        "Led a team of 8 development professionals in designing the front-end architecture and conducting research for the Sharjah Police website and HR Management System (HRMS) using React. I extensively utilized React.js, D3.js, and Node.js for JavaScript object and array manipulations. Additionally, I focused on building a secure, scalable, reliable, and extensible web application for both web and tablet devices using React.js, Next.js, and CSS.",
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
        "Developed fully functional, responsive prototypes while implementing API integrations and performing code refactoring. Collaborated with technical authors to create detailed technical specifications and write comprehensive operational documentation.",
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
        "Designed and developed new e-learning features using HTML, CSS, and JavaScript while preparing thorough documentation. Focused on creating highly interactive e-learning courses to enhance user engagement and learning experiences.",
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
        "Motionjs with Reactjs Portfolio",
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
        "Rest API with Node.js, Express, TypeScript, MongoDB with Typegoose Resources",
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
  ],
} as const;
