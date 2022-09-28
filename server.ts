import express from "express";
import process from "process";
import route from "./routes";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth } from "./src/config";

const app = express();

mongoose.connect(auth.mongoConnect)
  .then(() => {
    app.emit("redy");
  })
  .catch((err) => console.log(err));

const sessionOptions = session({
  secret: "hfa",
  store: MongoStore.create({ mongoUrl: auth.mongoConnect}),
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
