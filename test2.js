const http = require ('http');
http.createServer(function (req,res){
    res.writeHead(200,
        {'Content-Type': 'text/plain'});
    res.write('Hello world!!');
    res.end();
}).listen(8080);