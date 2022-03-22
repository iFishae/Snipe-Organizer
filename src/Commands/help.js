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
      .setColor('#000000')
      .setTitle(`Help Command; Lists Commands`)
      .addField(`Solos Submittion;`,`
      >submitsolos (Your Username) (Sniped Player)
      `)
      .addField(`Doubles Submittion;`,`
      >submitdoubles (Your Username) (Sniped Player) (Sniped Player)
      `)
      .addField(`Threes and Fours Submittion;`,`
      >submitthrees/fours (Your Username) (Sniped P1) (SP2) (SP3) (SP3) `)
      message.reply({ embeds: [helpEmbed] });
  }
})