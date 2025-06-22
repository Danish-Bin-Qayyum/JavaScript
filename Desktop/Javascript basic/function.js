// ----------------function that return a value----------------//
/*function add(num1,num2,num3){
    let sum = num1+num2+num3
    return sum
}
// function action
function click(ele){
    console.log("click here");
}
let total =add(1,2,3)
console.log(total);

// funtion 2
 function sub(n1,n2,n3){
    let minus= n1-n2+n3
    return minus
 }
 // calling fun
 let output = sub(9,3,2)
 console.log(output);
 // function 3
 function multi(a,b){
    let m=a*b
    return m
 }
 let ans=multi(5,5)
 console.log(ans);


 //---------------------Anonymous-----------------///
 let print= function( str){
     str ="a goooooooooooood job"
    console.log(str);
    return
 }
console.log(print);


//-----------Default paramater---------------//
function add(a,b=3){
    c = a+b
    return c
}
let d=add(2)
console.log(d);


// ------------ Rest parameter -----------------//
 function sum(x1,x2, ...xN){
    let totals = 0;
    console.log(arguments.length);
    for (let i = 0; i < arguments.larguments; i++){
        totals += arguments[1]
    }
    return totals

    };
    let val = sum(1,0,8,7,6)
    console.log(val)

    
//  -----------------Arrow Function --------------------///

let sum =  (n1,n2) => n1,n2 ;
let total = sum (5,3)
console.log(total);

// -----------------  callback functions  ------------------------///

function a() {
    console.log("function   a");
}


function b(){
    setTimeout(()=> {
        console.log("function   b");
    }, 2000)
}

function c() {
    console.log("function c");
}

 // calling
 a()
 b()
 c();

// performingn some task
function green(name ,age) {
    console.log("hello"+ name+' '+age);
    return name+age
}
let 
 =green('danish',20)

console.log(first);
// calculating 
function square(number) {
    return number*number
}
let number =square(2)
console.log(number);

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
 };

 

// exercise ( area of a circle)

const circle = {
    radius: 1,
    get area(){
        return Math.PI*  this.radius * this . radius;
    }
}
  console.log(circle.area);


  // ====>> sumaru

 //  function that return a value
 //  Anonymous
 //  Default paramater
 //  Rest parameter
 //  Arrow Function
 //  callback functions 
 // 
 // //---------(  pull from github by udemay cours )------------------//
 //  

/*Add commentMore actions
 * Anonymous function (function expression)
 * @scenario
 * 1. function (without name is assigned to a variable)
 * 2. function with name is assigned to a variable
 * 
 * @usage
 * In callback context (a funtion requires another function at its argument)
 * 
 


// 1. function (without name is assigned to a variable)

// let addTwoNum = function (num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// console.log(typeof addTwoNum);
// let val = addTwoNum(2, 2)
// console.log(val);


// 2. function with name is assigned to a variable
let sumFn = function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}

// addTwoNum(2,2)
let val = sumFn(2,2)
console.log(val);

Add commentMore actions
 * Arrow functions 
 * 
 * @scenario
 * 1. Convert a normal function to arrow funtion
 * 2. No param
 * 3. Single param
 * 4. More than one param(single and more than one statements)
 * 5. forEach() method example
 

// 1. Convert a normal function to arrow funtion

  let sum = (num1, num2) => num1 + num2;
    

  let total = sum(2, 2)
  console.log(total);

//  2. No param
// let arrowFn = () => 10 > 5
// let res = arrowFn()
// console.log(res);


// Single param
// let greet = name => console.log(`Hello, ${name}!`)
// greet("Rob")Add comment

Add commentMore actions
 * How callback functions works?
 

// Simple function that prints the given message
function printMsg(msg) {
    console.log(`Calling the callback function...`);
    console.log(msg);
}

function greet(name, greeter){
    console.log('Calling the main function....');
    let greetMsg = `Hello, ${name}` // Action of Asyn operations
    return greeter(greetMsg) // The processed value will be ATTACHED  to the callback function
}

// calling

// Option 1: 
// greet("Rob", printMsg)

// Option 2: 
// greet("Rob", function(val){
//     console.log(`The received value from the main function: ${val}`);
// })

// Option 3: 
let res = greet("Rob", (res) => {
    return `The received value from the main function: ${res}`
})
console.log(res);
/*
 * Understanding return statement in callback functions
 
Add comment

Add commentMore actions
 * Callback function - intro
 

function a() {
  console.log("function a...");
}

function b() {
  setTimeout(() => {
    console.log("function b...");
  }, 2000);
}

function c() {
  console.log("function c...");
}

// calling
a()
b()
c()

More actions
/*
 * Function as object - how?
 * 
 

 function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}


console.log(addTwoNum.length); // Return the number of args -> 2
console.log(addTwoNum.toString()); 

More actions
/**
 * Function as object - how?
 * 
 

 function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}


console.log(addTwoNum.length); // Return the number of args -> 2
console.log(addTwoNum.toString()); 

More actions
/*
 * Named function
 * @definition
 * Function that has a name/identifier
 * 
 * @scenario
 * 1. function that returns a value
 * 2. function that does an action
 * 3. Calling function
 * 4. Any type of data can be provided and no type checking is done
 * 5. More or less args can be provided and - 
 *    no check is performed on # number of parameter(s) Vs Number of args received
 * 6. Function name and typeof Operator
 *
 

// 1. function that returns a value
function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}

// 2. function that does an action
 function click(ele) {
     console.log(`Clicking the given ele: ${ele}`);
     // ele.click()
 }

 // 3. calling
let total = addTwoNum(5,5)
console.log(total);
click("loginBtn")

// 4. Any type of data can be provided and no type checking is done
// let total = addTwoNum("five", "five")
// let total = addTwoNum()
let total = addTwoNum(5, 5, 5)

console.log(typeof addTwoNum);
console.log(typeof addTwoNum(2,2));
Add comment

More actions
/*
 * Named function
 * @definition
 * Function that has a name/identifier
 * 
 * @scenario
 * 1. function that returns a value
 * 2. function that does an action
 * 3. Calling function
 * 4. Any type of data can be provided and no type checking is done
 * 5. More or less args can be provided and - 
 *    no check is performed on # number of parameter(s) Vs Number of args received
 * 6. Function name and typeof Operator
 *
 

// 1. function that returns a value
function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}

// 2. function that does an action
 function click(ele) {
     console.log(`Clicking the given ele: ${ele}`);
     // ele.click()
 }

 // 3. calling
let total = addTwoNum(5,5)
console.log(total);
click("loginBtn")

// 4. Any type of data can be provided and no type checking is done
// let total = addTwoNum("five", "five")
// let total = addTwoNum()
let total = addTwoNum(5, 5, 5)

console.log(typeof addTwoNum);
console.log(typeof addTwoNum(2,2));
Add comment

More actions
/*
 * Real time use of callback function using fetch npm package
 * 
 * @scenario
 * Get the api response
 * 
 * @url
 * https://api.github.com/users/github
 * 
 * @pointsToRemember
 * 1. Look at the documentation and see if they support promise
 * 2. Understand the order in which the callback function attaches the processed value
 * 
 

const fetchUrl = require("fetch").fetchUrl;


function getAPIRes(){
  fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
    console.log(body.toString());
  });
}

getAPIRes()*/














































