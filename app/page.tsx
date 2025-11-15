"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  const MenuContainer = (
    <motion.div
      key="main-menu"
      initial={{ top: "-100vh" }}
      animate={{ top: "0", transition: { duration: 1, ease: "easeOut" } }}
      exit={{ top: "150vh", transition: { duration: 1, ease: "easeIn" } }}
      className="relative max-sm:w-[80vw] w-[600px] h-[500px] pt-16 rounded-[72px] flex flex-col justify-center items-center bg-linear-(--night-tom) shadow-[inset_0_-8px_0_4px_#140e66,inset_0_6px_0_9px_#2463ff] z-10"
    >
      <Image
        src="/logo.svg"
        alt="Game logo"
        width={374}
        height={185}
        loading="eager"
        className="absolute top-0 max-sm:w-[250px] transform -translate-y-1/2"
      />
      <button
        onClick={() => handleNavigation("/categories")}
        className="group bg-radial-(--pink-blue) shadow-[inset_0_-4px_0_5px_#243041,inset_0_-12px_0_11px_#9d2df5] w-50 h-50 max-sm:w-40 max-sm:h-40 flex items-center justify-center rounded-full hover:opacity-90 cursor-pointer"
      >
        <Image
          src="/icon-play.svg"
          alt="Play"
          width={67}
          height={64}
          className="group-hover:transform group-hover:scale-110 duration-300"
        />
      </button>
      <button
        onClick={() => handleNavigation("/instructions")}
        className="mt-10 bg-blue-500 hover:bg-blue-600 duration-200 text-white text-2xl font-semibold px-12 py-4 rounded-[40px] shadow-[inset_0_-2px_0_3px_rgb(20,14,102),inset_0_1px_0_6px_rgb(60,116,255)] cursor-pointer"
      >
        HOW TO PLAY
      </button>
    </motion.div>
  );

  return (
    <main className="relative w-screen h-screen flex items-center justify-center overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {!isExiting && MenuContainer}
      </AnimatePresence>
    </main>
  );
}
