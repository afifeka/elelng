const Discord = require("discord.js");
const cpu = process.cpuUsage().system / 1024 / 1024;
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports.run = async (bot, message, args) => {
    let uptimes = (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds.\n"

    let testembed = new Discord.RichEmbed()
    .setDescription("**STATS**")
    .setColor("#00fa3d")
    .addField(":mag: | Total Server", `${bot.guilds.size} Servers!`)
    .addField(":satellite: | Total Channels", `${bot.channels.size} Channels!`)
    .addField(":busts_in_silhouette: | Total Users", `${bot.users.size.toLocaleString()} Users!`)
    .addField(":notebook_with_decorative_cover: | Library", "Discord.js")
    .addField(":bulb: | CPU Usage", `${Math.round(cpu * 100) / 100}%`, true)
    .addField(":clipboard: |\ Memory Usage", `${Math.round(used * 100) / 100} MB`)
    .addField(":hourglass_flowing_sand: | Uptime", uptimes)
    .setFooter("This Command Has Released")

    message.channel.send(testembed);

}

module.exports.help = {
  name: "stats"
}
