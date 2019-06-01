const http = require('http');
const app = require('./app');

const port = 8080;
const server = http.createServer(app);
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen( port, () => console.log(`Example app listening on port ${port}!`))