import { TWord } from "@/types";

const resolveWords = (oneWord: Array<TWord>): TWord | undefined => {
  if (Array.isArray(oneWord) && oneWord.length === 1) {
    return JSON.parse(JSON.stringify(oneWord[0]));
  }
};

export default resolveWords;
