const fs1= require('fs');

const cleaned= (req,res) => {
    let url=req.url;
    const method= req.method;
    console.log(method);
    if(url==='/'){
        //res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><form action="/messages" method="POST"><input type="text" name="name"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url=='/messages' && req.method=='POST')
    {
        const body=[];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
       return req.on('end',() =>{
            const parseBody=Buffer.concat(body).toString();//in the format-> message="something"
            const message=parseBody.split('=')[1];//part after message
            console.log(parseBody);
            fs1.writeFile('./message.txt',message,(err)=>{
                
            });
            res.statusCode=302;
                res.setHeader('Location','/');
                //console.log(err);
                return res.end();
        });
    }
}

module.exports={
    handler: cleaned,
    someText:"hard coded text"
};


