module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝘓𝘰𝘳𝘥 𝘒𝘪𝘯𝘨",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100037743553265", "100037743553265"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("Really bro You don't have permission to use this command, This Command Only For my owner Lord king", event.threadID, event.messageID);
  api.sendMessage(`(ुŏ̥̥ŏ̥̥) ${global.config.BOTNAME} Bot is now turned off see you later Cia.`,event.threadID, () =>process.exit(0))
}
