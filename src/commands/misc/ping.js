module.exports = {
  name: "ping",
  description: "pong",
  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
