const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')
require('dotenv/config')


mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('executando')
    app.emit("prontoo")
})
  .catch( err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);

const sessionOptions = session({
    secret: 'hfd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
})
app.use(sessionOptions)
app.use(flash())


app.on("prontoo", () => {
    app.listen(3000, () => {
        console.log("Servidor executando em http://localhost:3000/");
      });
})  


