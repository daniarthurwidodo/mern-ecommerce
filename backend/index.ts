import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import db from "./src/utils/db/mongodb";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hi Mom!");
});

// console.log(db.dbName); // check db

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
