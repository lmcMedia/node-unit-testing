var db = require('./db.js');

// we have multiple things to test in here so we use spies
module.exports.handleSignup = (email, password) => {
  // check if email exists
  // save the user to the db (ES6 syntax allows us to avoid email:email)
  db.saveUser({email, password})
  // send welcome email
};
