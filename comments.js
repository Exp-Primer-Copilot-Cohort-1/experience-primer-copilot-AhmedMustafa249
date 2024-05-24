// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }
    res.send(data);
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(commentsPath, JSON.stringify(comments), err => {
      if (err) {
        console.error(err);
        res.status(500).end();
        return;
      }
      res.send('success');
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
