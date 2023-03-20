const http = require('http');

// const server = http.createServer((request, response)=>{
//    response.statusCode = 200;
//    response.setHeader('content-Type', 'text/plain');
//    response.end('Hello vamshiKrishna')
// });
// server.listen(4000);

//const server = http.createServer((request, response)=>{
    //console.log(request.url, request.method, request.headers);
    // response.setHeader('content-Type', 'text/html');
    // response.write('<html>');
    // response.write('<head><title> My First Page</title><head>');
    // response.write('<body><h1> Hello from my Node.js server!</h1><nodu>');
    // response.write('<html>');
    // response.end();
    
//});
const server = http.createServer((request,respose)=>{
    const  url  = request.url;
  if (url === '/home') {
    respose.setHeader( 'Content-Type', 'text/plain' );
    respose.write('Welcome home');
    respose.end();
  } else if (url === '/about') {
    respose.setHeader('Content-Type', 'text/plain');
    respose.write('Welcome to About Us page');
    respose.end();
  }
  else if (url === '/node') {
    respose.setHeader('Content-Type', 'text/plain');
    respose.write('Welcome to my Node Js project');
    respose.end();
  } 
});
server.listen(3000);
 
