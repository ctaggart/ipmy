/// <reference path='typings/node/node.d.ts' />

import http = require('http');

type IpRsp = {
  ip: string;
}

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});

  let host: string = req.headers['x-forwarded-for'];
  // we have the host, but just need hostname without the port
  let ip: IpRsp = { ip: host.split(':', 1)[0] };
  res.end(JSON.stringify(ip));

}).listen(process.env.PORT || 3000);
