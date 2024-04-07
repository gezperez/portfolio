import Icons from "@/assets/icons";

type Link = {
  name: string;
  icon: keyof typeof Icons;
  url: string;
};

export default Link;
