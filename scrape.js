const request = require('request');
const cherio = require('cherio');

request('https://en.wikipedia.org/wiki/Abacus', (error, response, html) => {
  if(!error && response.statusCode == 200){
    const $ = cherio.load(html);
    const siteHeading = $('#bodyContent');
    // console.log(siteHeading.children('div').parent().text());'
    $('.toclevel-1').each((i, el) => {
      const item = $(el).text();
      const link = $(el).children().attr('href');
      console.log(link);
      // console.log(item)
    })
  }
})