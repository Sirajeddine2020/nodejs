// exercice 5 filtered-ls
const fs = require('fs')
const path = require('path')

const fldr = process.argv[2]
const extns = '.' + process.argv[3]

fs.readdir(fldr, function (err, data) {
  if (err) return console.error(err)
  else {
  data.forEach(function (file) {
    if (path.extname(file) === extns) {
      console.log(file)
    };
});
  };
});