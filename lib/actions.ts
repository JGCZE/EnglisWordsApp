"use server";
import { connectToDb } from "./dbConnection";
import { Words } from "./models";
import resolveWords from "./resolvers/resolveWords";

export const getWord = async () => {
  connectToDb();
  const response = await Words.aggregate([{ $sample: { size: 1 } }]);

  if (!response.length) {
    throw new Error("no data");
  }

  const wordsToGuess = resolveWords(response);

  if (!wordsToGuess) {
    console.error("No worlds resolved");
    throw new Error("No words resolved");
  }

  return wordsToGuess;
};
