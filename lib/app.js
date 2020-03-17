const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const colorHtml = color => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${color}</title>
</head>
<body>
  <h1>${color}</h1>
</body>
</html>`;

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.path === '/') {
      client.end(createResponse({ body: 'hi', contentType: 'text/plain' }));
    } else if(request.method === 'GET' && request.path === '/red') {
      client.end(createResponse({ body: colorHtml('red'), contentType: 'text/html' }));
    } else if(request.method === 'GET' && request.path === '/green') {
      client.end(createResponse({ body: colorHtml('green'), contentType: 'text/html' }));
    } else if(request.method === 'GET' && request.path === '/blue') {
      client.end(createResponse({ body: colorHtml('blue'), contentType: 'text/html' }));
    } else if(request.method === 'POST' && request.path === '/echo') {
      client.end(createResponse({ body: request.body }));
    } else {
      client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;