/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "submits",
  description: "Submit Doubles Snipe",

  async run(message, args, client) {
    
 
hypixel.getPlayer(args[2]).then(player => {
    const submitdoubles1Embed = new Discord.MessageEmbed()
        .setColor('#000001')
        .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
        .setTitle(`${args[1]}'s Doubles Snipe on ${player}`)
        .addField(`
        ${player}'s Bedwars Statistics`,`
        ${player}'s Bedwars Level: ${player.stats.bedwars.level}
        ${player}'s Winstreak: ${player.stats.bedwars.winstreak}
        ${player}'s FKDR: ${player.stats.bedwars.finalKDRatio}
        ${player}'s W/L Ratio: ${player.stats.bedwars.WLRatio}
        `)
        .setFooter({ text: `Note: If player's WS are 0, their API may be off.`})
  
    hypixel.getPlayer(args[3]).then(player => {
          const submitdoubles2Embed = new Discord.MessageEmbed()
          .setColor('#000001')
          .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
          .setTitle(`${args[1]}'s Doubles Snipe on ${player}`)
          .addField(`
          ${player}'s Bedwars Statistics`,`
          ${player}'s Bedwars Level: ${player.stats.bedwars.level}
          ${player}'s Winstreak: ${player.stats.bedwars.winstreak}
          ${player}'s FKDR: ${player.stats.bedwars.finalKDRatio}
          ${player}'s W/L Ratio: ${player.stats.bedwars.WLRatio}
          `)
          .setFooter({ text: `Note: If player's WS are 0, their API may be off.`})
          message.channel.send({ embeds: [submitdoubles1Embed, submitdoubles2Embed] });
      })
  })
    }
})