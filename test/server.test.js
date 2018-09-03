const expect = require('expect')
const request = require('supertest')
const {app} = require('../server.js')

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });
  
  it('responds to /ok', function testSlash(done) {
  request(server)
    .get('/ok')
    .expect(200, done);
  });

  it('responds to /api/test', function testSlash(done) {
    var data = {express: 'data from HeRoku!'}
    request(server)
      .get('/api/test')
      .expect(200, done)
      .expect(200, data)
  });

  it('responds to /api/data', function testSlash(done) {
    var data = {express: 'data from HeRoku!'}
    request(server)
      .get('/api/data')
      .expect(200, done)
      .expect(200, data)
  });
  
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});