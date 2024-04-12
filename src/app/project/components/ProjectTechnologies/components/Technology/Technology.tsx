import { useDeviceSize } from "@/hooks";
import { Tech } from "@/types";
import Image from "next/image";

type TechnologyProps = {
  technology: Tech;
};

const Technology = ({ technology }: TechnologyProps) => {
  const { icon, name } = technology;

  const { dimensions } = useDeviceSize();

  const width = dimensions.width;

  return (
    <div
      className="flex flex-col justify-between items-center"
      style={{
        height: width / 20,
        width: width / 24,
      }}
    >
      <Image alt={name} src={icon} width={width / 7} height={width / 7} />
    </div>
  );
};

export default Technology;
