'use strict';

const http = require('node:http');
http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end('{"service":"guide-proof-20261016","revision":"guide-views-v1"}\n');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0', () => {
  console.log('guide-proof-20261016 ready');
});
