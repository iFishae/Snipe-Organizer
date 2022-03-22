/** @format */

console.clear();

const Hypixel = require('hypixel-api-reborn');

const Client = require("./Structures/Client.js");

const Command = require("./Structures/Command.js");

const config = require("./Data/config.json");

const client = new Client();

const Discord = require('discord.js');

const hypixel = new Hypixel.Client('b7b46f7b-58e0-417e-aa8f-9a2cb32c40a5');

exports.hypixel = hypixel

const fs = require("fs");

fs.readdirSync("./src/Commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./Commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});

client.on("ready", () => console.log(`${client.user.tag} is online.`));

client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	const invalidcommandEmbed = new Discord.MessageEmbed()
		.setColor('#000000')
		.setTitle('Invalid Command!')
		.setDescription('Please do >help to use find the correct command usage!')

	if (!command) return message.reply({ embeds: [invalidcommandEmbed] });

	command.run(message, args, client);
});

client.login(config.token);
