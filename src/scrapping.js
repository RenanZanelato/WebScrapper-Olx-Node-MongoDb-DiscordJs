const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { targetSite } = require('./config.json');

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

      const olx_link = $(this)
        .find('a')
        .attr('href');

      const olx_img_link = $(this)
        .find('img')
        .attr('data-src');

      const price = $(this)
        .find('.sc-1kn4z61-1 span')
        .text();

      const locale = $(this)
        .find('.sc-1c3ysll-0 span')
        .text();

      const olx_created_at = $(this)
        .find('.sc-11h4wdr-0')
        .text();

      const ad = {
        title,
        olx_id,
        olx_link,
        olx_img_link,
        price,
        locale,
        olx_created_at
      };
      console.log(ad);
   
    });

  })
  .catch(console.error);

