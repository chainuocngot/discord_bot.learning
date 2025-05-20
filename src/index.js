require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: "Chainuocngot",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=OqxHy8sCtvA",
  },
  {
    name: "Test",
    type: ActivityType.Listening,
  },
  {
    name: "Trai",
  },
];

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[random]);
  }, 5_000);
});

client.login(process.env.TOKEN);
