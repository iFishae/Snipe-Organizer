/** @format */

const Command = require("../Structures/Command.js");
const Hypixel = require('hypixel-api-reborn');
const index = require(`../index.js`);
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const hypixel = index.hypixel

module.exports = new Command({
  name: "testS",
  description: "Submit Solos Snipe",

  async run(message, args, client) {
    if (`${args[1]}` == `${args[2]}`) return message.reply('You cannot snipe yourself!');

    hypixel.getPlayer(args[2]).then(player => {
      const submitsolosEmbed = new Discord.MessageEmbed()
      .setColor('#000001')
      .setTitle(`${args[1]}'s Solos Snipe`)
      .setURL(`https://plancke.io/hypixel/player/stats/${player}#BedWars`)
      .addFields(
        { name: "`[${player.stats.bedwars.level}✫] ${player.rank} ${player}`", value: `Note: If ${player}'s WS is 0, their API may be off.` },
        { name: `Winstreak`, value: `${player.stats.bedwars.winstreak}`, inline: true },
        { name: `FKDR`, value: `${player.stats.bedwars.finalKDRatio}`, inline: true },
        { name: `Win-Loss Ratio`, value: `${player.stats.bedwars.WLRatio}`, inline: true }
      )
      .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=160`)
      
      const proofEmbed = new Discord.MessageEmbed()
      .setColor('#000001')
      .setTitle(`Proof of ${args[1]}'s Snipe`)
      .setURL(`https://imgur.com/a/${args[3]}`)
      .setFooter({ text: "If the hyperlink's link is invalid, then an imgur code was not provided."})
      

      message.channel.send({ embeds: [submitsolosEmbed, proofEmbed] });
      //client.channels.cache.get('945428392654811187').send({ embeds: [submitsolosEmbed, proofEmbed] });

    }).catch(err => message.channel.send("An Entered Player Does Not Exist!"))
  }
})