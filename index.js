require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  var techMess = [
    "I don't believe you",
    "No you didn't",
    "That's a lie, you didn't tech",
  ]
  var advice = [
    "skip neutral at all costs",
    "breathe",
    "just block",
    "just win :^)",
    "no matter what, make sure you’re having fun. Whether you’re good or you’re trash, there’s no reason to be playing if you’re not enjoying yourself.",
    "make sure you stay hydrated and stretch",
    "relax and have fun!"
  ]
  var excuses = [
    "your game crashed",
    "your hands just broke",
    "your controller broke",
    "your game was laggy",
    "your character just isn't good",
    "you lost fair and square",
  ]

  if (msg.content.startsWith("!input")) {
    var input = msg.content.toUpperCase().substring(7);
    var res = input.replace(/QCF/g, 236);
    res = res.replace(/QCB/g, 214);
    res = res.replace(/ST./g, 5);
    res = res.replace(/ST/g, 5);
    res = res.replace(/CR./g, 2);
    res = res.replace(/CR/g, 2);
    res = res.replace(/HCB/g, 63214);
    res = res.replace(/HCF/g, 41236);
    res = res.replace(/XX/g, '');
    msg.channel.send(res);

  } 
  else if (RegExp('\\b'+ "I TECHED" +'\\b').test(msg.content.toUpperCase())) {
    var ran = Math.random() * 2
    //msg.reply(advice[Math.floor(ran)]);
    msg.channel.send(techMess[Math.floor(ran)])
  } 
  else if(msg.content.startsWith("!advice")) {
    var ran = Math.random() * 7
    msg.reply(advice[Math.floor(ran)]);
  } 
  else if(msg.content.startsWith("!excuses")) {
    var ran = Math.random() * 5
    msg.reply(excuses[Math.floor(ran)]);
  }
  else if(msg.content.startsWith("!notation")) {
    msg.reply("https://imgur.com/a/Qmew86k")
  }
});
 