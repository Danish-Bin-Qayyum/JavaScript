/*async function f1(params) {
    console.log("this is an async fun without await step");
    return 42 
}
f1()
.then(result=>{
    console.log(result);
})

// asyn function without await with error
async function f1() {
    console.log("this is an async fun with error");
    throw new error("this is my error");
    
}
f2().catch(error=>{
    console.log("the error msg ${error}");
})

function getinfo(params) {
    return new Promise((resolve, reject)=>{
        const ramdomber =Math.ramdom()
        setInterval(() => {
            if(ramdomber < 0.5){
                resolve(42);
            }else{
                reject(new error("error"))
            }
            
        }, 2000);
    })
}

async function getinumbernfo(params) {
    try {
        const result = await getinfo{};
        console.log("await", result);
    } catch (error) {
        console.log("error", error);
    }
}
getinumbernfo();
async function f3(params) {
    
}await f2();*/