const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
    if (!args[1]) {
        message.channel.send("💿 **| Plase Give Link On Youtube Music!**")
        return;
      }
  
      if (!message.member.voiceChannel) {
        message.channel.send("💿 **| Plase Join A Voice Channel!**")
        return;
      }
  
      if (!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
      };
  
      var server = servers[message.guild.id];
  
      server.queue.push(args[1]);
  
      if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message)
        message.delete().catch(O_o=>{});
        message.channel.send(`💿 **| Now Playing ${args[1]} !**`);
      });
}

module.exports.help = {
  name: "play"
}
