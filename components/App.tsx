"use client";

import { useCallback, useState } from "react";
import RandomWord from "./RandomWord";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TWord } from "@/types";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { GiCheckMark } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa6";
import { getWord } from "@/lib/actions";

interface IProps {
  words: TWord;
}

const App = ({ words }: IProps) => {
  const [wordsToGuess, setWordsToGuess] = useState<TWord>(words);
  const [isSelectedEng, setIsSelectedEng] = useState<boolean>(true);
  const [result, setResult] = useState<"correct" | "false" | undefined>(
    undefined
  );

  const changeLanguage = useCallback(() => {
    setIsSelectedEng((prev) => !prev);
  }, []);

  const getNewWord = async () => {
    const words = await getWord();
    setWordsToGuess(words);
  };

  const checkAnswer = (formData) => {
    const query = formData.get("answer");
    if (isSelectedEng && wordsToGuess.czechW.toLowerCase() === query) {
      setResult("correct");
      setTimeout(() => setResult(undefined), 500);
      getNewWord();
    }

    if (isSelectedEng && wordsToGuess.czechW.toLowerCase() != query) {
      setResult("false");
      setTimeout(() => setResult(undefined), 1500);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-4 flex gap-4">
        <Switch id="language" onClick={changeLanguage} />
        <Label htmlFor="language">
          {isSelectedEng ? "ENG to CZK" : "CZK to ENG"}{" "}
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <RandomWord
          word={isSelectedEng ? wordsToGuess.engW : wordsToGuess.czechW}
        />
        <div className="h-4">
          {result === "correct" && <GiCheckMark className="text-green-700" />}
          {result === "false" && (
            <div className="flex">
              <FaSkullCrossbones className="text-red-700" />
              <p>Wrong !</p>
            </div>
          )}
        </div>
      </div>

      <form
        action={checkAnswer}
        className="flex flex-col justify-center items-center gap-4"
      >
        <Input name="answer" className="my-2" autoComplete="off" />

        <div className="flex gap-4">
          <Button className="cursor-pointer"> další </Button>
          <Button type="submit" className="cursor-pointer">
            odpověď
          </Button>
        </div>
      </form>

      <div className="flex flex-col w-30 gap-6 mt-10">
        <Button> hint </Button>
      </div>
    </div>
  );
};

export default App;
