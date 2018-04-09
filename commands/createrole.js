const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":warning: | You Do Not Have Permission To Create Roles!");
    const name = message.content.split(' ').slice(1).join(' ');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I do not have permission to create roles!");
    message.guild.createRole({
    name: `${name}`
    })
    message.channel.send(`:white_check_mark: | Created Role ${name}!`)
}

module.exports.help = {
  name: "createrole"
}
