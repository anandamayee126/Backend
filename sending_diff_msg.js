const http= require('http');

const cleaned=require('./cleaned');

const server=http.createServer(cleaned.handler);
console.log(cleaned.someText);

server.listen(4000);