const fs = require('fs');

const requestHandler =(request,response) =>{
    const url = request.url;
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

}

module.exports = requestHandler;

// // To export multilple we can use like//
// module.exports = {
//     handler:requestHandler,
//     someText: 'Some Text in code'
// };

// // also export like this also another way //

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text in code'

// // also can export like this another way new way  supported by node js//

// exports.handler - requestHandler;
// exports.someText = 'some text in code'