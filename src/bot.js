require("dotenv").config();
const { Telegraf } = require("telegraf");
const { config } = require("../config.js");
const botController = require("../controller/bot.controller.js");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((msg) => msg.reply("Привет епта"));
bot.on("message", (msg) => {
  const chatId = msg.message.dice;
  console.log(msg);
  if (msg.message.text == "menu") botController.openMenu(bot, chatId);
  if (msg.message.text == "cat photo") botController.getCatMem(bot, chatId);
  if (msg.message.text == "weather") botController.getWeather(bot, chatId);
  botController.closeMenu(bot, chatId);
});
bot.launch();
