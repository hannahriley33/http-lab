module.exports = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());
    // app.post('/red', () => ) for create
    // app.get('/red', () => {}) fro get a thing
    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>You made it!</h1>
          </body>
        </html>`
      }));
    } else if(request.path === '/red' && request.method === 'GET') {
      // res.send()
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>This is red</h1>
          </body>
        </html>`
      }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>This is blue</h1>
          </body>
        </html>`
      }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>This is green</h1>
          </body>
        </html>`
      }));
    } else {
      client.end(createResponse({
        contentType: 'text/html',
        status: '404 not found',
        body: `
        <html>
          <body>
            <h1>Oops! This page seems to have been misplaced.</h1>
          </body>
        </html>`
      }));
      client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});