/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "status",
  description: "sets bot status",

  async run(message, args, client) {
    if (message.author.id !== '698331475359170640') return message.reply(`You cannot use this command!`)
    if (message.author.id !== '698331475359170640') return message.reply(`You cannot use this command!`)
    message.channel.send(`Status Updated`)
    const arrayOfStatus = [
        `with Snipers`,
      ];
  
      let index = 0;
      setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, { type: 'PLAYING' });
        index++;
      }, 3000)
    }
  })