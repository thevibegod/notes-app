import { Express,Request, Response } from "express";
import bodyParser from "body-parser";
import noteRouter from "./modules/notes/router";
import morganMiddleware from "./MorganMiddleware";

const express = require('express');

const app : Express = express();
const port : Number = 5000;

app.use(bodyParser.json());
app.use(morganMiddleware);

app.use("/api/notes/",noteRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});