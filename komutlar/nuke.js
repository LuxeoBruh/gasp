const dc = require("discord.js")
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let channelp = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name)
    kanal.setParent(
    kanal.guild.channels.cache.find(channel => channel.id === channelp))
    const embed = new dc.MessageEmbed()
    .setTitle("Kanalı Patlattım! 💣")
    .setColor("ORANGE")
    .setImage("https://media2.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=ecf05e47zx1cg6kn3t2tgxxkbg835jzz9x6j18e70qqn7rqz&rid=giphy.gif&ct=g")
    z.send(embed)
    })
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }