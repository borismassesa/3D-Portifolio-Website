import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    c,
    java,
    python,
    sql,
    meta,
    teck,
    starbucks,
    qfavionics,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Power Platform Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Math & Statistics",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Low code Software Developer",
      company_name: "Teck Resources",
      icon: teck,
      iconBg: "#FFFFFF",
      date: "January 2023 - In Progress",
      points: [
        "Developed Authorization to Work App: Created a comprehensive application using Microsoft Power Platform, ensuring compliance with planning, community, health, safety, and environmental requirements for Legacy employees planning on-site work.",
        "Implementing Power Automate Workflow: Designed a seamless approval process for app submissions, significantly enhancing operational efficiency and responsiveness.",
        "Leveraging SharePoint and Azure DevOps: Utilized SharePoint for team collaboration and document management and Azure DevOps for efficient project management and CI/CD, actively contributing to Agile sprint planning and delivery of high-quality solutions.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Q.F. Avionics Center Ltd",
      icon: qfavionics,
      iconBg: "#FFFFFF",
      date: "September 2022 - December 2022",
      points: [
        "Developed and Optimized Avionics Software: Gained hands-on experience in multiple dimensions of avionics software development, utilizing languages such as Java, Python, and C, and ensuring compliance with industry standards through meticulous debugging and optimization.",
        "Led Special Project and Improved System Architecture: Played a pivotal role in leading a project focused on redesigning key features of a navigation and communication system, and honed analytical skills to contribute to strategic improvements in system architecture.",
        "Enhanced Technical Acumen and Project Management Skills: Strengthened technical skills and knowledge in avionics systems and gained valuable insights into the complexities of project management, including resource allocation, budgeting, and timeline planning.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The most remarkable thing about Boris is his drive to get better and whatever endeavor he is pursuing. Be it programming or volunteering, Boris will always look for a way to improve and that drive is infectious to everyone arounf him.",
      name: "Takudzwa Marwendo",
      designation: "Software Engineer",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Boris possesses a unique blend of technical proficiency, confidence and good communication skills. Furthermore, his curiosity and attention to detail have made him an invaluable member of our STEM mentorship group.",
      name: "Rashid Yakubu",
      designation: "Business Intelligence Developer",
      company: "Coast Appliances",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Having had the honor of working with Boris on multiple occasions, something that sets him apart from many others is his ability to quickly learn new technologies and put in the work to master them.",
      name: "Jasper Tenga",
      designation: "Software Developer",
      company: "Medical Mutual of Ohio",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio Website", 
      description:
        "A personal portfolio website that showcases my skills and experience as a software developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };