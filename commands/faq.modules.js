const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send(replyMsg("https://kamiblue.org/modules"))
};

module.exports.config = {
    name: "modules",
    aliases: [],
    use: "modules",
    description: "List of modules",
    state: "gamma",
    page: 2
};
