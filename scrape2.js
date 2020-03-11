const request = require('request');
const cherio = require('cherio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

writeStream.write(`Text,Link\n`);

request('https://www.vox.com/first-person/2017/3/6/14766970/abacus-math-learning-lessons', (error, response, html) => {
  if(!error && response.statusCode == 200){
    const $ = cherio.load(html);
    // $('.c-related-list')
    //   .children('ul')
    //   .each((i, el) => {
      //     console.log(i, $(el).text)
      //   })
      $('.c-related-list')
      .children('ul')
      .children('li')
      .each((i, el) => {
        const text = $(el).text().trim();
        const links = $(el).find('a').attr('href');
        writeStream.write(`${text},${links}\n`);
      })
  }
})