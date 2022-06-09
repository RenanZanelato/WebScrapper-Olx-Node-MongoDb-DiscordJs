const { targetSite } = require('./config.json');
const OlxModel = require("./model/olxModel");
const axios = require('axios');
const cheerio = require('cheerio');
const discordMessage = require('./modules/discordModule');

axios(targetSite)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const adsTable = $('.sc-1fcmfeb-2');
    const ads = [];

    adsTable.each(function() {
      
      const id = $(this).find('a').attr('data-lurker_list_id');
      const title = $(this).find('a').attr('title');
      const link = $(this).find('a').attr('href');
      const imgLink = $(this).find('img').attr('data-src');
      const price = $(this).find('.sc-1kn4z61-1 span').text();
      const locale = $(this).find('.sc-1c3ysll-0 span').text();
      const createdDate = $(this) .find('.sc-11h4wdr-0').text();
      

      let olxModel = new OlxModel(id, createdDate)
      .setPrice(price)
      .setTitle(title)
      .setLink(link)
      .setImgLink(imgLink)
      .setLocale(locale);
      console.log(olxModel);
      return false;
        if (typeof title === 'undefined'){
          return;	
        }
    discordMessage.sendDiscordMessage(olxModel);

    });
  })
  .catch(console.error);
