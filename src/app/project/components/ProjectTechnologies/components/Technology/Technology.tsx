import { Tech } from "@/types";
import Image from "next/image";

type TechnologyProps = {
  technology: Tech;
};

const Technology = ({ technology }: TechnologyProps) => {
  const { icon, name } = technology;

  return (
    <div>
      <Image alt={name} src={icon} width={150} />
    </div>
  );
};

export default Technology;
