import { Color } from "@/utils";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CgClose } from "react-icons/cg";

type CloseProjectIconProps = {
  onClose: () => void;
  index: string | null;
  isOpen: boolean;
};

const containerVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const CloseProjectIcon = ({
  onClose,
  index,
  isOpen,
}: CloseProjectIconProps) => {
  const router = useRouter();

  const handleClosePress = () => {
    onClose();
    setTimeout(
      () => router.push(`/?reset=${true}&index=${index}`, { scroll: false }),
      2000
    );
  };

  return (
    <motion.div
      onClick={handleClosePress}
      className="fixed top-10 right-10 z-[999]"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <CgClose
        style={{
          color: Color.WHITE,
        }}
        size={40}
      />
    </motion.div>
  );
};

export default CloseProjectIcon;
