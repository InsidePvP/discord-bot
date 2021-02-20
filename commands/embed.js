const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('HeruliaPvP')
            .setColor('RANDOM')
            .addField('IP :', '***play.heruliapvp.tk***')
            .addField('Version :', '***__[1.8 - 1.15]__***')
            .addField('***Site Herulia :***','__En Maintenance__')
            .setAuthor('Insidepvp_off | Fondateur', 'https://yt3.ggpht.com/ytc/AAUvwngwn6MhPspwRiUmtObMoX64Yr5x5sEiz4fvNnBNJg=s88-c-k-c0x00ffffff-no-rj', 'https://www.youtube.com/channel/UCHe_TomPolfhx8E7y8uXtVg')
            .setThumbnail('https://cdn.discordapp.com/attachments/812483936147079199/812484963424665650/20210109_2357331.png')
            .setFooter('HeruliaPvP Farm2Win', 'https://cdn.discordapp.com/attachments/812483936147079199/812484963424665650/20210109_2357331.png')
            .setTimestamp())
    },
    name: 'embed'
}