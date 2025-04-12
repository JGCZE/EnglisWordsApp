"use client";

import { useCallback, useState } from "react";
import RandomWord from "./RandomWord";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TWord } from "@/types";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface IProps {
  words: TWord;
}

const App = ({ words }: IProps) => {
  const [wordToGuess] = useState(words);
  const [selectedLanguage, setSelectedLanguage] = useState(true);

  const changeLanguage = useCallback(() => {
    setSelectedLanguage((prev) => !prev);
  }, []);

  return (
    <div>
      <div className="my-4 flex gap-4">
        <Switch id="language" onClick={changeLanguage} />
        <Label htmlFor="language">
          {selectedLanguage ? "ENG to CZK" : "CZK to ENG"}{" "}
        </Label>
      </div>
      <RandomWord word={wordToGuess} />
      <Input />
      <Button> odpověď </Button>
      <Button> hint </Button>
    </div>
  );
};

export default App;
