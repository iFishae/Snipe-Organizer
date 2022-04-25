/** @format */

const Command = require("../Structures/Command.js");
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: "help",
  description: "Lists the Commands",

  async run(message, args, client) {
      const helpEmbed = new Discord.MessageEmbed()
      .setColor('#ff1100')
      .setTitle(`Help Command; Lists Commands`)
      .addFields(
        { name: 'Tutorial - How to Get an Imgur Code', value: `>tutorial` },
        { name: `Solos Submittion;`, value: `>submitsolos (Your Username) (SP) (imgur code)` },
        { name: `Doubles Submittion;`, value: `>submitdoubles (Your Username) (SP1) (SP2) (imgur code)`, inline: false },
        { name: `Threes Submittion;`, value: `>submitthrees (Your Username) (SP1) (SP2) (SP3) (imgur code)`, inline: false },
        { name: `Fours Submittion;`, value: `>submitfours (Your Username) (SP1) (SP2) (SP3) (SP4) (imgur code)`, inline: false },
        { name: `Key: How to Use`, value: `SP(Number) means Sniped Player.`, inline: false }
      )
      .setImage("https://cdn.discordapp.com/attachments/952783782400909345/962953582175461416/unknown.png")
  message.channel.send({ embeds: [helpEmbed] });
      }
    })