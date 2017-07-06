const request = require('supertest');
const expect = require('expect');

// grab the server.js file and app variable that was exported
var app = require('./server').app;

// group the routes
describe('Routes', () => {

  describe('#GET /', () =>{
  // =================================================================
  // TESTING THE ROUTE (HTTP ENDPOINT): app.get('/',(req, res)
  // Mocha as main test framework, but Supertest can fill in some gaps
  it('/ route should return Hello World! response', (done) => {
      // supertest calls
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({
          error: 'Page not found.',
          name: 'Todo App v1.0'
        })
        // provide a function with a response with headers, body, etc from the response
        .expect((res) => {
          // mix in Expect testing inside of this function
          expect(res.body).toInclude({
              error: 'Page not found.'
          });
        })
        .end(done); // done will finish the async call
    });
  });


  describe('#GET /users', () => {
    // users route
    it('/users route should return an array of users', (done) => {
      // app is the Express application from server.js
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name:'Chris',
          age: 42
        });
        expect(res.body).toInclude({
          name:'Scott',
          age:13
        });
      })
      .end(done); // supertest needs end to complete
    });
  });
});
