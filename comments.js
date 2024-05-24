// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Path: comments.js
// create comments array
var comments = [{name: 'John', message: 'Hello World!'}];

// Path: comments.js
// create get method
app.get('/comments', function(req, res) {
    res.send(comments);
});

// Path: comments.js
// create post method
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.send(comments);
});

// Path: comments.js
// create server to listen port 3000
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});

// Path: comments.js
// create server to listen port 3000
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});

