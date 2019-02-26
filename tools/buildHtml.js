const fs = require('fs');
const cheerio = require('cheerio');

/*eslint-disable no-console */

fs.readFile('index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('');

  fs.writeFile('build/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /build');
  });
});

fs.readFile('global.css', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }
  
  fs.writeFile('build/global.css', markup, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('global.css written to /build');
  });
});