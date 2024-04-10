import { Tech } from "@/types";
import Image from "next/image";

type TechnologyProps = {
  technology: Tech;
};

const Technology = ({ technology }: TechnologyProps) => {
  const { icon, name } = technology;

  return (
    <div className="flex flex-col justify-center items-center">
      <Image alt={name} src={icon} width={80} />
      <div className="mt-2 text-descriptionBackground font-semibold text-lg">
        {name}
      </div>
    </div>
  );
};

export default Technology;
