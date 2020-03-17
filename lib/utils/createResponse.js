module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}`.trim();
};

// take an object and return response
// put the values into the right places(body, content type)
// bytes --- content link to be in bytes
