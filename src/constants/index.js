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
  meta,
  bookapi,
  tesla,
  shopify,
  weather,
  covid,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: frontend,
  },
  {
    title: "Typescript Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Scss",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BcnActua",
    icon: bcnactua,
    iconBg: "#101010",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "BcnActua",
    icon: bcnactua,
    iconBg: "101010",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "On_Process",
    icon: on_process,
    iconBg: "101010",
    date: "Sept 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I never imagined building projects personally as a junior developer, through consistency I have moved further.",
    name: "Fodio",
    designation: "Frontend Dev",
    company: "none",
    image: "https://unsplash.com/photos/mBRfYA0dYYE",
  },
  {
    testimonial:
      "I had always thought software development was all about java, untill I met javascript.",
    name: "Fodio",
    designation: "Frontend Dev",
    company: "none",
    image: "https://unsplash.com/photos/75715CVEJhI",
  },
  {
    testimonial:
      "After learning javascript, I knew typescript was from same hood as js.",
    name: "Fodio",
    designation: "Frontend Dev",
    company: "456 Enterprises",
    image: "https://unsplash.com/photos/LEpfefQf4rU",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A weather API that fetches climatic data within a 24 hour period of a specific region or city.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Hudufodio/weatherApiProject",
  },
  {
    name: "Bookshop",
    description:
      "Web application that enables users to search for books of all kind, view prices, availability, language choice and order placements for paper bag or virtual.",
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
    image: bookapi,
    source_code_link: "https://github.com/Hudufodio/online-bookshop",
  },
  {
    name: "Covid tracker",
    description:
      "API data fetch app of covid infected countries, created to track the number of active, recovery and death cases per a geographical region and as well providing preventive measures.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/Hudufodio/Covid-tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
