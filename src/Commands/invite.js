/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "invitelink",
  description: "Link for bot Invitation Command",

  async run(message, args, client) {
    if (message.author.id !== '698331475359170640') return message.reply(`You cannot use this command!`)
    if (message.author.id !== '698331475359170640') return message.reply(`You cannot use this command!`)
    const inviteEmbed = new Discord.MessageEmbed()
        .setTitle('Invite Link')
        .setURL(`https://discord.com/oauth2/authorize?client_id=952781260361715723&scope=bot&permissions=8`)
        .setColor("RANDOM")
        .setTimestamp()
    message.reply({ embeds: [inviteEmbed] })
  }
})