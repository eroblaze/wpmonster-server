import express, { NextFunction, Request, Response, Errback, ErrorRequestHandler } from "express";
import "dotenv/config";
import mongoose from "mongoose";
// Session
import session from "express-session";
import MongoStore from "connect-mongo";

import passport from "passport";

// Custom
import router from "./routes/index.js";

const app = express();

// Research this later
if (process.env.DBURI) {
  mongoose
    .connect(process.env.DBURI)
    .then(() => {
      console.log("Connected to db!");
      app.listen(process.env.PORT, () => {
        console.log(`Started listening on port ${process.env.PORT}!`);
      });
    })
    .catch((err) => {
      console.log(`Failed to Connect to DB with: ${err}`);
    });
} else throw new Error("process.env.DBURI is missing");

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    store: MongoStore.create({
      client: mongoose.connection.getClient()
    }),
    saveUninitialized: false,
    resave: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

app.use((_, res) => {
  return res.sendStatus(404);
});
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  console.error("Error!");
  return res.status(500).send(err);
});
