"use client";

import Keyboard from "./Keyboard";
import { useSearchParams } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import { getWordByCategory } from "@/lib";
import { useEffect, useState, useCallback } from "react";

type wordToObject = {
  value: string;
  isChecked: boolean;
};

const MainGame = () => {
  const [wordObject, setwordObject] = useState<wordToObject[]>();
  const category: string = useSearchParams().get("category") || "countries";
  const currentWord = useGameStore((state) => state.currentWord);
  const playerGuess = useGameStore((state) => state.playerGuess);
  const setWinGame = useGameStore((state) => state.setWinGame);
  const decreaseLife = useGameStore((state) => state.decreaseLife);
  const setPlayerGuess = useGameStore((state) => state.setPlayerGuess);
  const setCurrentWord = useGameStore((state) => state.setCurrentWord);
  const setHint = useGameStore((state) => state.setHint);
  const setCurrentCategory = useGameStore((state) => state.setCurrentCategory);

  useEffect(() => {
    const word = getWordByCategory(category);
    setCurrentCategory(category);
    setCurrentWord(word.entry.toUpperCase());
    setHint(word.hint);

    const wordToObj = word?.entry
      .toUpperCase()
      .split("")
      .map((letter) => ({
        value: letter,
        isChecked: false,
      }));
    setwordObject(wordToObj);
  }, [category, setCurrentCategory, setCurrentWord]);

  const checkIfWin = useCallback(() => {
    if (!wordObject || wordObject.length === 0) return;
    const isGameWon = wordObject.every((letter) => {
      if (letter.value === " ") {
        return true;
      }
      return letter.isChecked;
    });
    if (isGameWon) {
      console.log("--- WINNER! ---");
      setWinGame();
    }
  }, [wordObject, setWinGame]);

  useEffect(() => {
    checkIfWin();
  }, [wordObject, checkIfWin]);

  const checkLetterExistance = (char: string) => {
    const charUpper = char.toUpperCase();

    if (playerGuess.includes(charUpper)) {
      return;
    }

    const isCorrectGuess = currentWord.includes(charUpper);

    setPlayerGuess(charUpper);

    if (isCorrectGuess) {
      const updatedWordObject = wordObject?.map((letter) => {
        if (letter.value === charUpper) {
          return {
            ...letter,
            isChecked: true,
          };
        }
        return letter;
      });

      setwordObject(updatedWordObject);
    } else {
      decreaseLife();
    }
  };

  return (
    <main className="relative py-20 w-full">
      <div className="flex flex-wrap gap-4 justify-center mb-20 min-h-32">
        {wordObject?.map((char, i) => (
          <p
            key={i}
            className={`w-28 h-32 ${
              char.value !== " " ? "bg-blue-800 shadow-letters" : ""
            } rounded-[40px] text-5xl grid place-items-center font-elite transition-all duration-300 ${
              char.isChecked ? "opacity-100 text-white" : "opacity-25"
            }
                        // Added margin for spaces for multi-word phrases
                        ${
                          char.value === " "
                            ? "m-4 bg-transparent shadow-none"
                            : ""
                        }`}
          >
            {char.isChecked ? char.value : null}
          </p>
        ))}
      </div>
      <Keyboard checkLetterExistance={checkLetterExistance} />
    </main>
  );
};

export default MainGame;
