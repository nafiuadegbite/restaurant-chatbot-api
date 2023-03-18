const express = require("express");
const { httpChat, httpGet } = require("../../controllers/chatbot.controller");

const chatRouter = express.Router();

chatRouter.get("/", httpGet).post("/", httpChat);

module.exports = { chatRouter };
