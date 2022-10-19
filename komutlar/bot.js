const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()



.setColor('RANDOM')
  .setTitle('Bot Yardım Menüsü')
  .setDescription(`



:white_small_square: | **${prefix}test:** = botun çalıştığınız yada çalışmadığı söyler.
:white_small_square: | **${prefix}oylama:** = oyalma yaprsınız.
:white_small_square: | **${prefix}sunucubilgi:** = sunucuhakkında bilgi verir.
:white_small_square: | **${prefix}id:** = istediğiniz kișinin idsini atar.
:white_small_square: | **${prefix}toplamkomut:** = toplam komutu gösterir.
:white_small_square: | **${prefix}sil:** = Belirtiğiz sayıda mesajı siler.
:white_small_square: | **${prefix}yapımcım:** = Botun yapımcısını gösterir.
:white_small_square: | **${prefix}yavașmod:** = Herhangi bir kanalda slowmode açarsınız.
:white_small_square: | **${prefix}nuke:** = Bot belirtiğiniz bir kanalı silip tekrar acar.
:white_small_square: | **${prefix}bansay:** = sunucunuzda banlanan toplam sayıyı gösterir.
:white_small_square: | **${prefix}ping:** = Botun pingini gösterir.




`)



 message.channel.send(embed) 

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot"]

}

exports.help = {

  name: 'bot',
  description: 'Yardım Menüsünü Açar',
  usage: 'bot'



}