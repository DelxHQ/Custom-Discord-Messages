const { TOKEN, TYPE, URL } = require ('./config');
const messages = require('./messages.json')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

    setInterval(function () {
        const randMsg = Math.floor(Math.random() * messages.Messages.length);
        bot.user.setPresence({
            game: {
                name: messages[randMsg],
                url: URL, 
                type: TYPE
            }
        });
    }, 20 * 1000); // 20 seconds is the minimum you can go

    console.log('Bot started.');
    console.log('You have been signed in as ' + bot.user.username);
    console.log('This was made by ZeSp');
});

bot.on('reconnecting', () => console.log('Reconnecting to DiscordAPI'));

bot.login(TOKEN);