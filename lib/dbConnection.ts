import mongoose from "mongoose";

const connection: { isConnected?: boolean } = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB as string);
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
    console.log("Error connecting to DB", error);
    throw new Error("Error connecting to DB");
  }
};
