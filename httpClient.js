// exercice 7 http client
var http = require('http');
console.log(http)
http.get(process.argv[2], function callback (res) {
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', console.error)
  }).on('error', console.error)