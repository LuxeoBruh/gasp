const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



let replies = ["https://thumbs.gfycat.com/VeneratedHoarseBarebirdbat-size_restricted.gif","https://img.webme.com/pic/g/giflerderyasi/18.gif","https://media.tenor.com/ZQ98ZRr_c68AAAAC/dog-play.gif","https://c.tenor.com/9kmaECKIx4cAAAAC/kuvet-banyo.gif","https://media.tenor.com/ZhfMGWrmCTcAAAAM/cute-kitty-best-kitty.gif","https://media.tenor.com/S32ZfhsF65oAAAAd/cute-love.gif","https://media.tenor.com/609ISt84COwAAAAd/funny-animals-cats.gif","https://media.tenor.com/xJ0Gdn_ZxMcAAAAd/cute-animals-dog.gif","https://media.tenor.com/8iVuA_QQmfoAAAAM/cute-cute-cat.gif","https://media.tenor.com/uDQjYWStzGQAAAAM/cute-funny-animals.gif","https://media.tenor.com/sTLtxR40RAwAAAAM/happymonday-cute.gif","https://media.tenor.com/GhJM_yIMd6AAAAAM/dog-tiger.gif","https://media.tenor.com/KSSvty1vP1MAAAAM/puppy-animal.gif","https://media.tenor.com/lhP24j2BooQAAAAM/bunny-flop.gif"];
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