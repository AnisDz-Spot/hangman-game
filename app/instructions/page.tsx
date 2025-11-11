import GameHeader from "@/components/GameHeader";
import InstructionsCard from "@/components/InstructionsCard";

const InstructionsPage = () => {
  const instrcutions = [
    {
      wait: 0,
      title: "Choose a category",
      desc: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      wait: 0.3,
      title: "Guess letters",
      desc: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      wait: 0.5,
      title: "Win or lose",
      desc: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];

  return (
    <div className="w-[80vw] max-lg:w-[90vw] text-white py-15 text-center mx-auto">
      <GameHeader title="How to Play" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-lg:gap-6 mt-16">
        {instrcutions.map((item, i) => (
          <InstructionsCard
            key={i}
            wait={item.wait}
            title={item.title}
            desc={item.desc}
            index={i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructionsPage;
