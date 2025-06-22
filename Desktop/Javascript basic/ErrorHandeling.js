
//------------------  error handind --------------/

let num =20

try {
    // code block which may have error
    if (num>20) {
        throw new Error("it is not valid num");
        
    }
    console.log(num);

} catch (error){
    //handing error here
    console.log("there is a error");
}