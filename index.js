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
  
  
    if(cmd === `${prefix}purge`){
    message.delete()
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you don't have a permissions to do this!");
    if(!args[0]) return message.channel.send("Please Give The Number");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`🗑 | ${message.author} Succed Cleared ${args[0]} messages.`).then(msg => msg.delete(999999));

      let bicon = bot.user.displayAvatarURL;
      let purgemod = new Discord.RichEmbed()
      .setAuthor("Log | Purge", `https://images-ext-1.discordapp.net/external/fthmtHB4VcjVNH0P_yelzxnIj208kreL34GdDZOwxBU/https/qph.ec.quoracdn.net/main-qimg-83c6de25ed91d13a4f09fb5f11ca8853`)
      .setColor("#414c56")
      .addField("Executor:", `${message.author}`, true)
      .addField("Purge:", `${args[0]}`, true)
      .setFooter("WARNING!: This bot it still on beta testing. If you have any issue or suggestion please dm Afif");

      let modlog = message.guild.channels.find(`name`, "mod-log");
      if(!modlog) return message.channel.send("Can't Find mod-log channel.");

      modlog.send(purgemod);


    })
  }
