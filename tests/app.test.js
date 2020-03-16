const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('gets red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>This is red</h1>
          </body>
        </html>
        `);
      });
  });
});
