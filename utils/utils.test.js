const expect = require('expect');

// pull in the file you want to test
const utils = require('./utils');

// group the tests using Mocha's describe
describe('Utils', () => {
  // subcategory example
  describe('#add', () => {
    // ===============================================
    // test the utils.add function
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      // run assertion
      expect(res).toBe(44).toBeA('number');
      // instead of doing below, use Expect as shown above
      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`);
      // };
    });
  });

  // ===============================================
  // test the utils.square function
  it('should square two numbers', () => {
    // run assertion
    expect(utils.square(4)).toBe(16).toBeA('number');
  });

  // ===============================================
  // should verify 1st and last names are setName
  it('should set first and last name', () => {
    var user = {
      age: 42,
      location: 'Okinawa'
    };
    res = utils.setName(user, 'Chris S');
    // run assertion
    expect(res).toInclude({
      firstName: 'Chris',
      lastName: 'S'
    });
  });

  // ===============================================
  // ASYNC FUNCTION TESTING EXAMPLES
  // Mocha will assume that this test passed because the callback
  // function is not triggered yet. It will completely skip the
  // utils.asynAdd expect statement, so we have to tell Mocha that
  // this is an async function by adding 'done' in the argument
  // and call it AFTER the assertion code
  it('should async add 2 numbers', (done) => {
    // the 3rd param is the callback
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(12, (res) => {
      expect(res).toBe(144).toBeA('number');
      done();
    });
  });
});














// test other assertions
// it('should expect some value', () => {
  //expect(12).toNotBe(11);

  // OBJECT AND ARRAY EQUALITY CHECKS ===========================
  // this wont work because they are NOT the exact same object,
  // they are 2 different objects with the same property.
  // toBe uses === equality checks so this doesnt work
  //expect({name: 'Chris'}).toBe({name: 'Chris'});

  // this will work
  // expect({name: 'Chris'}).toEqual({name: 'Chris'});
  // expect({name: 'Chris'}).toNotEqual({name: 'Bob'});

  // TESTING ARRAYS AND OBJECTS ===================================
  // expect([2,3,4]).toExclude(5);
  // expect({
  //   name: 'Chris',
  //   age: 25,
  //   location: 'Okinawa'
  // }).toInclude({
  //   age: 25
  // });
// });
