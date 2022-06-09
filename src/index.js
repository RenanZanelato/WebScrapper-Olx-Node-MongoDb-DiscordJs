const { targetSite } = require('./configs/config.json');
const req = require('./modules/scrapperModule');

req(targetSite);