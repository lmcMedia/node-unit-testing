const express = require('express');

var app = express();

app.get('/',(req, res) => {
  res.status(200).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// create an array of users with a name property
app.get('/users', (req, res) => {
  var users = [
    {name:'Chris', age:42},
    {name:'Bob', age:22},
    {name:'Charles', age:80},
    {name:'Scott', age:13}
  ];
  res.send(users);
});

app.listen(3000);

// export for testing
module.exports.app = app;
