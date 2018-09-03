const test = require(`ava`);
const sinon = require(`sinon`);
const uuid = require(`uuid`);
const Supertest = require(`supertest`);
const api = require(`../googleFunction.js`).helloHttp;
const supertest = Supertest(process.env.BASE_URL);


test(`helloHttp: should print a name`, t => {
  // Mock ExpressJS 'req' and 'res' parameters
  const name = uuid.v4();
  const req = {
    body: {
      name: name
    }
  };
  const res = { send: sinon.stub(), status: 200 };

  // Call tested function
  helloHttp(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [{name:'Hello'}]);
  t.deepEqual(res.status, 200);
});



test.cb(`helloHttp: should print hello world`, (t) => {
  supertest
    .get(`/helloHttp`)
    .expect(200)
    .expect((response) => {
      t.is(response.send, {name:'Hello'});
    })
    .end(t.end);
});
