import mongoose from "mongoose";

const Dictionary = new mongoose.Schema({
  czechW: { type: String, required: true },
  engW: { type: String, required: true },
});

export const Words =
  mongoose.models?.Words || mongoose.model("Words", Dictionary);
