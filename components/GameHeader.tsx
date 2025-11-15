"use client";

import { motion } from "framer-motion";
import GameButton from "./GameButton";

const GameHeader = ({
  title,
  position,
}: {
  title: string;
  position: string;
}) => {
  return (
    <div className="flex items-center justify-center relative">
      <GameButton
        icon="/icon-back.svg"
        alt="Back to home icon"
        link="/"
        position={position}
      />
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1.2, ease: "easeOut" } }}
        className="lg:text-6xl text-5xl max-md:text-4xl uppercase font-bold text-center text-white"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default GameHeader;
