"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const GameBG = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const MOBILE_BREAKPOINT = 768;

  const checkScreenSize = useCallback(() => {
    if (typeof window !== "undefined") {
      const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [checkScreenSize]);

  const imgSrc = isMobile
    ? "/background-mobile.svg"
    : "/background-desktop.svg";

  return (
    <Image
      key={imgSrc}
      src={imgSrc}
      alt="App background"
      fill
      className="object-cover absolute inset-0 z-0"
      priority
    />
  );
};

export default GameBG;
