const expect = require('expect');
const rewire = require('rewire');

// rewire loads your file for testing but adds 2 methods
//app.__set__
//app.__get__
var app = rewire('./app');

describe('App', () => {
  var db = {
      saveUser: expect.createSpy()
  };
  // replace db with db variable
  app.__set__('db', db);

  // test handleSignup function was called with correct data
  // by using a spy and rewiring the db so we dont have to import db
  it('should call saveUser with user object', () => {
    var email = 'chris@technicacreative.co.jp';
    var password = '12345';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
});
