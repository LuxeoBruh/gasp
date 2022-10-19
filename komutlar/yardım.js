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


💥Bağlantılar 
**»** [Yapımcıyla iletişim](https://linktr.ee/gaaasp)
`)


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