import express, { Request, Response, NextFunction } from "express";

import mongoose from "mongoose";
import connectDB from "./connection/connectToMongo";

import todoRoutes from "./routes/todos";

connectDB();

const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
