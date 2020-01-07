const fs = require("fs");
const path = require("path");

let data = [];
fs.readdirSync(path.join(__dirname, "../test")).filter(file => file !== 'index.js').forEach(function (file) {
	data.push(require("../test/" + file))
});

data = data.concat([]);

module.exports = data;
