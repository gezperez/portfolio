import Images from "@/assets/images";

type Tech = {
  name: string;
  icon: keyof typeof Images;
};

type Project = {
  position: string;
  company: string;
  description: string;
  initialDate: string;
  endDate: string;
  duration?: number;
  technologies: Tech[];
  colors: [string, string];
  image: keyof typeof Images;
};

export type { Project, Tech };
