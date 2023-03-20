const http = require('http');

const server = http.createServer((request, response)=>{
   response.statusCode = 200;
   response.setHeader('content-Type', 'text/plain');
   response.end('Hello vamshiKrishna')
});
server.listen(4000);
