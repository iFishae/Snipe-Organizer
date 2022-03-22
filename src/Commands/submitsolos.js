/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "submitsolos",
  description: "Submit Solos Snipe",

  async run(message, args, client) {
    if (`${args[1]}` == `${args[2]}`) return message.reply('You cannot snipe yourself!')
    hypixel.getPlayer(args[2]).then(player => {
      const submitsolosEmbed = new Discord.MessageEmbed()
      .setColor('#000001')
      .setTitle(`${args[1]}'s Solos Snipe on ${player}`)
      .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
      .addField(`
      ${player}'s Bedwars Statistics`,`
      ${player}'s Bedwars Level: ${player.stats.bedwars.level}
      ${player}'s Winstreak: ${player.stats.bedwars.winstreak}
      ${player}'s FKDR: ${player.stats.bedwars.finalKDRatio}
      ${player}'s W/L Ratio: ${player.stats.bedwars.WLRatio}
      `)
      .setFooter({ text: `Note: If ${player}'s WS is 0, their API may be off.`})
      message.channel.send({ embeds: [submitsolosEmbed] });
    })
  }
})