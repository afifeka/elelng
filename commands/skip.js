const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];

    if (server.dispatcher) server.dispatcher.end();
    message.channel.send("💿 **| Music Has Skipped!**")
    return; 
}

module.exports.help = {
  name: "skip"
}
