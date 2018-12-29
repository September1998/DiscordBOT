const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


/////////////////////////////START


console.log('Monika - online');
const Discord = require('discord.js'); //Importando Discord.js
const bot = new Discord.Client(); //New Discord client constructor
const client = new Discord.Client(); //Discord Client
const prefix = "!"; //Prefix for comands.
const config = require("./config.json");
config.prefix //contains the prefix.
client.on('ready', () => { //Ready the client
console.log('Monika is now online'); //Logs online in console.
////////////////////////////////////////////////////////////////////

// MESSAGE UPDATED LOG  ///////////////////////////////////////////////////////////////

const { Event } = require('klasa');

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      name: 'messageUpdate',
      enabled: true,
      event: 'messageUpdate',
      once: false,
    });
  }

  run(oldMsg, newMsg) {
    if (oldMsg.content === newMsg.content || oldMsg.channel.type !== 'text' || oldMsg.author.bot) return;
    try {
      if (oldMsg.guild.configs.logMessageEdit && oldMsg.guild.configs.messageEditChannel) {
        const chan = oldMsg.guild.channels.find('id', oldMsg.guild.configs.messageEditChannel);
        if (!chan) return;
        const avatar = oldMsg.author.displayAvatarURL();
        const embed = new this.client.methods.Embed()
          .setColor(0xF6FF00)
          .setTitle('Message Edited')
          .setThumbnail(avatar)
          .setAuthor(`${oldMsg.author.tag} / ${oldMsg.author.id}`, avatar)
          .addField('Channel', oldMsg.channel)
          .addField('Old Content', oldMsg.content)
          .addField('New Content', newMsg.content)
          .setTimestamp();
        return chan.sendEmbed(embed);
      }
    } catch (error) { console.log(error); }
  }
};

// MESSAGE UPDATED LOG  ///////////////////////////////////////////////////////////////



//SERVER JOIN AUTOROLE ///////////////////////////////////////////////////////////////

});

bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Principiante");
    member.addRole(role).catch(console.error);
});

//SERVER JOIN AUTOROLE ///////////////////////////////////////////////////////////////



//PURGE MESSAGES ///////////////////////////////////////////////////////////////


bot.on("message", async message => {
if(message.author.bot) return;

if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "purge") {
     
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, indicame un numero entre 1 y 100 para entender cuantos mensajes debo eliminar.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`No puedo eliminar mensajes porque: ${error}`));
  }

});

// PURGUE MESSAGES ///////////////////////////////////////////////////////////////



// PING COMMAND ///////////////////////////////////////////////////////////////


	
// PING COMMAND ///////////////////////////////////////////////////////////////


// SAY CUSTOM MESSAGE ///////////////////////////////////////////////////////////////

bot.on('message', (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
	  }

	{}
	
  	if (message.content === '!avatar') {
        // Send the user's avatar URL
    	message.reply(message.author.avatarURL);

	}
		
		});
		
// SAY CUSTOM MESSAGE ///////////////////////////////////////////////////////////////
		

bot.on("ready", () => {
bot.user.setActivity('Florensia', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});


// KICK USER ///////////////////////////////////////////////////////////////
bot.on('message', (message) => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!expulsar"
  if (message.content.startsWith('!expulsar')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`${user.tag} ha sido expulsado de la guild`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('no tengo derechos para expulsar.');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('El usuario nombrado no está en la guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Debes mencionar al usuario que quieres expulsar!');
    }
  }

});

// KICK USER ///////////////////////////////////////////////////////////////


//CUSTOM MDOERATION SCRIPT /////////////////////////////////////////////////

/*
    Logger v0.1.0
    A bot for Discord that logs moderator actions.
    -----------------------------------------------
    Copyright © Richard Kriesman 2016.
*/


//constants
const VERSION = '0.1.1';
const CHANNEL = 'registros';


//
// Event Handlers
//

//bot is ready to start working, print status update to console
bot.on('ready', function() {
    console.log('[META][INFO] Connected to Discord API Service');
});

//bot disconnected from Discord
bot.on('disconnected', function() {
    console.log('[META][WARN] Disconnected from Discord API Service. Attempting to reconnected...');
});

//warning from Discord.js
bot.on('warn', function(msg) {
    console.log('[META][WARN] ' + msg);
});

//error from Discord.js
bot.on('error', function(err) {
    console.log('[META][ERROR] ' + err.message);
    process.exit(1);
});

//message received
//bot.on('message', function(message) {
//    if(message.author.id != bot.user.id) {
  //      if (message.channel.type == 'text')
    //        console.log('[' + message.guild.name + '][#' + message.channel.name + '][MSG] ' + message.author.username +
      //          '#' + message.author.discriminator + ': ' + formatConsoleMessage(message));
        //else if (message.channel.type == 'dm')
          //  message.channel.sendMessage('Beep boop! Lo siento, no tengo\ permitido responder mensajes directos. Solo puedo hablar desde el servidor. ' +
            //    'Por favor, contacta a mi creador para que me permita comunicarte contigo de forma privada.');
       // else if (message.channel.type == 'group')
       //     message.channel.sendMessage('Beep boop! Lo siento, no tengo\'permitido responder mensajes en grupos. Solo puedo hablar desde el servidor.\n' +
  //              'Por favor, contacta a mi creador para que me permita comunicarte con este grupo de forma privada.');
//    }
//});

//message deleted
bot.on('messageDelete', function(message) {

    if(message.channel.type == 'text') {

        //log to console
        console.log('[' + message.guild.name + '][#' + message.channel.name + '][DELMSG] ' + message.author.username +
            '#' + message.author.discriminator + ': ' + formatConsoleMessage(message));

        //post in the guild's log channel
        var log = message.guild.channels.find('name', CHANNEL);
        if (log != null)
            log.sendMessage('**[Mensaje Eliminado]** ' + message.author + ': ' + message.cleanContent);

    }

});

//message update
bot.on('messageUpdate', function(oldMessage, newMessage) {

    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {

        //log to console
        console.log('[' + newMessage.guild.name + '][#' + newMessage.channel.name + '][UPDMSG] ' +
            newMessage.author.username + '#' + newMessage.author.discriminator + ':\n\tOLDMSG: ' +
            formatConsoleMessage(oldMessage) + '\n\tNEWMSG: ' + formatConsoleMessage(newMessage));

        //post in the guild's log channel
        var log = newMessage.guild.channels.find('name', CHANNEL);
        if (log != null)
            log.sendMessage('**[Mensaje editado]** *' + newMessage.author + '*:\n*Antes:*: ' + oldMessage.cleanContent +
                '\n*Despues*: ' + newMessage.cleanContent);
    }

});


//
// Startup Sequence
//



console.log('Monika v' + VERSION);
console.log('A bot for Florensia that logs moderator actions.\n');
console.log('Copyright © September 2018. Released under the MIT license.');
console.log('----------------------------------------------');

console.log('[META][INFO] Started Monika v' + VERSION);



function formatConsoleMessage(message) {
    return message.cleanContent.replace(new RegExp('\n', 'g'), '\n\t');
}

//CUSTOM MDOERATION SCRIPT /////////////////////////////////////////////////

// CLEVERBOT //////////////////////////////////////////////////////////////

/* Getting discord.js to work.*/

// Settings
/* var id = "4887"
var clkey = "Monika"
var token = "vkYqLvU7YGsm1o99WhmhgI-e03GOnL5G"

// Cleverbot setup:
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: clkey});

/*
This will make the bot reply when it gets mentioned.
(Thanks to GeopJr for the `message.content.includes` part!)
*/
/* client.on("message", (message) => {
  if (message.content.includes(id)) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
}) */

/* Make the application able to login to your bot. */
/* client.login("NDg0NDUxNTQ5NjMyNzkwNTM4.DmiWfw.k_u5KpUVCNceIb-ia6rRJvj9Gy4"); */


// CLEVERBOT //////////////////////////////////////////////////////////////

// BAN USER ///////////////////////////////////////////////////////////////
bot.on('message', (message) => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!banear"
  if (message.content.startsWith('!banear')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`${user.tag} ha sido expulsado permanentemente`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('¡El usuario mencionado no está en la guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('debes mencionar a la persona que deseas banear!');
    }
  }
 
 // BAN USER ///////////////////////////////////////////////////////////////
});
bot.login(process.env.TOKEN);
