"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CategoryBox = ({
  title,
  wait,
  icon,
}: {
  title: string;
  wait: number;
  icon: string;
}) => {
  const router = useRouter();

  const handleCatClick = (slug: string) => {
    router.push(`/game?category=${slug.toLowerCase()}`);
  };

  return (
    <motion.button
      onClick={() => handleCatClick(title.toLowerCase())}
      initial={{ opacity: 0, left: -600 }}
      animate={{
        opacity: 1,
        left: 0,
        transition: { duration: 1, delay: wait },
      }}
      className="group bg-linear-(--night-tom) capitalize shadow-game text-3xl p-10 rounded-[40px] flex items-center gap-4 cursor-pointer hover:scale-105 duration-200"
    >
      <span className="group-hover:transform group-hover:scale-120 duration-300 text-4xl">
        {icon}
      </span>
      {title}
    </motion.button>
  );
};

export default CategoryBox;
