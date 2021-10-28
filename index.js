const discord = require('discord.js');
const client = new discord.Client();

const prefix = '-';

client.once('ready', () =>{
    console.log('MintCord is online');

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === '!ping'){
        message.channel.send('pong!');//add image drop
     } 
    else if (command == '!exit'){
        message.channel.send('exiting MintCord');
    }
    
});
