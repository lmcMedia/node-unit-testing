module.exports.add = (a, b) => a + b;
module.exports.square = (x) => x * x;
module.exports.setName = (user, fullName) => {
  // split on space to get full name like Chris S
  var names = fullName.split(' ');
  // create the user object
  user.firstName = names[0];
  user.lastName = names[1];

  return user;
};

// ===============================================
// ASYNC FUNCTIONS (simulates calls to a db)
module.exports.asyncAdd = (a, b, callback) => {
  // *Mocha will assume failure of test if over 2000 ms
  // so make sure to keep setTimeouts to under 2000
  setTimeout(() => {
    callback(a + b); // send back the data after 1000 ms
  }, 1000);
};

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
};
