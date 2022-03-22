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
        { name: `Solos Submittion;`, value: `>submitsolos (Your Username) (SP)` },
        { name: `Doubles Submittion;`, value: `>submitdoubles (Your Username) (SP1) (SP2)`, inline: false },
        { name: `Threes Submittion;`, value: `>submitthrees (Your Username) (SP1) (SP2) (SP3)`, inline: false },
        { name: `Fours Submittion;`, value: `>submitfours (Your Username) (SP1) (SP2) (SP3) (SP4)`, inline: false },
        { name: `Key: How to Use`, value: `SP(Number) means Sniped Player.`, inline: false },
        { name: `Example:`, value: `>submittriples uwu owo iwi vwv`}
      )
  message.channel.send({ embeds: [helpEmbed] });
      }
    })