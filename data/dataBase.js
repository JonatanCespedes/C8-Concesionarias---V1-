let fs = require('fs');

module.exports = JSON.parse(fs.readFileSync('./data/concesionarias.json', "utf-8"))

