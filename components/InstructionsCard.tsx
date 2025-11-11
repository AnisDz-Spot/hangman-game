"use client";

import { motion } from "framer-motion";

const InstructionsCard = ({
  title,
  desc,
  index,
  wait,
}: {
  title: string;
  desc: string;
  index: number;
  wait: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, top: -250, scale: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        top: 0,
        transition: { duration: 1.5, delay: wait, ease: "easeOut" },
      }}
      className="relative bg-white flex flex-col gap-10 max-lg:gap-8 max-md:gap-5 px-12 max-lg:px-8 py-15 max-md:py-12 rounded-[40px]"
    >
      <p className="text-blue-500 text-7xl max-lg:text-5xl font-bold">
        0{index}
      </p>
      <h3 className="text-blue-900 text-3xl max-lg:text-2xl font-semibold">
        {title}
      </h3>
      <p className="text-lavender text-xl max-lg:text-lg">{desc}</p>
    </motion.div>
  );
};

export default InstructionsCard;
