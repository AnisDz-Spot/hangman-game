import { motion } from "framer-motion";

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const Keyboard = ({
  checkLetterExistance,
}: {
  checkLetterExistance: (char: string) => void;
}) => {
  const handleLetterClick = (element: HTMLButtonElement) => {
    element.disabled = true;
    checkLetterExistance(element.innerText);
  };

  return (
    <main className="w-full grid grid-cols-9 gap-6">
      {alphabet.map((char, i) => (
        <motion.button
          key={i}
          id={`${char}-${i}`}
          initial={{ opacity: 0, left: -220 }}
          animate={{
            opacity: 1,
            left: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
          }}
          onClick={(e) => handleLetterClick(e.target as HTMLButtonElement)}
          className="w-28 h-22 bg-white disabled:bg-white/20 text-blue-800 font-semibold text-3xl rounded-2xl flex items-center justify-center cursor-pointer disabled:cursor-not-allowed active:hover:bg-blue-800 active:hover:text-white hover:scale-115 disabled:hover:scale-none duration-200"
        >
          {char}
        </motion.button>
      ))}
    </main>
  );
};

export default Keyboard;
