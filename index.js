const http = require ('http');
http.createServer(function (req,res){
    res.writeHead(200,
        {'Content-Type': 'text/plain'});
    res.write('Hello world!!');
    res.end();
}).listen(8080);
//the metod in line 4 require a function
//line 5 there is the function