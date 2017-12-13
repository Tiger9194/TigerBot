const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
  if (message.author.bot) return
  const prefix  = '!'
  const array = message.content.split(' ');
  const command = array[0];
  const args = array.slice(1);
  if (!command.startsWith('!')) return;

  switch (command) {
    default:
      message.channel.send('Oops! I couldnt find that command');
      break;
    case '!ping':

      message.channel.send('🕒 Calculating Ping..').then(msg => {
        msg.edit(`🏓 Pong! Your ping is ${Math.round(client.ping)}ms`);
      });
      break;
    case '!kick':
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply(':warning: Missing permissions. Permission required to kick: Kick Members.');

      const person = message.guild.member(message.mentions.users.first());
      if (person === null) return message.reply(':warning: No User was Tagged!');
      message.guild.member(person).kick(args.slice(1).join(' ')).then(member => {
        message.channel.send(`:warning: ${member.user.username} has been kicked. Reason: ${args.slice(1).join(' ')}`);
      }).catch(err => {
        message.channel.send(err);
      });
      break;

      case '!ban':
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: Missing permissions. Permission required to ban: Ban Members.');

      const banperson = message.guild.member(message.mentions.users.first());
      if (banperson === null) return message.reply(':warning: No User was Tagged!');
      message.guild.member(banperson).ban(args.slice(1).join(' ')).then(member => {
          message.channel.send(`:warning: ${member.user.username} has been banned. Reason: ${args.slice(1).join(' ')}`);
      }).catch(err => {
        message.channel.send(err);
      });
      break;

      case '!help':
message.channel.send(`
:gear: Tiger Mod Commands
!ping Client ping
!kick [user] [reason] Kicks a user with reason
!ban [user] [reason] Bans a user with reason
!roll Randomly rolls a dice
!Help Brings up this command menu

Credits go to: FDD, Michael, Server Lion, Petabyte Amazing, FairPlayTTS, TheEdge, Tech-A-Tech, & jtsshieh
`)
break;

case '!roll':
if(message.content.startsWith('!'+ 'roll')){
try {
number = Math.floor((Math.random() * 6) + 1);
message.channel.send(`You rolled a ${number}! :game_die:`)
console.log(`[Command] Dice command ran`)
} catch (error) {
console.log(`[Command] Dice command ran with an error. The error ${error}`);
}
}
}

client.on("message", function(message) {

    if (!message.guild) return

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith('!')) return;

    var args = message.content.substring(prefix.length).split(" ");
    var result = args.join(' ');


try {
    if(args[0] === 'say')
    {
        if (message.author.bot) return;
        if (message.content.includes("@everyone") || message.content.includes("@here")) return;
        var msg = message.content.substr(4)
        message.channel.send(msg)
    }
  }
catch(error)
{
console.log(`[Command] Say command ran with an error. `);
}
});
});
client.login('T O K E N  G O E S  H E R E');
