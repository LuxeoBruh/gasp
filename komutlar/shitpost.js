const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://yt3.ggpht.com/qT1R6muMdZv158JCQX7HCKXpNsxijYRQSjy_5h7-doYCCWYob3C06QA9rvYecX1JRisX-8-OWoYgMA=s640-nd-v1","https://cdn.discordapp.com/attachments/910255119642284072/1034941110566535359/301993737_464237818931738_6999490214426197358_n.mp4"]

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Aeroix Shitpost")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result])



message.channel.send(gifembed);


};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['shitpost'],
  permLevel: 0



};

exports.help = {


  name: 'shitpost',
  description: 'erkekler coktan anladi bile',
  usage: ''


};