import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectionDB } from "./DB/MongoDB.js";
import userRoutes from "./routes/user.js";

const app = express();

connectionDB();

//midlewares

app.use(cors());
app.use(express.json());

// ROUTER

app.use("/auth", userRoutes);

app.listen(5000, () => {
  console.log("ISTE KALKTIM");
});
