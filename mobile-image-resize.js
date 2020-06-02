const sharp = require('sharp');
const fs = require('fs');
const directory = 'https://cdn.jsdelivr.net/gh/KTMS-web/KTMS-web.github.io/https://cdn.jsdelivr.net/gh/KTMS-web/KTMS-web.github.io/assets/image/brands';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });