import Images from "@/assets/images";

type Tech = {
  name: string;
  icon: keyof typeof Images;
};

type Project = {
  position: string;
  company: string;
  companyColor: string;
  initialDate: string;
  endDate: string;
  duration?: number;
  technologies: Tech[];
  colors: [string, string];
  image: keyof typeof Images;
  logo: keyof typeof Images;
  imageCorner: keyof typeof Images;
  keyPoints: string[];
  description?: string;
};

export type { Project, Tech };
