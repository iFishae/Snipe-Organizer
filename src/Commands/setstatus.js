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
    if (message.author.id !== 'YOUR-ID-HERE') return message.reply(`You are not the Owner! You cannot use this command!`)
    message.channel.send(`Status Updated`)
    const arrayOfStatus = [
        `with kids in my cellar.`,
      ];
  
      let index = 0;
      setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, { type: 'PLAYING' });
        index++;
      }, 300000)
    }
  })
