// FallingRotate3D.tsx
import { motion } from "framer-motion";
import React from "react";

interface FallingRotate3DProps {
  sentences: string[];
  duration?: number; // Fall duration
  rotationSpeed?: number; // Full X-rotations per fall
  maxZ?: number; // Depth variation
  height?: string;
}

const FallingRotate3D: React.FC<FallingRotate3DProps> = ({
  sentences,
  duration = 6,
  maxZ = 300,
  height = "100vh",
}) => {
  return (
    <div
      className="relative w-full overflow-hidden bg-black text-white text-4xl font-bold"
      style={{
        height,
        perspective: 1000, // enable 3D space
      }}
    >
      {sentences.map((sentence, index) => {
        const randomLeft = `${Math.random() * 90}%`;
        const randomZ = Math.random() * maxZ;

        return (
          <motion.div
            key={index}
            className="absolute top-0 whitespace-nowrap rotate-x-180"
            style={{
              left: randomLeft,
              transformStyle: "preserve-3d",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
              transform: "rotate3d(1, 2, -1, 192deg)",
            }}
            initial={{
              y: "-20%",
              z: randomZ,
              opacity: 0,
            }}
            animate={{
              y: "120%",
              opacity: 1,
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay: (index * duration) / sentences.length,
            }}
          >
            {sentence}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FallingRotate3D;
