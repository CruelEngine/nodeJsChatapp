const http = require('http'); //all modules required for server;
const port = '9000';
const host = '127.0.0.1';


var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'}); //sets the response as OK , and content type as text/html
    res.end('<h1>Hello World</h1>'); //as soon as server is runt , we send in the reponse as Hello World
}).listen(port,host , ()=>{
    console.log('server running on : ' + port);
});






