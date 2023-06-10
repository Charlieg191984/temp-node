const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>OOps!</h1>
  <p>Cant find the page your looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
