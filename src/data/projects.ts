import Icons from "@/assets/icons";
import Images from "@/assets/images";
import { Project } from "@/types";

const projects: Project[] = [
  {
    position: "React Native Developer",
    company: "Goalsetter",
    companyColor: "hsla(264, 100%, 37%, 1)",
    description:
      "As a contributor to Goalsetter, I played a pivotal role in the early stages of developing the application from scratch. I took charge of establishing the app's design system, including creating all components, typography styles, and illustrations used throughout the entire application. Moreover, I developed a repository that served both our mobile and web applications, housing standardized data structure types used across all features.",
    initialDate: "Sep 2021",
    endDate: "Present",
    technologies: [
      {
        name: "React",
        icon: Icons.REACT,
      },
      {
        name: "TypeScript",
        icon: Icons.TYPESCRIPT,
      },
      {
        name: "Redux",
        icon: Icons.REDUX,
      },
      {
        name: "React",
        icon: Icons.REACT,
      },
      {
        name: "TypeScript",
        icon: Icons.TYPESCRIPT,
      },
      {
        name: "Redux",
        icon: Icons.REDUX,
      },
    ],
    colors: ["hsla(264, 100%, 58%, 1)", "hsla(264, 100%, 37%, 1)"],
    image: Images.GOALSETTER,
  },
  {
    position: "React Native Developer",
    company: "LightSpeed",
    companyColor: "hsla(205, 100%, 71%, 1)",
    description:
      "During my tenure at LightSpeed, I undertook a significant project involving a crypto exchange application. In this capacity, I led the implementation of React Native best practices to elevate code quality and maintainability. I focused on optimizing performance for crucial features, guaranteeing a seamless user experience, particularly under challenging circumstances. Additionally, I took the initiative to build a scalable and reusable design system, promoting consistency and efficiency across the application's development lifecycle.",
    initialDate: "Feb 2021",
    endDate: "Sep 2021",
    technologies: [],
    colors: ["hsla(205, 100%, 71%, 1)", "hsla(205, 100%, 50%, 1"],
    image: Images.LIGHTSPEED,
  },
  {
    position: "Full Stack Developer",
    company: "Banco del Sol",
    companyColor: "hsla(18, 100%, 51%, 1)",
    description:
      "During my time at Banco del Sol, I worked as part of a dynamic full-stack team responsible for critical features such as Loans, fixed terms, and balance details within the application. My role involved developing backend functionalities and creating intuitive user interfaces for the mobile app. I actively contributed to backend development, establishing communication channels with external providers and ensuring smooth data integration. Furthermore, I took charge of implementing a backend-for-frontend solution to standardize and optimize data handling processes across both mobile and web applications.",
    initialDate: "Feb 2020",
    endDate: "Feb 2021",
    technologies: [],
    colors: ["hsla(18, 100%, 65%, 1)", "hsla(18, 100%, 51%, 1)"],
    image: Images.BANCO_DEL_SOL,
  },
  {
    position: "React Native Developer",
    company: "Reba",
    companyColor: "hsla(128, 53%, 59%, 1)",
    description:
      "During my initial role as a mobile developer at Reba, I gained invaluable experience by adhering to React Native best practices. Throughout my tenure, I played a pivotal role in the comprehensive redesign of the application, making significant contributions to the integration of key features. This experience not only honed my technical skills but also provided me with a solid foundation in mobile application development.",
    initialDate: "Feb 2019",
    endDate: "Feb 2020",
    technologies: [],
    colors: ["hsla(128, 53%, 59%, 1)", "hsla(128, 53%, 85%, 1)"],
    image: Images.REBA,
  },
  {
    position: "ReactJS Developer",
    company: "Personal Flow",
    companyColor: "hsla(193, 100%, 53%, 1)",
    description:
      "During my early tenure as a developer at Personal Flow, I began my journey in the development field by immersing myself in Agile methodologies. This experience allowed me to meticulously refine my skills in establishing and maintaining an efficient development workflow. Through hands-on practice, I gained a profound understanding of industry-standard development practices, laying a robust foundation for my career. It was during this time at Telecom that I started specializing in the React library, marking the beginning of my path towards becoming a proficient React developer.",
    initialDate: "Jun 2018",
    endDate: "Feb 2019",
    technologies: [],
    colors: ["hsla(153, 100%, 80%, 1)", "hsla(193, 100%, 53%, 1)"],
    image: Images.PERSONAL,
  },
];

export default projects;
