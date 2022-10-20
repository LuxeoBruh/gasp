const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://media1.giphy.com/media/wkW0maGDN1eSc/giphy.webp?cid=ecf05e47w4staq7slvsbcydesygj7gqmnlyx7yo5nosx9x9g&rid=giphy.webp&ct=g","https://media1.giphy.com/media/6U47YlEnJQNeb05Csh/200w.webp?cid=ecf05e47w4staq7slvsbcydesygj7gqmnlyx7yo5nosx9x9g&rid=200w.webp&ct=g","https://media2.giphy.com/media/4ilFRqgbzbx4c/giphy.webp?cid=ecf05e47w4staq7slvsbcydesygj7gqmnlyx7yo5nosx9x9g&rid=giphy.webp&ct=g","https://media3.giphy.com/media/eSwGh3YK54JKU/200.webp?cid=ecf05e47w4staq7slvsbcydesygj7gqmnlyx7yo5nosx9x9g&rid=200.webp&ct=g"];
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Anime Gif ;")
.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);



};



exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['gif-anime','anime-gif','gifanime','animegif'],
  permLevel: 0

};

exports.help = {



  name: 'anime',
  description: 'anime',
  usage: 'anime'

};