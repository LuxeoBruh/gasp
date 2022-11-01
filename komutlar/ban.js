module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("BAN_MEMBERS"))
    return message
      .channel.send({ content: "> :x: **Başarısız!** Ban yetkin yok." })
      .catch((err) => {});
  if (!message.guild.me.permissions.has("BAN_MEMBERS"))
    return message
      .channel.send({ content: "> :x: **Başarısız!** Benim ban yetkim yok"})
      .catch((err) => {});

  let sebep = args.slice(1).join(" ") || "Belirtilmemiş";

  let member;
  let member1 = message.mentions.members.first();
  let member2 = message.guild.members.cache.get(args[0]);
  if (member1) {
    member = member1.id;
  }
  if (member2) {
    member = member2.id;
  }
  if (!member1 && !member2) {
    member = args[0];
  }

  if (!member)
    return message
      .channel.send({
        content: "> :x: **Başarısız!** Kullanıcı istiyorum ben, bana açım açım."
      })
      .catch((err) => {});

  let kullanıcı = message.guild.members.cache.get(member);

  if (kullanıcı) {

    if (message.guild.owner.id === member)
      return message
        .channel.send({
          content: "> :x: **Başarısız!** Sunucu sahibini banliyamazsın"
        })
        .catch((err) => {});
    if (message.author.id === member)
      return message
        .channel.send({
          content: "> :x: **Başarısız!**"
        })
        .catch((err) => {});
    if (client.user.id === member)
      return message
        .channel.send({
          content: "> :x: **Başarısız!** Beni mi banlıyacaksın :("
        })
        .catch((err) => {});

    if (message.guild.owner.id !== message.author.id) {
      if (kullanıcı.roles.highest.position >= message.member.roles.highest.position)
        return message
          .channel.send({
            content: "> :x: **Başarısız!** kullanıcının rolü senden yüksek"
          })
          .catch((err) => {});
    }

    if (kullanıcı.roles.highest.position >= message.guild.me.roles.highest.position)
      return message
        .channel.send({
          content: "> :x: **Başarısız!** Kullanıcının rolü benim rolümden yüksek."
        })
        .catch((err) => {});
  }

  message.guild.members
    .ban(member, {
      days: 7,
      reason: `By: ${message.author.tag} Reason: ` + sebep || "Belirtilmemiş",
    })
    .then(() => {
      message.channel.send({
        content: `> ✅ **Başarılı!** Kullanıcı başarıyla sunucudan banlandı!`
      });
    })
    .catch((e) => {
      message
        .channel.send({
          content: `> :x: **Başarısız!** Kullanıcıyı sunucudan banlarken hata aldım. \n**Hata:** \`\`\`${e.name + ": " + e.message}\`\`\``,
        })
        .catch((err) => {});
    });

};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "ban"
};