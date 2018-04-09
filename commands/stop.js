const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.channel.send("💿 **| Music Has Stopped!**")
   return; 

}

module.exports.help = {
  name: "stop"
}
