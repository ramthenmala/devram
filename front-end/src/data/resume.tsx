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
    "I work with the JavaScript ecosystem. Welcome to my small piece of the internet, where I write and share about different topics related to the tech industry and lifestyle.",
  avatarUrl: "/ramkumar-narayana-swamy.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
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
        "Building and leading a team of 10 development professionals Provide technical leadership to teammates through coaching and mentorship Identify and encourage areas for growth and improvement within the team Prepare reports, manuals and other documentation on the status, operation and maintenance of the code",
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
        "Leading a team of 8 development professionals Front-End architecture and research for Sharjah Police website and HRMS in React Extensively used Reactjs, D3.Js, and Node JS for JavaScript object and array manipulations. Building a secure, scalable, reliable & extensible web application for Web and tablet devices using Reactjs, Nextjs, and CSS",
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
        "Develop fully functional responsive prototypes API integrations, Code refactoring Creating technical specifications Writing operational documentation with technical authors.",
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
        "Developing new e-learning features in HTML, CSS, Javascript and Preparing the documentation Design and develop highly interactive e-learnin coursesDeveloping new e-learning features in HTML, CSS, Javascript and Preparing the documentation Design and develop highly interactive e-learnin courses",
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
