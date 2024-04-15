import { Link } from "@/types";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links: Link[] = [
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ezequiel-p%C3%A9rez-888629184/",
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    url: "https://github.com/gezperez",
    type: "Email",
  },
  {
    name: "Gmail",
    Icon: SiGmail,
  },
];

export default links;
