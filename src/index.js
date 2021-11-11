const fs = require('fs');
const { Collection, Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const {token} = require('./config.json');


const prefix = '!';

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', interaction => {

	
	if (!interaction.content.startsWith(prefix) || interaction.author.bot) return;

	const args = interaction.content.slice(prefix.length);
    const command = args.toLowerCase();

	

	
	if (command === 'ping'){
		
		client.commands.get('ping').execute(interaction, args);
	
	}
	else if(command === 'image'){
		client.commands.get('image').execute(interaction, args);
	}

	else if(command === 'mint'){
		client.commands.get('mint').execute(interaction, args);
	}
});

client.login(token);