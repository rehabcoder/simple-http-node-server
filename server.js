const http = require('http');
const port = 3000;
const fs = require('fs');

// Handles http requests...

const requestHandler = (request, response) => {
  if (response) {
    response.end(`Handling request on report ${port}.`)
  };
};

// Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 3000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }

  console.log(`server is listening on port: ${port}`);
});

fs.writeFileSync('hello-world.txt', "Hello to this great world...", 'utf8');
