import mongoose from "mongoose";

export const connectionDB = () => {
  try {
    console.log(process.env.MONGO_DB);
    mongoose.connect(process.env.MONGO_DB);
    console.log("MONGO DB KALKTI");
  } catch (error) {
    console.log(error);
  }
};
