/// <reference path="typings/node/node.d.ts"/>

type IpRsp = {
  ip: string;
}

import http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let ip: IpRsp = {ip: req.connection.remoteAddress}
  res.end(JSON.stringify(ip));
}).listen(process.env.PORT || 3000);
