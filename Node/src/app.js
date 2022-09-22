const http = require('http')
const os = require ('os')

let handler = function(request,response){
    console.log(`reciving request from docker ps${request.connection.remoteAddress}`);
    response.writeHead(200);
    response.end(`You have hit the ${os.hostname()}`);
}

var www = http.createServer(handler)
www.listen(8080)