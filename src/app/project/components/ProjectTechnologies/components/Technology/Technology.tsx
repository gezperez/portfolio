import { Tech } from "@/types";
import Image from "next/image";

type TechnologyProps = {
  technology: Tech;
};

const Technology = ({ technology }: TechnologyProps) => {
  const { icon, name } = technology;

  const width = global.window && window.innerWidth;

  const height = global.window && window.innerHeight;

  return (
    <div
      className="flex flex-col justify-between items-center"
      style={{
        height: height / 6,
      }}
    >
      <Image alt={name} src={icon} className="aspect-square" width={120} />
      <div className="mt-2 text-descriptionBackground font-semibold text-lg">
        {name}
      </div>
    </div>
  );
};

export default Technology;
