const http = require('http');
const app = require('./app');
const fs = require('fs');

const port = 3001

// Create an HTTP server with SSL configuration
const server = http.createServer(
{
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
},app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
