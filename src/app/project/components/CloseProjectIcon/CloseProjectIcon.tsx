import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CgClose } from "react-icons/cg";

type CloseProjectIconProps = {
  onClose: () => void;
  index: string | null;
};

const CloseProjectIcon = ({ onClose, index }: CloseProjectIconProps) => {
  const router = useRouter();

  const handleClosePress = () => {
    onClose();
    setTimeout(() => router.push(`/?reset=${true}&index=${index}`), 2000);
  };

  return (
    <motion.div
      onClick={handleClosePress}
      className="fixed top-10 right-10 z-[999]"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <CgClose color={"#010920"} size={50} />
    </motion.div>
  );
};

export default CloseProjectIcon;
