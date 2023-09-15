const http= require('http');
const fs= require('fs');
const server=http.createServer((req, res) => {
    let url=req.url;
    const method= req.method;
    if(url==='/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><form action="/messages" method="post"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url==='/messages' && method==='POST')
    {
        const body=[];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
       return req.on('end',() =>{
            const parseBody=Buffer.concat(body).toString();//in the format-> message="something"
            const message=parseBody.split('=')[1];//part after message
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js page</title></head>');
        res.write('<body><h1>Welcome To Node.js page</h1></body>');
        res.write('</html>');
        //res.send();
        res.end();
})
server.listen(3000);