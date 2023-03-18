const express = require("express");
const { chatRouter } = require("./chatbot/chatbot.router");

const api = express.Router();

api.use("/chat", chatRouter);

module.exports = { api };
