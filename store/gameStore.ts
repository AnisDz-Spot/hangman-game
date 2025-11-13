import { GameStore } from "@/types/types";
import { create } from "zustand";

export const useGameStore = create<GameStore>((set) => ({
  life: 5,
  timer: 180,
  currentWord: "",
  hint: "",
  playerGuess: [],
  category: "",
  isWin: false,

  setLife: () => set({ life: 0 }),
  decreaseLife: () => set((state) => ({ life: state.life - 1 })),
  setTimer: () => set({ timer: 180 }),
  setElapsedTime: () => set((state) => ({ timer: state.timer - 1 })),
  setCurrentWord: (word) => set({ currentWord: word }),
  setHint: (txt) => set({ hint: txt }),
  setPlayerGuess: (guess) =>
    set((state) => ({
      playerGuess: [...state.playerGuess, guess],
    })),
  setCurrentCategory: (cat) => set({ currentWord: cat }),
  setWinGame: () => set({ isWin: true }),
  resetGameSettings: () =>
    set({
      isWin: false,
      life: 5,
      timer: 180,
      currentWord: "",
      playerGuess: [],
      category: "",
    }),
}));
