const { hostname } = require("os");
const http = require("http");

const message = "Hello World \n";
//Well run the server on port 8080 as port numbers below 1024 require root privileges
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname()}:${port}/`);
});
