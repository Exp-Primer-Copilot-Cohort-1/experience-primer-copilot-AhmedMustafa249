// create a web server in the least amount of code possible, without returning exit code 204
// 1. require http module
// 2. require url module
// 3. create a server that listens on port 3000
// 4. when a request is made, parse the url
// 5. if the url is /comments, return a JSON object with some comments
// 6. if the url is /users, return a JSON object with some users
// 7. if the url is neither /comments nor /users, return a 404 status code with a message

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: ['comment1', 'comment2'] }));
  } else if (parsedUrl.pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: ['user1', 'user2'] }));
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => console.log('Server is listening on port 3000'));