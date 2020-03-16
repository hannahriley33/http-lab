// parseRequest takes a rawRequest (an HTTP request message). It should take that rawRequest and return an object with body, method, and path from the rawRequest.

// const emailParts = email => {
//   const pattern = /(?<name>\w+)@(?<host>\w+\.\w+)/;

//   return email.match(pattern).groups;
// };

// HTTP/1.1 200 OK
// Date: Sat, 09 Oct 2010 14:28:02 GMT
// Server: Apache
// Last-Modified: Tue, 25 Jun 2019 15:57:17 GMT
// Accept-Ranges: bytes
// Content-Length: 269
// Content-Type: text/html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
//   <h1>Example</h1>
// </body>
// </html>

module.exports = rawRequest => {
  const pattern = /(?<method>[A-Z]+)\s(?<path>.)/;
  const [, body] = rawRequest.split('\r\n\r\n');
  return { ...rawRequest.match(pattern).groups, body };
};
