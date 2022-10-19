const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()



.setColor('RANDOM')
  .setTitle(ayarlar.botisim + 'Yardım Menüsü.')
  .setDescription(`



🎯 | ** ${prefix}eğlence:** = Eğlence komutlarını görüntersiniz.

🌌 | ** ${prefix}gif:** = Gif komutlarını görüntersiniz. (Düzgün Çalışmıyor.)

🤖 | ** ${prefix}bot:** = Botun ana komutlarını görüntersiniz.

❤️‍🔥 | ** ${prefix}davet:** = Botu sunucunuza davet edersiniz. (Çok güzel Olur🫡)


💥Bağlantılar 
**»** [Yapımcıyla iletişim](https://linktr.ee/gaaasp)
`)
.setImage("https://media4.giphy.com/media/mo2L2UIfoglzbMrEMZ/giphy.gif?cid=790b7611ccb0825253b8a1174d336ec4d161d8df036e99ce&rid=giphy.gif&ct=g")
 message.channel.send(embed)

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["help"]

}

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım'



}