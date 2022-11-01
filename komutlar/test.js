const discord = require('discord.js')
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply('Bot başarıyla çalışıyor! :smirk: ')
  }
  
   
message.channel.send("Bot başarıyla çalışıyor! :smirk: ")
};


exports.conf = {
  aliases: [ ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'test',
  category: 'test',
  usage: 'test',
};