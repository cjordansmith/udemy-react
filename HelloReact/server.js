var express = require('express');

// create our app
var app = express();

// which folder to serve?
app.use(express.static('public'));

// start the server
// two arguments - what port, what function to run when started
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
