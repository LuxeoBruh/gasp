const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const mrt = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Yapımcım : <@956989487001518090>")
    .setFooter("") ///İd nizi yukarı tarafa yazın
    .setImage("https://media.tenor.com/NnNJ-1aMBogAAAAC/luffy.gif")
  message.channel.send(mrt);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};