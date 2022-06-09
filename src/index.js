const { targetSite } = require('./config.json');
const OlxModel = require("./model/olxModel");
const axios = require('axios');
const cheerio = require('cheerio');
const discordMessage = require('./modules/discordModule');
global.db = require('./modules/db');


const req = async () => { 
  axios(targetSite)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const adsTable = $('.sc-1fcmfeb-2');

      adsTable.each(async function() {
        
        let olxModel = new OlxModel( )
        .setId($(this).find('a').attr('data-lurker_list_id'))
        .setCreatedDate($(this) .find('.sc-11h4wdr-0').text())
        .setPrice($(this).find('.sc-1kn4z61-1 span').text())
        .setTitle( $(this).find('a').attr('title'))
        .setLink($(this).find('a').attr('href'))
        .setImgLink($(this).find('img').attr('data-src'))
        .setLocale($(this).find('.sc-1c3ysll-0 span').text());
   
        if (typeof olxModel.link === '???'){
          return;	
        }

        const checkIfExist = await global.db.findOne(olxModel.Id);
        
        if(checkIfExist == null){
          console.log(olxModel);
          discordMessage.sendDiscordMessage(olxModel);
          await global.db.insert(olxModel.Id);
        }
      });
    })
    .catch(console.error);
}

req();