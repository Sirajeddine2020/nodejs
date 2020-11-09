//exercice 4 my-first-async-I/O
var fs = require('fs');
var input = process.argv[2];

    fs.readFile(input,  function (err, data) {
         if (err) {
              return console.log(err)
                  };
         let Nblines = data.toString().split('\n').length - 1
             console.log(Nblines)
                                               })