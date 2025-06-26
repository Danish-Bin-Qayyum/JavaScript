 /*const randomnumberPromise= new Promise((resolve, reject) => {
    // asyns operation
    setTimeout(() => {
        const randomvalue = Math.random()
        if (randomvalue>0.5) {
            resolve[randomvalue]

            
        }else{
            reject[new Error("value is too small")]
        }
        
    }, 2000);
})


randomnumberPromise
.then(result => {
    console.log("promise fulfil" + result );
})
.catch(error => {
    console.log("promise reject with error", errer);
})

function getevennumber(value , dely) {
    return new promisis{(resolve, reject ) => {
        setInterval(() => {
            
        },);
    }}
    
}*/


// promisis.all
/*onst function1 = ()=>{
    return new Promise ((resolve, reject)=> {
        setInterval(() => {
            resolve("don")
        }, 2000);
    })
}

const function2 = ()=>{
    return new Promise{(resolve,reject)=>{
        setTimeout(() => {
            resolve('fun 2')
        }, 2000);
    }}
}


const function3 = ()=>{
    return new Promise{(resolve,reject)=>{
        setTimeout(() => {
            resolve('fun 3')
        }, 2000);
    }}
}

Promise.all({
    function1{},
    function2{},
    function3{}


})

 .then(dataArry) => {
    console.log('all data from fun');
 }
 .catch(error => {
    console.log('error is promisis');
 })*/


    // promisis. race

/*const resolvePromisis=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('resolve')
        }, 1000);
    })
}

e

const rejectPromisis=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('reject')
        }, 500);
    })
}

Promise.race{[
    resolvePromisis{},
    rejectPromisis{}
]}
.them(result =>{
    console.log('result', result);
})
caches(error =>{
    console.log('error', error);
})*/