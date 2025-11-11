import { useGameStore } from "@/store/gameStore";
import { motion } from "framer-motion";

interface MenuProps {
  menuRef: React.RefObject<HTMLDivElement | null>;
  handleMenuBtns: (btnType: string) => void;
}

const Menu = ({ menuRef, handleMenuBtns }: MenuProps) => {
  const globalLife = useGameStore((state) => state.life);
  const isWin = useGameStore((state) => state.isWin);

  return (
    <motion.div
      initial={{ top: -600 }}
      animate={{ top: 0, transition: { duration: 0.8 } }}
      exit={{
        top: -600,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
      }}
      className="w-screen h-screen overflow-hidden flex justify-center items-center bg-[#12436588] absolute left-0 top-0 z-100"
    >
      <motion.div
        key="menu"
        ref={menuRef}
        initial={{ top: "-100vh" }}
        animate={{
          top: "0",
          transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
        }}
        exit={{
          top: "150vh",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        className="relative max-sm:w-[80vw] w-[600px] h-[500px] py-8 rounded-[72px] flex flex-col justify-center gap-4 items-center bg-linear-(--night-tom) shadow-[inset_0_-8px_0_4px_#140e66,inset_0_6px_0_9px_#2463ff] z-10"
      >
        <h3 className="text-[78px] font-bold text-white drop-shadow-[0_5px_15px_#000]">
          {isWin ? "Winner 🎉" : globalLife === 0 ? "Loser 😭" : "Paused"}
        </h3>
        {globalLife > 0 && !isWin ? (
          <button
            onClick={() => handleMenuBtns("continue")}
            className="bg-blue-500 hover:bg-blue-600 duration-200 text-white text-2xl px-12 py-4 rounded-[40px] shadow-[inset_0_-2px_0_3px_rgb(20,14,102),inset_0_1px_0_6px_rgb(60,116,255)] cursor-pointer"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => handleMenuBtns("new-category")}
            className="bg-blue-500 hover:bg-blue-600 duration-200 text-white text-2xl px-12 py-4 rounded-[40px] shadow-[inset_0_-2px_0_3px_rgb(20,14,102),inset_0_1px_0_6px_rgb(60,116,255)] cursor-pointer"
          >
            New Game
          </button>
        )}
        {globalLife > 0 && !isWin && (
          <button
            onClick={() => handleMenuBtns("new-category")}
            className="my-5 bg-blue-500 hover:bg-blue-600 duration-200 text-white text-2xl px-12 py-4 rounded-[40px] shadow-[inset_0_-2px_0_3px_rgb(20,14,102),inset_0_1px_0_6px_rgb(60,116,255)] cursor-pointer"
          >
            New Category
          </button>
        )}
        {globalLife > 0 && !isWin && (
          <button
            onClick={() => handleMenuBtns("quit")}
            className="bg-pink-600 hover:bg-[rgb(199,21,133)] duration-200 text-white text-2xl px-12 py-4 rounded-[40px] shadow-[inset_0_-2px_0_3px_rgb(20,14,102),inset_0_1px_0_6px_rgb(255,20,147)] cursor-pointer"
          >
            Quit Game
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Menu;
