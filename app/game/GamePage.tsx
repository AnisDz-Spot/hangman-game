"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GameButton from "@/components/GameButton";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "@/components/Menu";
import Image from "next/image";
import MainGame from "@/components/MainGame";
import { useGameStore } from "@/store/gameStore";
import HintPopup from "@/components/HintPopup";

const GamePage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category");
  const hint = useGameStore((state) => state.hint);
  const timer = useGameStore((state) => state.timer);
  const isWin = useGameStore((state) => state.isWin);
  const setLife = useGameStore((state) => state.setLife);
  const setElapsedTime = useGameStore((state) => state.setElapsedTime);

  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const globalLife = useGameStore((state) => state.life);
  const resetGameSettings = useGameStore((state) => state.resetGameSettings);

  const isGameActive = !isVisible && globalLife > 0 && !isWin;

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleMenuBtns = (btn: string) => {
    switch (btn) {
      case "continue":
        setIsVisible(!isVisible);
        break;
      case "new-game":
        setIsVisible(!isVisible);
        router.push("/");
        resetGameSettings();
        break;
      case "new-category":
        setIsVisible(!isVisible);
        resetGameSettings();
        router.push("/categories");
        break;
      case "quit":
        setIsVisible(!isVisible);
        resetGameSettings();
        router.push("/");
        break;
      default:
        setIsVisible(!isVisible);
        resetGameSettings();
        router.push("/");
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsVisible(false);
      };
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", () => setIsVisible(false));
    };
  }, [isVisible]);

  useEffect(() => {
    if (isGameActive && timer > 0) {
      const intervalId = setInterval(() => {
        setElapsedTime();
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timer === 0 && isGameActive) {
      setLife();
    }
  }, [isGameActive, timer, setElapsedTime]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full min-h-screen text-white py-15 text-center mx-auto px-5 lg:px-10">
      <nav className="relative grid grid-cols-3 gap-10 justify-between items-center">
        <div className="flex items-center col-span-2 lg:col-span-1 gap-4 md:gap-6">
          <GameButton
            icon="/icon-menu.svg"
            alt="Game Menu"
            position="relative"
            onClick={handleShowMenu}
          />
          <h1 className="text-[36px] lg:text-4xl font-semibold capitalize tracking-wider">
            {category}
          </h1>
        </div>
        <div
          className={`flex items-center justify-end lg:justify-center text-5xl ${
            timer <= 30 ? "text-red-500" : "text-inherit"
          }`}
        >
          {formatTime(timer)}
        </div>
        <div className="max-lg:col-span-full place-content-center flex items-center gap-4 sm:gap-10">
          <div className="relative grid grid-cols-5 w-[280px] h-8 border-8 border-white overflow-hidden rounded-full gap-0.5">
            <AnimatePresence initial={false}>
              {Array.from({ length: globalLife }).map((_, i) => (
                <motion.div
                  key={`life-${i}`}
                  className="w-full h-full bg-red-500"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    scale: 0.5,
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          <Image
            src="/icon-heart.svg"
            alt="Heart Icon"
            width={54}
            height={50}
            className="w-10 h-auto lg:w-13 max-lg:hidden"
          />
        </div>
      </nav>
      <AnimatePresence>
        {(isVisible || globalLife === 0 || isWin) && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-999">
            <Menu menuRef={menuRef} handleMenuBtns={handleMenuBtns} />
          </div>
        )}
      </AnimatePresence>
      <MainGame />
      <HintPopup hint={hint} />
    </div>
  );
};

export default GamePage;
