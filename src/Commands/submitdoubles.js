/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "submitdoubles",
  description: "Submit Doubles Snipe",

  async run(message, args, client) {
    if (`${args[1]}` == `${args[2]}`) return message.reply('You cannot snipe yourself!');
    if (`${args[1]}` == `${args[3]}`) return message.reply('You cannot snipe yourself!');
 
hypixel.getPlayer(args[2]).then(player => {
    const submitdoubles1Embed = new Discord.MessageEmbed()
        .setColor('#000001')
        .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
        .setTitle(`${args[1]}'s Doubles Snipe on ${player}`)
        .setURL(`https://plancke.io/hypixel/player/stats/${player}#BedWars`)
        .addFields(
        { name: `[${player.stats.bedwars.level}✫] ${player.rank} ${player}`, value: `Note: If ${player}'s WS is 0, their API may be off.` },
        { name: `Winstreak`, value: `${player.stats.bedwars.winstreak}`, inline: true },
        { name: `FKDR`, value: `${player.stats.bedwars.finalKDRatio}`, inline: true },
        { name: `Win-Loss Ratio`, value: `${player.stats.bedwars.WLRatio}`, inline: true }
        )
  
    hypixel.getPlayer(args[3]).then(player => {
          const submitdoubles2Embed = new Discord.MessageEmbed()
          .setColor('#000001')
          .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
          .setTitle(`${args[1]}'s Doubles Snipe on ${player}`)
          .setURL(`https://plancke.io/hypixel/player/stats/${player}#BedWars`)
          .addFields(
            { name: `[${player.stats.bedwars.level}✫] ${player.rank} ${player}`, value: `Note: If ${player}'s WS is 0, their API may be off.` },
            { name: `Winstreak`, value: `${player.stats.bedwars.winstreak}`, inline: true },
            { name: `FKDR`, value: `${player.stats.bedwars.finalKDRatio}`, inline: true },
            { name: `Win-Loss Ratio`, value: `${player.stats.bedwars.WLRatio}`, inline: true }
            )

            const proofEmbed = new Discord.MessageEmbed()
            .setColor('#000001')
            .setTitle(`Proof of ${args[1]}'s Snipe`)
            .setURL(`https://imgur.com/a/${args[4]}`)
            .setFooter({ text: "If there is no valid hyperlink, then an imgur code was not provided."})

          client.channels.cache.get('945428392654811187').send({ embeds: [submitdoubles1Embed, submitdoubles2Embed, proofEmbed] });
      }).catch(err => message.channel.send("An Entered Player Does Not Exist!"))
  })
    }
})