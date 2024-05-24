// create a web server in the least amount of code possible, without returning exit code 204

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, World!');
});
server.listen(8080, () => {
    console.log('Server is running on port 8080');
});