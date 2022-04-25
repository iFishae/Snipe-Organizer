/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "tutorial",
  description: "How to get an Imgur Code",

  async run(message, args, client) {
    const imgurEmbed = new Discord.MessageEmbed()
      .setTitle("How to create an imgur code")
      .addFields(
        { name: `Step 1.`, value: `Go to https://imgur.com/upload and choose your snipes.` },
        { name: `Step 2.`, value: `Click Grab Link`},
        { name: `Step 3.`, value: `Copy the Link`},
        { name: `Step 4.`, value: `Take the code out of the last part of the url (imgur.com/a/codehere)`},
        { name: `Step 4.`, value: `Paste the code at the end of your snipe submittion!`}
        )
      .setImage("https://cdn.discordapp.com/attachments/952783782400909345/962952153079644180/unknown.png")

      message.reply({ embeds: [imgurEmbed] });
  }
})