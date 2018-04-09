const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if (args[0] == "help") {
      message.reply(":warning: | \nUsage: !addrole [user] [role]");
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return errors.cantfindUser(message.channel);
    let role = args.join(" ").slice(22);
    if (!role) return message.reply(":bust_in_silhouette: | Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply(":bust_in_silhouette: | Roles Not Found!");
  
    if (rMember.roles.has(gRole.id)) return message.reply("✅ | They Hlready Have That Role!");
    await (rMember.addRole(gRole.id));
  
    try {
      await rMember.send(`Congrats, You Have Been Given The Role ${gRole.name}`)
    } catch (e) {
      console.log(e.stack);
      message.channel.send(`:tada: | Congrats To <@${rMember.id}>, They Have Been Given The Role ${gRole.name}`)
    }
}

module.exports.help = {
  name: "addrole"
}
