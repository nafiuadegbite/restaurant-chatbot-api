const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const { api } = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(express.static("client"));
app.use(express.json());
app.use(morgan("combined"));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/api/v1", api);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

module.exports = { app };
