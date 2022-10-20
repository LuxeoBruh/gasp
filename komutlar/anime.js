const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://thumbs.gfycat.com/WealthyBelovedGreatdane-max-1mb.gif","https://media.tenor.com/pF3s48bhdIsAAAAM/marin-kitagawa-anime-shy.gif","https://media.tenor.com/0znANC2b_OkAAAAM/kitagawa-marin.gif","https://www.icegif.com/wp-content/uploads/icegif-2013.gif","https://media1.giphy.com/media/jdFm2bcWlj4EUVCpc0/200w.gif?cid=82a1493b3hnfaezf2nf5e223z7ux0sxdjhzbm1mrw3xw5va9&rid=200w.gif&ct=g","https://i.pinimg.com/originals/28/28/2a/28282a80b30a0fd14089e0c6cafc0e2a.gif","https://media.tenor.com/aF0ipAtOk9cAAAAM/spy-x-family-anya.gif","https://media0.giphy.com/media/1qGaYAEAk7eOA/giphy.gif","https://data.whicdn.com/images/346773143/original.gif","https://media.tenor.com/PGXshKPAUh4AAAAM/my-dress-up-darling-anime-love.gif","https://aniyuki.com/wp-content/uploads/2021/09/aniyuki-sad-anime-gif-60.gif","https://giffiles.alphacoders.com/339/33944.gif","https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-69.gif","https://acegif.com/wp-content/uploads/gif/anime-hug-38.gif","https://img1.ak.crunchyroll.com/i/spire3/4fa3fcfec5ae856f64a5c8852335adcb1620240853_full.gif","https://i.redd.it/ovj839o79l561.gif","https://media.tenor.com/22OFS2YlhcQAAAAC/anime.gif","https://i.gifer.com/origin/2a/2ac7b98920a6c84f112a01316eb2776a_w200.gif","https://64.media.tumblr.com/056766429f5145444ea12e3be0767197/3ff9e63505c8c2be-c8/s540x810/f0d5bb4220ce4fd76dad7cd341670481eea11638.gif","https://media1.giphy.com/media/3F9duvK4t9hzW/giphy.gif","https://i.gifer.com/KNiu.gif","https://archive.org/download/AnimeChillStudying/ApikIkiGaess.gif"];
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