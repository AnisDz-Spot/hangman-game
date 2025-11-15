import { GameData, Category } from "@/types/types";
import staticData from "@/db/data.json";

const data: GameData = staticData as GameData;

export const getCategories = (): Category[] => {
  return data.categories;
};

export const getWordByCategory = (category: string) => {
  const data = getCategories();
  const categoryData = data.filter((c) => c.key === category);
  const word =
    categoryData[0].entries[
      Math.floor(Math.random() * categoryData[0].entries.length)
    ];
  return word;
};
