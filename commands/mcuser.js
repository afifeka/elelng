const Discord = require('discord.js');
const got = require('got');
const cheerio = require('cheerio')
const prefixes = require('../prefixes.json');
const MojangAPI = require('mojang-api')

exports.run = async (bot, message) => {
  		const args = message.content.split(" ");
  	
         if (!args[1]) {
  message.channel.send('***Please, Enter Minecraft Username!***');
  return;
}
const username = args[1]
async function getShortUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[2];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}

async function getLongUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[1];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}





const shortuuid = await getShortUUID(username);
const longuuid = await getLongUUID(username);
 if (!shortuuid && !longuuid) {
  message.channel.send(`**The Username ***${username}*** Is Not Taken!**`);
  return; 
 }

 


 

MojangAPI.nameHistory(`${shortuuid}`, function(err, res) {
	    if (err)
        console.log(err);
            var lastName = res[res.length - 2];
            var lastName2 = res[res.length - 3];
            
            var lastName4 = res[res.length - 5];
            var lastName5 = res[res.length - 6];
            var lastName6 = res[res.length - 7];
            var lastName7 = res[res.length - 8];
            var lastName8 = res[res.length - 9];
            
         if (!lastName)
         {
         	var embed = new Discord.RichEmbed()
.setTitle("**Information Minecraft Player!**")
.setColor(0x196026)
.setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
.addField(":bust_in_silhouette: | Username", username)
.addField(":shield: | Short UUID", `\`${shortuuid}\``)
.addField(":shield: | Long UUID", `\`${longuuid}\``)
.addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
.addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
return message.channel.send({ embed: embed })
         }
         if (!lastName2)
         {
         	           var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
         	         	var embed = new Discord.RichEmbed()
.setTitle("**Information Minecraft Player!**")
.setColor(0x196026)
.setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
.addField(":bust_in_silhouette: | Username", username)
.addField(":shield: | Short UUID", `\`${shortuuid}\``)
.addField(":shield: | Long UUID", `\`${longuuid}\``)
.addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
.addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
return message.channel.send({ embed: embed })
         }
         var lastName3 = res[res.length - 4]; 
         if (!lastName3)
         {
         	         	           var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
         	var embed = new Discord.RichEmbed()
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("Oops! This embed is too long!")
         }
            if (!lastName4)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
         	var embed = new Discord.RichEmbed()	
         	
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("Oops! This embed is too long!")
         	
            }
            if (!lastName5)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
         	var embed = new Discord.RichEmbed()	
         	
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("Oops! This embed is too long!")
            }
            if (!lastName6)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
         	var embed = new Discord.RichEmbed()	
         	
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
            }
            if (!lastName7)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
         	var embed = new Discord.RichEmbed()	
         	
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("Oops! This embed is too long!")
            }
            if (!lastName8)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
            var name7 = lastName7.name;
         	var embed = new Discord.RichEmbed()	
         	
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("Oops! This embed is too long!")
            }
         else {
         	           var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name; 
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
            var name7 = lastName7.name;
            var name8 = lastName8.name; 
         	var embed = new Discord.RichEmbed()
             .setTitle("**Information Minecraft Player!**")
             .setColor(0x196026)
             .setThumbnail(`https://crafatar.com/avatars/${shortuuid}.png?size=250&overlay=true`)
             .addField(":bust_in_silhouette: | Username", username)
             .addField(":shield: | Short UUID", `\`${shortuuid}\``)
             .addField(":shield: | Long UUID", `\`${longuuid}\``)
             .addField(":bust_in_silhouette:  | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
             .addField(":bust_in_silhouette: | Name History", `**${username}** has not changed their username yet!`)
             .addField(":bust_in_silhouette: | Username Last Changed", `**${username}** has not changed their username yet!`)
             return message.channel.send({ embed: embed })
}});
};

        
exports.help = {
    name: "mcuser",
    description: "Get a minecraft user's info!",
    usage: "/mcuser <user>",
    note: "Dont try to use this to assasinate someone!"
};