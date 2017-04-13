var http            = require('http')
var ecstatic        = require('ecstatic')

http.createServer(
  ecstatic({ root: __dirname + '/' })
).listen(11001);

console.log('server listening on http://localhost:11001')
