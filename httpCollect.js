// exercice 8 http collect

var http = require('http')
const concat = require('concat-stream')

http.get(process.argv[2], function (res) {
  res.pipe(concat(function (cont) {
    
    let data = cont.toString()
    console.log(data.length)
    console.log(data)

  }))
})