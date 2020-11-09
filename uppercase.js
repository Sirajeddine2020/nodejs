// exercice 12 http-uppercaserer
const http= require('http');
const map = require('through2-map');

const server=http.createServer( function (request, response) {

    if ( request.method !== 'POST' )  {
        //console.log( 'this is not a POST');
        return response.end('Please give a POST\n')
        
      }
    else {
      request.pipe(map(function (chunk) {
        //console.log (chunk.toString().toUpperCase().pipe(response))
       return chunk.toString().toUpperCase()
      })).pipe(response)
     }
    })
   
server.listen(Number(process.argv[2]))