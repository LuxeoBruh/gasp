const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()

.setColor('YELLOW')
  .setTitle('Eğlence Yardım Menüsüne Hoșgeldin')

  .setDescription(`


:white_small_square: | **${prefix}token:** = sana tokenimi veririm.
:white_small_square: | **${prefix}atatürk:** = o7.
:white_small_square: | **${prefix}avatar:** = avatarınızı gsterir.
:white_small_square: | **${prefix}id:** = istediğiniz kişinin idsini verir.
:white_small_square: | **${prefix}kaçcm:** = sen anladın orayı :D
:white_small_square: | **${prefix}kralol:** = kral olursun.
:white_small_square: | **${prefix}kedi:** = kedi gif.
:white_small_square: | **${prefix}salak:** = salak gif atar :D.
:white_small_square: | **${prefix}yapımcım:** = yapımcımı gösterir.
:white_small_square: | **${prefix}aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir.
:white_small_square: | **${prefix}espri:** = espiri yaparsınız.
:white_small_square: | **${prefix}lafat:** = Bot laf atar.
:white_small_square: | **${prefix}türk:** = Bot türkiye gifi gösterir.
:white_small_square: | **${prefix}ara155:** = 155'i arasınız.
:white_small_square: | **${prefix}yazankazanır:** = ilk yazan kazanır :D

💥Bağlantılar 
**»** [Yapımcıyla iletişim](https://linktr.ee/gaaasp)
`)
.setImage("https://media.tenor.com/D55R-SuFKGgAAAAC/kids-goku-peace.gif")

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["eğlence"]

}

exports.help = {

  name: 'eğlence',
  description: 'eğlence Menüsünü Açar',
  usage: 'eğlence'

}