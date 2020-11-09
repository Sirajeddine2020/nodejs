//exercice 9 : juggling-async
const http = require('http')
const concat = require('concat-stream')
var result = []
let i = 0

function affichage () {
  for (let j = 0; j < 3; j++) {
    console.log(result[j])
  }
}

function httpGet (k) {
  http.get(process.argv[k+2], function (response) {
    response.pipe(concat(function (data) {
      

      result[k] = data.toString();
      i++;

      if (i === 3) {
        affichage()
      }
    }))
  })
}

for (let j = 0; j < 3; j++) {
  httpGet(j)
}