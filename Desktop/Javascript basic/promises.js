 const randomnumberPromise= new Promise((resolve, reject) => {
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



