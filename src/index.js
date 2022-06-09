const { MessageEmbed, WebhookClient } = require('discord.js');
const { discordWebHook, targetSite } = require('./config.json');
const { botName, avatar } = require('./discordBotConfig.json');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const webhookClient = new WebhookClient({ url: discordWebHook });

axios(targetSite)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const adsTable = $('.sc-1fcmfeb-2');
    const ads = [];

    adsTable.each(function() {
      const olx_id = $(this)
        .find('a')
        .attr('data-lurker_list_id');

      const title = $(this)
        .find('a')
        .attr('title');

      const link = $(this)
        .find('a')
        .attr('href');

      const img_link = $(this)
        .find('img')
        .attr('data-src');

      const price = $(this)
        .find('.sc-1kn4z61-1 span')
        .text();

      const locale = $(this)
        .find('.sc-1c3ysll-0 span')
        .text();

      const created_date = $(this)
        .find('.sc-11h4wdr-0')
        .text();

      if (typeof title === 'undefined'){
      	return;	
      }

     const exampleEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(title)
		.setURL(link)
		.setThumbnail(img_link)
		.addFields(
			{ name: 'Price', value: price },
			{ name: 'Locale', value: locale},
			{ name: 'Created Date', value: created_date }
		)
		.setImage(img_link)
		.setTimestamp();

		webhookClient.send({
			username: botName,
			avatarURL: avatar,
			embeds: [exampleEmbed],
		});

    });
  })
  .catch(console.error);
