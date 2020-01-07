const fs = require("fs");
const path = require("path");

let data = [];
fs.readdirSync(path.join(__dirname, "./mock"))
  .forEach(function (file) {
      data.push(...require("./mock/" + file))
    }
  );
data = data.concat([]);
module.exports = data;
