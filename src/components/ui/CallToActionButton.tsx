import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

interface AButtonProps {
  href?: string;
  className?: string;
  icon: ReactNode;
  children: ReactNode;
  download?: boolean;
}
export const AButton: FC<AButtonProps> = ({
  href,
  className,
  children,
  icon,
  download=false,
}) => {
  return (
    <motion.a
      download={download}
      href={href}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        transition: { type: "spring", stiffness: 200 },
      }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "inline-flex bg-black  rounded py-1 px-2   text-white  gap-2 items-center justify-center cursor-pointer",
        className,
      )}
    >
      {icon}
      {children}
    </motion.a>
  );
};
