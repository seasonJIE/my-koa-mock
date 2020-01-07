const fs = require("fs");
const path = require("path");

let data = [];
fs.readdirSync(path.join(__dirname, "../hdk-oc")).filter(file => file !== 'index.js').forEach(function (file) {
	data.push(require("../hdk-oc/" + file))
});

data = data.concat([]);

module.exports = data;
