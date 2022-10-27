const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [];
let result = Math.floor((Math.random() * replies.length));

let videoembed = new Discord.MessageEmbed()

.setTitle("Sorumluluk bana ait değil ;")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);
message.channel.send(videoembed);



};



exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['shitpost'],
  permLevel: 0



};

exports.help = {
  name: 'shitpost',
  description: 'cok tehlikeli',
  usage: 'shitpost'


};