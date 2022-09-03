const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

const app = express();
const url = 'https://doblaje.fandom.com/es/wiki/Los_Caballeros_del_Zodiaco';
app.listen(PORT, () => console.log(`SERVIDOR ${PORT}`));
const characters = [];
var fs = require('fs');
const filename = 'ONE.txt';
//comentario
axios(url).then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $('td', html).each(function () {
         const name = $(this).find('a').text();
         characters.push(name);
      });
      fs.writeFile(filename, characters.toString(), function (err) {
         if (err) {
            console.log(err);
         }
         console.log(characters);
      });
   })
   .catch((err) => console.error(err));
