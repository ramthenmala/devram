import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ram Kumar Narayana Swami",
  initials: "RK",
  url: "https://devram.vercel.app/",
  location: "Halifax, UK",
  locationLink: "https://goo.gl/maps/FFyNdrEcEukEtqHXAo",
  description:
    "Full Stack Software Engineer skilled in Node.js, JavaScript, React, and Next.js, with expertise in Azure, GCP, and unit testing. Passionate about building solutions, mentoring, and ensuring code quality.",
  summary:
    "I am a passionate developer specializing in React.js, Node.js, JavaScript, and CSS, with a strong focus on building scalable digital solutions and enhancing user experiences. Proficient in cloud technologies and unit testing libraries like Jest, React Testing Library and Enzyme, I ensure reliable, high-performance code. I utilize SonarQube and SonarLint to maintain code quality, and I implement NexusIQ, Snyk, and the Aqua Scanner Docker image to effectively address security vulnerabilities. I've contributed to large-scale projects for clients such as Lloyds, AXA UK, Sharjah Police, and Ynoox GmbH, developing innovative insurance platforms and secure, responsive web applications. I prioritize clean, maintainable code through refactoring and thorough documentation while embracing mentorship and collaboration to foster growth. Continuously seeking new challenges, I aim to enhance my skills and deliver impactful projects in both team-based and independent environments.",
  avatarUrl: "/ramkumar-narayana-swamy.jpg",
  skills: [
    "Micro UI",
    "Micro Service",
    "HTML",
    "CSS",
    "LESS",
    "SCSS",
    "Styled Component",
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "Next.js",
    "RemixJs (Learning Phase)",
    "Webpack",
    "Jest",
    "Reat Testing Library",
    "SocketIO",
    "Bootstrap CSS",
    "React Bootstrap",
    "Kendo UI",
    "Material UI",
    "Shadcn UI",
    "aceternity UI",
    "Radix UI",
    "Node.js",
    "ExoressJs",
    "Docker",
    "Kubernetes",
    "GCP",
    "Azure",
    "MongoDB",
    "Postgres",
    "npm",
    "yarn",
    "pnpm",
    "git",
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
        "I am a full-stack developer with expertise in React.js, Node.js, JavaScript, CSS, and cloud technologies. I have contributed to large-scale projects such as Lloyds and AXA UK, where I worked on developing and maintaining complex, scalable web applications. My experience includes using React Testing Library and Jest to ensure high-quality code, along with preparing detailed documentation and reports on code status and maintenance. I focus on delivering responsive and secure solutions while continuously improving performance and user experience.",
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
      date: "Nov 2024",
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
      title: "Lloyds",
      dates: "Jul 2021 - Present",
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
    }, ,
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
