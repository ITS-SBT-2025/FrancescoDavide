const http = require ('http');
http.createServer(function (req, res){
    if(req.url=== '/books'){
        res.writeHead(404,
            {'Content-Type': 'text/plain'});
          res.write('non ci sono libri qiu');
          res.end();

    }else{
        res.writeHead(200,
            {'Content-Type': 'text/plain'});
          res.write('Hello world!!345');
          res.end();

    }
       
}).listen(8080);