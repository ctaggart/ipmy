/// <reference path="typings/node/node.d.ts"/>
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var ip = {
        ip: req.headers['x-forwarded-for']
    };
    res.end(JSON.stringify(ip));
}).listen(process.env.PORT || 3000);
