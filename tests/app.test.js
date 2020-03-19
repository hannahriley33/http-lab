const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles the home path', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('handles /red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>red</title>
</head>
<body>
  <h1>red</h1>
</body>
</html>`);
      });
  });

  it('handles /green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>green</title>
</head>
<body>
  <h1>green</h1>
</body>
</html>`);
      });
  });

  it('handles /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>blue</title>
</head>
<body>
  <h1>blue</h1>
</body>
</html>`);
      });
  });

  it('handles /echo', () => {
    return request(app)
      .post('/echo')
      .send('hello!')
      .then(res => {
        expect(res.text).toEqual('hello!');
      });
  });

  it('handles when a path is not found', () => {
    return request(app)
      .get('/blah')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual('Not Found');
      });
  });
});
