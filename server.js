const http = require('http');
const fs = require('fs');

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
// const server = http.createServer((request,respose)=>{
//     const  url  = request.url;
//   if (url === '/home') {
//     respose.setHeader( 'Content-Type', 'text/plain' );
//     respose.write('Welcome home');
//     respose.end();
//   } else if (url === '/about') {
//     respose.setHeader('Content-Type', 'text/plain');
//     respose.write('Welcome to About Us page');
//     respose.end();
//   }
//   else if (url === '/node') {
//     respose.setHeader('Content-Type', 'text/plain');
//     respose.write('Welcome to my Node Js project');
//     respose.end();
//   } 
// });
// server.listen(3000);

const server = http.createServer((request,response)=>{
    const  url  = request.url;
    const method = request.method;
    if(url === '/'){
        return fs.readFile('message.txt', (err,data)=>{
            data=data.toString();
            console.log(data);
            let text = data;
            response.write('<html>');
    response.write('<head><title>Enter Message</title><head>');
    response.write('<body>')
    response.write(`<h4>${text}</h4>`)
    response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form><body>');
    response.write('<html>');
    return response.end();
        })
    
    }

if (url === '/message' && method ==='POST'){
    const body = [];
    request.on('data', (chunk)=>{
        console.log(chunk);  //normally to check the chunk data u can remove it if u want//
        body.push(chunk);
    });
    return request.on('end', ()=>{
         const paredBody = Buffer.concat(body).toString();  
         const message = paredBody.split('=')[1];
         fs.writeFile('message.txt', message, err=>{
            response.statusCode = 302;
            response.setHeader('Location', '/')
            return response.end();
         });
    });   
}
});
server.listen(3000);


















 
