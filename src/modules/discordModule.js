const { botName, avatar } = require('./../discordBotConfig.json');
const { discordWebHook } = require('./../config.json');
const { MessageEmbed, WebhookClient } = require('discord.js');

exports.sendDiscordMessage = function(olxModel) {
  const webhookClient = new WebhookClient({ url: discordWebHook });
  
  const messageEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(olxModel.title)
      .setURL(olxModel.link)
      .setThumbnail(olxModel.imgLink)
      .addFields(
        { name: 'Price', value: olxModel.price },
        { name: 'Locale', value: olxModel.locale},
        { name: 'Created Date', value: olxModel.createdDate }
      )
      .setImage(olxModel.imgLink)
      .setTimestamp();

  webhookClient.send({
    username: botName,
    avatarURL: avatar,
    embeds: [messageEmbed],
  })
}