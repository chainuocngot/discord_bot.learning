const {
  ApplicationCommandOptionType,
  Client,
  Interaction,
  PermissionFlagsBits,
} = require("discord.js");
const AutoRole = require("../../models/AutoRole");

module.exports = {
  name: "autorole-disable",
  description: "Disable auto-role in this server",
  options: [
    {
      name: "role",
      description: "The role you want users to get on join",
      type: ApplicationCommandOptionType.Role,
      required: true,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],

  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: async (client, interaction) => {
    try {
      await interaction.deferReply();

      if (
        !(await AutoRole.exists({
          guildId: interaction.guild.id,
        }))
      ) {
        interaction.editReply(
          "Auto role has not been configured for this server. Use `/autorole-configure` to set it up",
        );
        return;
      }

      await AutoRole.findOneAndDelete({ guildId: interaction.guild.id });
      interaction.editReply(
        "Auto role has not been disabled for this server. Use `/autorole-configure` to set it up again",
      );
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  },
};
