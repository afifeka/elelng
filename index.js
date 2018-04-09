const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const cpu = process.cpuUsage().system / 1024 / 1024;
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const ms = require("ms");
const YTDL = require("ytdl-core");

const bot = new Discord.Client({disableEveryone: false});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":warning: **| Please Tag Player To Be Kicked!**");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":negative_squared_cross_mark: **| You Dont Have Permission To Do This!**");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":negative_squared_cross_mark: **| Failed To Kicked This Person!**");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**KICKED**")
    .setColor("#f80a0a")
    .addField(":bust_in_silhouette: | Player Kicked", `**${kUser} | ID ${kUser.id}**`)
    .addField(":bust_in_silhouette: | Kicked By", `**<@${message.author.id}> | ID ${message.author.id}**`)
    .addField(":no_entry: | Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("No Named Channel `mod-log`.");

    message.guild.member(kUser).kick(kReason);
    
    message.delete().catch(O_o=>{});
    message.channel.send(":white_check_mark:  | **Succes Kicked Players**")
    kickChannel.send(kickEmbed);

    return;
  }
