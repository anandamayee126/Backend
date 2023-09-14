const http= require('http');
const server=http.createServer((req, res) => {
    if(req.url=='/home')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
        //res.send();
    }
    else if(req.url=='/about')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About us page</title></head>');
        res.write('<body><h1>Welcome To About Us page</h1></body>');
        res.write('</html>');
        res.end();
        //res.send();
    }
    else if(req.url=='/nde')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js page</title></head>');
        res.write('<body><h1>Welcome To Node.js page</h1></body>');
        res.write('</html>');
        //res.send();
        res.end();

    }
    else{
       // 
       res.end("Hello");
    }
    //res.send();
})
server.listen(4000);