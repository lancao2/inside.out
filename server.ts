import express from "express";
import route from "./routes";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => {
    app.emit("redy");
  })
  .catch((err) => console.log(err));

const sessionOptions = session({
  secret: "hfa",
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_CONNECT }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);

app.use(express.json());

app.use(route);

app.on("redy", () => {
  app.listen(2001, () => "server is running on port 2001");
});
