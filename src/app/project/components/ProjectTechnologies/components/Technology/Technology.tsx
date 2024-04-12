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
      className="flex flex-col justify-between items-center m-4 my-0"
      style={{
        height: width / 10,
        width: width / 17,
      }}
    >
      <Image alt={name} src={icon} width={width / 7} height={width / 7} />
    </div>
  );
};

export default Technology;
