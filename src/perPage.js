const { targetSite, pagesToSearchData } = require('./configs/config.json');
const req = require('./modules/scrapperModule');

for (let i = 1; i <= pagesToSearchData; i++) {
    req(targetSite+"?o="+i);
 }
