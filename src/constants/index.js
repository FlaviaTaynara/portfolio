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
  insly,
  dieDefa,
  wU,
  restaurant,
  biblioteka,
  portfolio,
  threejs,
  java,
  python,
  postman,
  blueprism,
  postgreSQL,
  jenkins,
  cypress,
  django,
  vue,
  php,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
    description: "Designing and maintaining server-side logic, databases, and APIs.", 
  },
  {
    title: "Frontend Developer",
    icon: creator,
    description: "Building the user interface and user experience.",
  },
  {
    title: "Infrastructure & Tooling",
    icon: mobile,
    description: "Improving developer workflows, CI/CD, and test infrastructure.",
  },
  {
    title: "Analytical Thinker",
    icon: web,
    description: "Combining logic and curiosity to solve complex problems with data-driven solutions.",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "blueprism",
    icon: blueprism,
  },
  {
    name: "postgreSQL",
    icon: postgreSQL,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer – Infrastructure & Tooling (Full Stack)",
    company_name: "Insly",
    icon: insly,
    iconBg: "#383E56",
    date: "Jul 2021 - Present",
    points: [
      "Helped implement a reusable full-stack platform using Java and Playwright to validate complex API and UI workflows, improving regression coverage and increasing release confidence across teams.",
      "Modernized legacy systems by refactoring JavaScript/Cypress tooling into standardized Python and Java frameworks, cutting test maintenance effort and enabling smoother CI/CD adoption.",
      "Built backend utilities and CLI tools to automate deployment checks, accelerate developer workflows, and streamline debugging across services, reducing triage time by up to 40%.",
      "Partnered with backend and frontend engineers to resolve integration issues, optimize APIs, and boost system performance, resulting in faster load times and fewer production incidents.",
      "Stepped in as acting team lead—mentoring engineers and conducting code reviews to promote clean, scalable code and uphold best practices, contributing to a 25% drop in post-deploy bugs.",
    ],
  },
  {
    title: "Python Developer Internship",
    company_name: "DieDefa",
    icon: dieDefa,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Aug 2021",
    points: [
      "Structured backend applications using Python, Django, and Docker, integrating third-party services to boost performance and support scalable deployments across environments.",
      "Debugged and refined code throughout the development lifecycle, delivering robust, well-documented APIs that integrated seamlessly with frontend components and third-party platforms.",
      "Collaborated with Data Science and Machine Learning teams to integrate data-driven features, enhancing product functionality and supporting smarter user workflows.",
    ],
  },
  {
    title: "Robotic Process Automation Developer",
    company_name: "Western Union",
    icon: wU,
    iconBg: "#383E56",
    date: "Aug 2020 - Feb 2021",
    points: [
      "Developed both attended and unattended automation solutions using the Agile Scrum framework.",
      "Leveraged RPA tools, including Blue Prism and NICE Automation (NEVA).",
      "Demonstrated proficiency in languages such as VBA, VB, JavaScript, and Macros, to design robots that enhance productivity by automating repetitive tasks.",
    ],
  },
  {
    title: "VBA - Automation Developer",
    company_name: "Western Union Business Solutions",
    icon: wU,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Feb 2021",
    points: [
      "Engineered backend automation tools using VBA, VB, and JavaScript — including an AML/TF screening system that automated repetitive checks and doubled analyst processing capacity.",
      "Developed data-driven platforms to analyze client behavior and optimize workload distribution, directly supporting complex financial intelligence investigations.",
      "Managed the full software lifecycle for internal tools, overseeing design, implementation, deployment, and iterative improvements to ensure reliability and long-term maintainability.",
      "Mentored teammates and led the rollout of scalable solutions that improved delivery speed, reduced manual errors, and raised overall code quality across the team.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Flavia is truly exceptional. As her manager at Insly, I saw her take on every challenge with energy and resourcefulness. She doesn’t just handle what’s in front of her — she anticipates needs, finds smart solutions, and follows through every time. Flavia brings strong technical skills to the table, including solid knowledge of Python and other tools, which made her a valuable contributor in tackling complex projects. She’s always ready to support her teammates and brings a positive, can-do attitude that makes her a joy to work with. Her knack for simplifying complex issues and finding practical approaches had a real impact on our team's performance :) Any team would be lucky to have her on board!",
    name: "Oleksii Lipov",
    designation: "Lead QA Engineer",
    company: "Insly",
    image:
    "https://media.licdn.com/dms/image/v2/C4E03AQF1dQDadppzuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622922944271?e=1761177600&v=beta&t=m1hVj0fpPSVy0gOMEbbr-rWVF4x7ubsZnVj_bhVKifU",
  },
  {
    testimonial:
      "I have a pleasure working with Flavia for almost two years now. Flavia started as a specialist working in AML/TF field, however currently Flavia is focusing on increasing her VBA skills. Flavia is honing her skills for Python and SQL. She is a self-starter and every task Flavia starts working on always exceeds expectations. Flavia is highly valued member of the team as she manages to perform her daily tasks as well as spend time on improving/creating various tools team uses.' success like Rick does.",
    name: "Andrius Kirijakas",
    designation: "Manager, AML Compliance",
    company: "Western Union Business Solutions",
    image:
     "https://media.licdn.com/dms/image/v2/C4E03AQG7ZrtfiO3QYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654785422721?e=2147483647&v=beta&t=Th7REE3VNLPt8rcQek0aK6Xv4xcECzydQjiCc3qYGws",
  },
  {
    testimonial:
      "While I have managed Flavia for a short time period, during that time Flavia demonstrated goal achieving personality, dedication towards main work activity the same as additional tasks and orientation towards team work. Self-development seems to be Flavia’s main drive when achieving goals she aims at and results.",
    name: "Roberta Drakšienė",
    designation: "Team Leader",
    company: "Western Union",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQHEt4jWg3E5KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1599897623574?e=2147483647&v=beta&t=o9LDTuohWw_gWbrTHeiV1WkvXP9n5pqvQItnFRQWPg0",
  },
];

const projects = [
  {
    name: "Restaurant",
    description:
      "Web-based platform that allows users to register a user, login and select from the menu the foods to add into the cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JSON-Server",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Styled Components",
        color: "orange-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/Equipe-8/borscht-house",
  },
  {
    name: "Biblioteka",
    description:
      "Backend project with an SQL database for user authentication, book search, borrowing, and admin controls such as user blocking and book database management",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "orange-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: biblioteka,
    source_code_link: "https://github.com/FlaviaTaynara/BiblioteKA",
  },
  {
    name: "Portfolio",
    description:
      "This is a portfolio where I can showcase some of my work experience and skills.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
      {
        name: "emailjs/browser",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/FlaviaTaynara/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
