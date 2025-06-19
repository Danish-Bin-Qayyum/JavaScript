//function declaration vs. expression
// hoisting
//arguments

// rest operator

/*function sum(...args){
    console.log(args);
}
console.log(sum(1,2,3,4,5))*/

// defualt parameters

/*function interest(principal , rate = 3.5, years) {
    return principal*rate/100*years
}
 console.log(interest(10000,undefined,5));*/

 // setter and getter (pen)

 /*const person = {                           // gettter => access the properties
                                            // setter => changes (mutate) them
    fistname: "danish",
    lastname: "qayyum",
    return '$
 };*/

 // try and cacht
// local and global scop
// let vs var
//the this keyword
//changing

// exercise ( area of a circle)

const circle = {
    radius: 1,
    get area(){
        return Math.PI*  this.radius * this . radius;
    }
}
  console.log(circle.area);














































