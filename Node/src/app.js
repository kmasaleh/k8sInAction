const http = require('http')
const os = require ('os')

const listenPort= 8080;
console.log(`kubia server is starting ...`);
console.log(`local hostname is : ${os.hostname()} , listening in port ${listenPort}`);
let handler = function(request,response){
    
    let clientIP = request.connection.remoteAddress;
    console.log(`reciving request from ${request.url} ,client ip: ${clientIP}`);
    response.writeHead(200,{"content-type":"text/html"});
    response.write(`reciving request from ${request.url}  - client ip is ${clientIP} </br>`);
    response.end(`You have hit host: ${os.hostname()}`);
}

var www = http.createServer(handler)
www.listen(listenPort)