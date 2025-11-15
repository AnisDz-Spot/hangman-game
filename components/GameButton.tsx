"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface GameButtonProps {
  icon: string;
  alt: string;
  iconStyle?: string;
  link?: string;
  position?: string;
  onClick?: () => void;
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
      onClick();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <button
      onClick={handleBtnNav}
      className={`${position} left-0 w-14 h-14 lg:w-16 lg:h-16 bg-[linear-gradient(#fe71fe,#7199ff)] 
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
        className={iconStyle || "w-7 h-auto"}
      />
    </button>
  );
};

export default GameButton;
