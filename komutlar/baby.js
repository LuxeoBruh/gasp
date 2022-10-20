const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = [""]
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Baby Gif ;")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result]);

message.channel.send(gifembed);



};

exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['gif-baby','baby-gif','gifbaby','babygif'],
  permLevel: 0

};

exports.help = {



  name: 'baby',
  description: 'baby',
  usage: 'baby'

};