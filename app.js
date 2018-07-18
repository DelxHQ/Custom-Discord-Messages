const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

    setInterval(function () {
        let messages = [
            'MESSAGE 1',
            'MESSAGE 2',
            'MESSAGE 3'
        ];

        bot.user.setPresence({
            game: {
                name: messages[Math.floor(Math.random() * messages.length)],
                type: 'PLAYING' // this can be changed between PLAYING, STREAMING, LISTENING or WATCHING
            }
        });
    }, 20 * 1000); // 20 seconds is the minimum you can go

    console.log('Bot started.');
    console.log('Signed in as ' + bot.user.username);
    console.log('/// MADE BY ZeSp ///')
});

bot.login('TOKEN HERE'); // put your token here, this can be found if you do CTRL + SHIFT + I in discord, then going to APPLICATION -> LOCAL STORAGE -> https://discordapp.com -> token (at the bottom)
