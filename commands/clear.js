const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async(bot, message, args) => {
    
    if(!message.member.hasPermission("Administrator")) return message.channel.send("Nqmash dostup do tazi komanda");
    if(!args[0]) return errors.noPerms(message, "Administrator");
    message.channel.bulkDelete(args[0]).then (() => {
        message.channel.send(`Izchisteno ${args[0]} suobshteniq.`).then(msg => msg.delete(5000));
    });

}

module.exports.help = {
    name:"clear"
}