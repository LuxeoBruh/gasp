const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



let replies = ["https://thumbs.gfycat.com/VeneratedHoarseBarebirdbat-size_restricted.gif","https://img.webme.com/pic/g/giflerderyasi/18.gif","https://media.tenor.com/ZQ98ZRr_c68AAAAC/dog-play.gif",""];
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Animal Gif ;")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);
message.channel.send(gifembed);



};



exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['gif-animal','animal-gif','gifanimal','animalgif'],
  permLevel: 0



};

exports.help = {
  name: 'animal',
  description: 'animal',
  usage: 'animal'


};