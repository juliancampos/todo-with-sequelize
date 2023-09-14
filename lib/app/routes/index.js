const fs = require('fs');

const load = async (app) => {
   const files = await fs.readdirSync(__dirname);
   files.forEach(file => {
      if (file.endsWith('-routes.js')) {
         require(`./${file}`)(app);
      }
   });
}

module.exports = {
   load
}