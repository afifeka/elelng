const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("***INVITE***")
    .addField("**Invite To Yours Discord!**", "Link : https://discordapp.com/api/oauth2/authorize?client_id=429589443486416906&permissions=8&scope=bot")
    .setFooter("Cmd error? plase dm @Afif_#9369 now!")
    message.channel.send(embed)
}

module.exports.help = {
  name: "invite"
}
