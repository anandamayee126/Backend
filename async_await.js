console.log("a");
console.log("b");
async function printMessage1(){
    let promise1= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("c");
        },1000)
    })
    console.log(await promise1);
}
async function printMessage2(){
    let promise1= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("d");
        },1000)
    })
    console.log(await promise1);
}

async function printMessage3(){
    let promise1= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("e");
        },1000)
    })
    console.log(await promise1);
}
printMessage1();
printMessage2();
printMessage3();
