const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'torrent') {
    	message.reply('Úristen kalózkodós poor kid vagy,vedd meg inkább a játékot ne töltsd le torrentel!');
  	}
    client.on('message', message => {
    if (message.content === 'csaló') {
    	message.reply('NYOMORÉK CSALÓ!!!');
  	}
     client.on('message', message => {
    if (message.content === 'windows') {
    	message.reply('Majd én tudom milyen windows-t használok jó?');
  	}
     client.on('message', message => {
    if (message.content === 'macfag') {
    	message.reply('azért mert szeretem a macet??');
  	}
     client.on('message', message => {
    if (message.content === 'keh') {
    	message.reply('kehünk bele');
  	}
     client.on('message', message => {
    if (message.content === 'mpcs') {
    	message.reply('MCSP,avagy MagyarPaprikásCsirke egy hazai profi csgo scene csapat.');
  	}
     client.on('message', message => {
    if (message.content === 'béke') {
    	message.reply('nem.');
  	}
     client.on('message', message => {
    if (message.content === 'helló') {
    	message.reply('Csá.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
