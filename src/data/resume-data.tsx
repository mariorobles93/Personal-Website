import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SailPointLogo } from "@/components/logos/SailpointLogo";
import { SeekOpsLogo } from "@/components/logos/SeekOpsLogo";
import { GeneralMotorsLogo } from "@/components/logos/General Motors";
import { UTEPLogo } from "@/components/logos/UTEPLogo";
import { EmptyLogo } from "@/components/logos/EmptyLogo";

export const RESUME_DATA = {
  name: "Mario Robles",
  initials: "MR",
  location: "Austin, TX",
  locationLink: "https://maps.app.goo.gl/AZQ1CEZLuBVJjnQN7",
  about:
    "Front End Software Developer with expertise designing and implementing multi-tier, scalable software solutions",
  summary:
    "Creative self-starter with well-rounded front and backend experience, full mastery over the fundamentals of computer science, and a passion for continually learning new concepts, methods, and technologies. Known for expert verbal and written communication skills and the ability to build trusted relationships within diverse groups of clients, teams, executives, and subject matter experts",
  avatarUrl: "/MarioRoblesProfile.png",
  personalWebsiteUrl: "https://mariorobles.tech",
  resumePdfUrl: "/MarioRoblesResume.pdf",
  coverLetterPdfUrl: "/MarioRobles_CoverLetter.pdf",
  contact: {
    email: "dev@mariorobles.tech",
    tel: "+19152024560",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mariorobles93",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mario-robles/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/MarioRoblesTech",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Texas at El Paso",
      degree: "Bachelor's Degree in Mechanical Engineering",
      start: "2011",
      end: "2016",
      logo: UTEPLogo
    },
  ],
  work: [
    {
      company: "SailPoint",
      link: "https://www.sailpoint.com/",
      badges: ["Remote", "Hybrid"],
      title: "Senior Front End Developer",
      logo: SailPointLogo,
      start: "March 2022",
      end: "September 2023",
      description:
        "Design and maintain software solutions related to identity management and governance for a company specializing in identity and access management. Contribute to the enhancement of existing software products by adding new features, improving performance, and eliminating bugs. Work seamlessly with product managers, UX/UI designers, and quality assurance teams to deliver high-quality solutions. Analyze software issues reported by customers and identified during testing phase to ensure products meet reliability standards. Drive development process to complete epics, independently and in partnership with team.",
      achievements:[
        "Contributed to team “Forms” project to develop user-customizable forms for onboarding/outboarding data gathering that was integrated with the company’s internal software environment tools within 6 months.",
        "Added form fields, actions and columns on form manager table, and confirmation message cards.",
        "Organized multiple epics for the team by breaking them down into manageable tasks and creating detailed descriptions outlining what needed to be done; all new components included storybook and jest test coverage (80% min).",
      ],
      technologies: ["Angular", "Typescript", "Jest", "Storybook", "Cypress"],
      hidden: false
    },
    {
      company: "SeekOps",
      link: "https://seekops.com/",
      badges: ["In Office", "Remote", "Hybrid"],
      title: "Front End Developer",
      logo: SeekOpsLogo,
      start: "October 2019",
      end: "March 2022",
      description: "Created functional applications using React/Typescript for innovative company that offered customized emissions monitoring solutions for the traditional and renewable energy sectors. Designed products in seamless conformance with SOLID principles, allowing easy resolution of issues with minimal impact on time and resources. Led development of new products for internal clients, allowing data processing while abroad and optimizing the quality assurance process. Partnered with team to address major issues for first generation products that didn’t meet expected quality requirements.",
      achievements:[
        "Implemented scalable white-listing role/ability-based authorization/authentication system using CASL Library, simplifying process of adding new roles and allowing users to easily modify existing roles.",
        "Designed an import page for pilots to upload survey data from over 10+ states and 5+ countries including offshore oil rigs, which eliminated inefficiency and risk caused by pilots having to wait until returning to the office to upload data.",
        "Introduced task status live report for data import processing using Redux, which displayed task status and progress percentage as users uploaded data; included pop-up that displayed failed files and reason for failure.",
        "Created numerous smaller components that coalesced into Survey Quality Assurance page that enabled users to upload, process, add feedback, and vet surveys in a single page."
      ],
      technologies: ["React", "Typescript", "Material UI", "React Testing Library", "Redux"],
      hidden: false
    },
    {
      company: "General Motors",
      link: "https://gm.com",
      badges: ["In Office"],
      title: "Software Developer",
      logo: GeneralMotorsLogo,
      start: "February 2017",
      end: "October 2019",
      description: "Analyzed requirements, conceived solutions, and developed software. Debugged finished projects to meet operational needs. Evaluated company-wide, departmental, or specific project needs; prioritized and determined potential impact on external/internal functions, and produced software solutions or processes to resolve. Assessed evolving needs and user requests to update/upgrade software assets and ensure optimal functionality. Extracted data, transformed and loaded (ETL) from global databases. Provided dev support for multiple web apps using Angular 1.x/JS and 5.x/TS, updating features according to requirements. Partnered with project teams and management, and worked on projects with minimal supervision.",
      achievements: [
        "Successfully developed standalone, scalable, kiosk-mode web page based on Angular 5. Completed product was exposed to 8K users and available for use in 50+ locations within two GM campuses. (Angular 5.x, Typescript)",
        "Resolved code organization issue, facilitating efficient maintenance for future code base. (Angular 1.x, JS)",
        "Implemented K-Means algorithm that collected Maven Shuttle transit data to predict travel time between stations, generating accurate shuttle ETAs for the first time ever. (C#)"
      ],
      technologies: ["Angular", "Typescript", "Javascript", ".NET", "Oracle"],
      hidden: true
    },
    {
      company: "The University Of Texas at EL Paso",
      link: "https://utep.edu",
      badges: ["In Office"],
      title: "Research Assistant/Project Co-Leader—Infrared UAV Crop Analysis, UTEP/CETYS, Mexico",
      logo: UTEPLogo,
      start: "May 2015",
      end: "Dec 2016",
      description: "Partnered with various teams to create and implement different solutions to improve crop conditions for multiple wineries in the Valle de Guadalupe, including designing a Smart Grid Proposal and renewable energy source analysis to ensure reliability.",
      achievements:[
        "Supported design and ordered the required 3D parts to distribute to various teams.",
        "Developed cost-effective (<$3K) GPS-guided UAV kit to analyze crop conditions; drone camera was equipped with modular (able to transition between IR to Standard Camera) and infrared capabilities."
      ],
      technologies: [],
      hidden: true
    },
    {
      company: "Academic Technologies @ UTEP",
      link: "https://utep.edu",
      badges: ["In Office"],
      title: "Project Manager/Application Developer",
      logo: UTEPLogo,
      start: "February 2012",
      end: "December 2016",
      description:
        "Created and maintained website pages/games and mobile application software for 5 different university and grant-sponsored projects. Served as IT support for 40+ individuals and 100+ laptop equipment units for sponsored events and conferences. Led projects for multiple 3D printers, updating software, repairing hardware, and conducting 3D print procedures to fulfill orders.",
      achievements:[
        "Successfully provided daily and weekly “Design to Order” and 3D Printing services to UAV team.",
        "Developed low-cost UAV (<$1K), autonomous kits equipped with Full-Spectrum cameras modified to obtain Georeferenced Orthomosaic snapshots of locations of interest for the Geology Department.",
        "Successfully reduced production costs by utilizing 3D printing and CAD."
      ],
      technologies: ["3D Printing"],
      hidden: true
    },

  ],
  skills: [
    "Angular",
    "TypeScript",
    "React/Next.js/Redux",
    "Node.js",
    "Jest",
    "Testing Library"
  ],
  projects: [
    {
      title: "Personal Website",
      tags:[
        "Side Project",
        "Forked"
      ],
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Lucide React"
      ],
      description: "A project to display my professional experience. Original Template: @BartoszJarocki/cv",
      logo: GitHubIcon,
      link: {
        label: "Github Repository",
        href: "https://github.com/mariorobles93/Personal-Website",
      },
    },
    {
      title: "SailPoint Forms Documentation",
      tags:[
        "Proprietary"
      ],
      techStack: [
        "Angular",
        "Storybook",
        "Jest",
      ],
      description: "Utilize sections and fields to organize forms logically. Conditional configurations adapt form elements based on user input. Form inputs integrate external data sources.",
      logo: SailPointLogo,
      link: {
        label: "SailPoint Forms Documentation",
        href: "https://documentation.sailpoint.com/saas/help/forms/index.html",
      },
    },
    {
      title: "SailPoint Angular Components (Armada)",
      tags:[
        "Proprietary"
      ],
      techStack: [
        "Angular",
        "Storybook",
        "Jest",
      ],
      description: "1st Party Angular UI Component library, Documented, Automated Testing",
      logo: SailPointLogo,
      link: {
        label: "Sailpoint UI Component Library Documentation",
        href: "https://documentation.sailpoint.com/identityiq/help/plugins/angularcomponents.html",
      },
    },
    {
      title: "SeekOps Dashboard",
      tags:[
        "Proprietary"
      ],
      techStack: [
        "React",
        "Typescript",
        "Testing Library",
        "Material UI",
        "Redux"
      ],
      description: "SeekOps Proprietary Emissions Dashboard, Data ingestion, Emissions Report Generation",
      logo: SeekOpsLogo,
      link: {
        label: "SeekOps Dashboard",
        href: "https://soda.seekops.com/",
      },
    },
    {
      title: "Shuttle Dashboard",
      tags:[
        "Proprietary"
      ],
      techStack: [
        "Angular",
        "Typescript"
      ],
      description: "Administrative dashboard facilitates vehicle, route, passenger, and stop management tasks.",
      logo: GeneralMotorsLogo,
    },
    {
      title: "Shuttle Kiosk",
      tags:[
        "Proprietary"
      ],
      techStack: [
        "Angular",
        "Typescript"
      ],
      description: "Touch screen optimized, scalable app, allows guest to request shuttle",
      logo: GeneralMotorsLogo,
    },
    {
      title: "Ross Optical Calculator",
      tags:[],
      techStack: [
        "Angular",
        "Ionic",
        "Typescript"
      ],
      description: "Allows potential clients to calculate requirements. Effective Focal Length, F#, Centration, Aspheric Surface ",
      logo: EmptyLogo
    },
  ],
} as const;
