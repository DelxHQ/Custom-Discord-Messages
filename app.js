const { TOKEN, TYPE } = require ('./config');
const messages = require('./messages.json')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    setInterval(function () {
        randMsg = messages.statuses[Math.floor(Math.random() * messages.statuses.length)];
        bot.user.setPresence({
            game: {
                name: randMsg,
                url: 'https://twitch.tv/Dogle601', 
                type: TYPE
            }
        });
    }, 20 * 1000); // 20 seconds is the minimum you can go
    console.log('You have been signed in as ' + bot.user.username);
});

bot.on('reconnecting', () => console.log('Reconnecting to Discord API'));
bot.login(TOKEN);