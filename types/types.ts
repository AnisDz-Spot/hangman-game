type entry = {
  entry: string;
  hint: string;
};

export interface Category {
  key: string;
  label: string;
  icon: string;
  entries: entry[];
}

export interface GameData {
  categories: Category[];
}

export interface GameStore {
  life: number;
  timer: number;
  currentWord: string;
  hint: string;
  playerGuess: string[];
  category: string;
  isWin: boolean;

  decreaseLife: () => void;
  setLife: () => void;
  setTimer: () => void;
  setElapsedTime: () => void;
  setCurrentWord: (word: string) => void;
  setHint: (txt: string) => void;
  setPlayerGuess: (guess: string) => void;
  setCurrentCategory: (cat: string) => void;
  setWinGame: () => void;
  resetGameSettings: () => void;
}
