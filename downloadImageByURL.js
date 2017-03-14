var request = require('request');
var fs = require('fs');

function downloadImageByURL(url, filePath) {
  request.get(url)
         .on('error', (err) => {
          throw err;
         })
         .on('response', () => {
          console.log('Downloading image...');
         })
         .pipe(fs.createWriteStream(filePath))
         .on('finish', () => {
          console.log('Download complete.');
         })
}

module.exports = downloadImageByURL;