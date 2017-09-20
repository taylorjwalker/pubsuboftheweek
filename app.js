const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');

const outputResults = (subOfTheWeek) => {
  const output = `The Pub Sub of the Week is the ${subOfTheWeek.name}, on sale for $${subOfTheWeek.price}!`;
  console.log(output);
}

// Check cache
if (fs.existsSync('cache.json')) {
  const cachedSub = JSON.parse(fs.readFileSync('cache.json', 'utf8'));
  moment.updateLocale('en', { week: { dow : 4 } }); // Thursday is the first day of the week!
  if (moment().week() == moment(cachedSub.timestamp).week()) { // If cached result is from this week, output results.
    outputResults(cachedSub);
    return;
  }
}

// Scrape weekly ad
const storeID = '2622294'; // Hard coding my local Publix; shouldn't matter much
const searchTerm = 'Whole Sub'; 
const url = `http://weeklyad.publix.com/Publix/BrowseByListing/BySearch/?StoreID=${storeID}&SearchText=${searchTerm}`;

request(url, (error, response, body) => {
  // Check status code (200 is HTTP OK)
  if (response.statusCode !== 200) {
    console.log("Error!\n");
    return 1;
  }

  // Parse the document body
  const $ = cheerio.load(body);
  const rawDeals = Array.from($('#BrowseBySearch').find('.gridTileUnitB'));
  const deals = rawDeals.map(deal => ([$('.desktopBBDTabletTitle span', deal).text(), $('.deal span', deal).text()]));
  if (deals.find(title => title[0].includes(searchTerm)) === undefined) {
    console.log("404: Sub Not Found\n");
    return 1;
  }
  const subOfTheWeek = {
    name: deals.find(title => title[0].includes(searchTerm))[0],
    price: deals.find(title => title[0].includes(searchTerm))[1],
    timestamp: moment()
  };
  outputResults(subOfTheWeek);
  fs.writeFile('cache.json', JSON.stringify(subOfTheWeek, null, 2));
});
