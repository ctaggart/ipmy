/// <reference path='typings/node/node.d.ts' />
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var host = req.headers['x-forwarded-for'];
    var ip = {
        ip: host.split(':', 1)[0]
    };
    res.end(JSON.stringify(ip));
}).listen(process.env.PORT || 3000);
