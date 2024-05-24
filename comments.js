//create a web server
var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res){
    var parseUrl = url.parse(req.url);
    var pathname = parseUrl.pathname;
    if(pathname === '/'){
        fs.readFile(path.join(__dirname, 'index.html'), function(err, data){
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else if(pathname === '/comment'){
        var query = qs.parse(parseUrl.query);
        comments.push(query.comment);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('success');
    }else if(pathname === '/get_comments'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(comments.join('\n'));
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});
server.listen(3000);
console.log('Server is running at http://);