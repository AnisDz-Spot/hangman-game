"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface GameButtonProps {
  icon: string;
  alt: string;
  iconStyle?: string;
  link?: string;
  position?: string;
  onClick?: () => void; // ✅ new prop
}

const GameButton = ({
  icon,
  alt,
  iconStyle,
  link,
  position = "absolute",
  onClick,
}: GameButtonProps) => {
  const router = useRouter();

  const handleBtnNav = () => {
    if (onClick) {
      // ✅ custom action has priority
      onClick();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <button
      onClick={handleBtnNav}
      className={`${position} left-0 w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[linear-gradient(#fe71fe,#7199ff)] 
        hover:bg-[linear-gradient(#fe71fe,#95b3fe)] 
        shadow-[inset_0_-6px_0_7px_rgb(157,45,245,0.25)] 
        rounded-full cursor-pointer 
        flex items-center justify-center transition duration-200`}
    >
      <Image
        src={icon}
        alt={alt}
        width={39}
        height={37}
        className={iconStyle || "w-auto h-auto max-lg:w-8 max-lg:h-[30px]"}
      />
    </button>
  );
};

export default GameButton;
