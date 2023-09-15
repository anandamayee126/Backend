const http= require('http');

const cleaned=require('./cleaned');

const server=http.createServer(cleaned.handler);

server.listen(3000);