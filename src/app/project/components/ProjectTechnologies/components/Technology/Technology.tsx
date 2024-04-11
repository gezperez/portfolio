import { useDeviceSize } from "@/hooks";
import { Tech } from "@/types";
import Image from "next/image";

type TechnologyProps = {
  technology: Tech;
};

const Technology = ({ technology }: TechnologyProps) => {
  const { icon, name } = technology;

  const [width, height] = useDeviceSize();

  return (
    <div
      className="flex flex-col justify-between items-center m-4"
      style={{
        height: height / 5,
      }}
    >
      <Image alt={name} src={icon} width={height / 7} height={height / 7} />
      <div className="mt-2 text-descriptionBackground font-semibold text-lg">
        {name}
      </div>
    </div>
  );
};

export default Technology;
