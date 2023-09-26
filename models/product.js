const path= require('path');
const fs= require('fs');
module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        const pth= path.join(
        path.dirname(process.mainModule.filename),
        'storage',
        'products.json');

        fs.readFile(pth,(err,fileContent)=>{
            const products=[];
            if(!err) 
            {
                products=JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(pth,JSON.stringify(products),err=>{
                console.log(err);
            });
        })

    }
    static fetchAll(){
        fs.readFile(pth,(err,fileContent)=>{
            if(err)
              return [];
            return JSON.parse(fileContent);
        })
    }
}