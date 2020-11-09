//exercice 10 time-server

const net = require('net')

function addZero (i) {
  return ((i < 10 ? '0' : '') + i)
}

function dating () {
  const t = new Date()
  return t.getFullYear() + '-' +
    addZero(t.getMonth() + 1) + '-' + //because getMonth starts at 0
    addZero(t.getDate()) + ' ' +
    addZero(t.getHours()) + ':' +
    addZero(t.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(dating() + '\n')
})

server.listen(Number(process.argv[2]))