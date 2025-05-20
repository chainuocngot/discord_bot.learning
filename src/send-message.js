require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: "1374209184702136330",
    label: "Blue",
  },
  {
    id: "1374209321872920627",
    label: "Green",
  },
  {
    id: "1374209490265702421",
    label: "Red",
  },
];

client.on("ready", async (c) => {
  try {
    const channel = await client.channels.cache.get("1374025017557385259");
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary),
      );
    });

    await channel.send({
      content: "Claim or remove a role below",
      components: [row],
    });

    process.exit();
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);
