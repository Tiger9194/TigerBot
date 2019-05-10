const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
  if (message.author.bot) return;
  const array = message.content.split(' ');
  const command = array[0];
  const args = array.slice(1);
  if (!command.startsWith('!')) return;

  switch (command) {
    default:
      message.channel.send('Error 404');
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
Tiger Mod Commands
!ping Client ping
!kick [user] [reason] Kicks a user with reason
!ban [user] [reason] Bans a user with reason
!roll Randomly rolls a dice
!Help Brings up this command menu
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
case '!say':
if(message.content.startsWith('!'+'say'){
try
{
message.channel.send(args);
console.log(`[Command] Say command ran`);
}
catch(error)
{
console.log(`[Command] Say command ran with an error. `);
}
}

});
client.login("YourTokenGoesHere
");
