
// (Q . 1) index of array 
/**console.log(number.indexOf(1));
console.log(number.lastindexOf(1) !== (2))*/


 //(Q . 2) removing element 
 /*const number = [1,2,3,4,5];
 // fron end
 const last = number.pop()

 // in begining
 const first = number.shift()

 // middle
 number.splice(2,2);
 console.log(number);*/


 //(Q . 3) sorting of array 
 /*const course = [
    { id: 1, name: "node.js"}
    {id: 2, name: "javascript"}
 ]
 course.sort(function(a,b){
    // a< b => -1
    // a > b  => 1 
    //  a == b => 0
  
    if(a.name<b.name) return -1

 })*/


// (Q . 4) removing element
 /*const number = [1,2,3,4,5];
 // fron end
 const last = number.pop()

 // in begining
 const first = number.shift()

 // middle
 number.splice(2,2);
 console.log(number);
//  (Q)emtying an array


//  (Q . 5)combining and slicing array
/*
 const first=[1,2,3]
 const second=[4,4,6]

 const combined = first.concat(second)
 const slice = combined.slice(2,3);

 console.log(combined);
 console.log(...first,...second);

 cnsole.log(slice);*/


// (Q . 6)the spread operator 


//(Q . 7) iteart an array


//(Q . 8) joining array
/*
 const first=[1,2,3]
 const second=[4,4,6]

 const combined = first.concat(second)
 const slice = combined.slice(2,3);

 console.log(combined);
 console.log(...first,...second);

 cnsole.log(slice);*/


//testing the element of an array


 //filtering Array


 //mapping an array


 // reducing
 /*const numbers = [1, -1,2,3];
 let sum = 0;
 for (let n of number)
    sum+=n;
    console.log(sum);
    number.reduce((accumulator , currenvalue) => {
        return accumulator + currenvalue;
    })
 

 //    ====> Arrays operations 


// 1 . push (add element at end)
 let lang = ["java", "php","js"]
 lang.push("rubby")
 console.log(lang);

// 2 . pop   (remove element at end)
let number1 = [1,2,3,4,5]
number1.pop();
console.log(number1);

// 3 . shift  (remove element at front)
let number2 = [1,2,3,4,5]
number2.shift();
console.log(number2);

// 4 . unshift (add element at front)
let number3 = [1,2,3,4,5]
number3.unshift(0);
console.log(number3);

// 5 . lenght  (check lenght)
let number = [1,2,3,4,5]
console.log(number.length);

// 6 . splice  (add and remove element at spefic place)
let animals = ["dog", "cat", "fish", "bird"]
animals.splice(1,1 ,'bear')
console.log(animals);

// 7 . concat  (combine the two array and make a new one)
let number4 = [1,2,3,4,5]
let number5 =[6,7,8,9,0]
number4.concat(number5)
let combin = console.log(number);
console.log(combin);

// 8 . index  (check te index of array)
let animals1 = ["dog", "cat", "fish", "bird"]
animals1.indexOf('cat')
console.log(animals1);

// 9 . include (find a specefic array)
let animals2 = ["dog", "cat", "fish", "bird"]
let whole = animals2.splice(1,1 ,'bear')
console.log(whole);

//10 . foreach (print all elements)
let n = [1,2,3,4,5,6,7,8,9]
n.forEach((e) => {
    console.log(e);
})


    =====>>  Summary

 //----------------------------( topics of array )-----------------------//

 // add element
//finding element
//arrow function
//removing element
//emtying an array
//combining and slicing array
// the spread operator 
// iteart an array
// joining array
//testing the element of an array
 //filtering Array
 //mapping an array
 // reducing

 //--------------- Arrays operations -------------------//
// 1 . push (add element at end)
// 2 . pop   (remove element at end)
// 3 . shift  (remove element at front)
// 4 . unshift (add element at front)
// 5 . lenght  (check lenght)
// 6 . splice  (add and remove element at spefic place)
// 7 . concat  (combine the two array and make a new one)
// 8 . index  (check te index of array)
// 9 . include (find a specefic array)
//10 . foreach (print all elements)
 
                    
    {
        id : 1, name: 'a'
    },
    {
        id: 2, name : 'b'
    }
]
const course = course.findIndex(function(course)){
    return course.name ==="xyz";

}
 console.log(course);*/
 


//---------(  pull from github by udemay cours )------------------//

/*"use strict";

/**
 * Array - traversal and accessing elements
 * @scenairo
 * 1. Access an inner object property
 * 2. Acceess an inner array elementsAdd commentMore actions
 * 3. Access elements across different objects (by finding the path)
 *
 * @note
 * 1. Use [] to access an array's elements
 * 2. Use dot (.) operator for object in most cases
 *
 

// Array containing an object
let arr = [
  {
    name: "Rob",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
]

console.log(arr[1]); // prints the second obj
console.log(arr[1].age); // 30

// Array containing an array

let arr = [
  [1, 2, 3],
  ["one", "two", "three"],
];

console.log(arr[1][2]); // three


// A typical usecase of array and object

let book = [
  {
    category: "reference",
    author: "Nigel Rees",
    title: "Sayings of the Century",
    price: 8.95,
  },
  {
    category: "fiction",
    author: "Evelyn Waugh",
    title: "Sword of Honour",
    price: 12.99,
  },
  {
    category: "fiction",
    author: "Herman Melville",
    title: "Moby Dick",
    isbn: "0-553-21311-3",
    price: 8.99,
  },
];

// Get only the prices values

let priceArr = []
for(let i = 0; i < book.length; i++){
    let price = book[i].price
    priceArr.push(price)
}

console.log(priceArr);

Add commentMore actions

/**
 * Adding elements to array
 * @options
 * 1. Assignment operator
 * 2. Using .push() method
 

 let arr = ["apple", "orange", "banana"]

 // 1. Assignment operator
 arr[3] = "mango"

 // 2 . Using .push() method
 arr.push("kiwi")


// Check
console.log(arr);
console.log(`Total elements: ${arr.length}`);

More actions
/**
 * Array Intro
 *
 * @scenario
 * 1. Array are mutable
 * 2. Array are internally an Object
 

// 1. Array are mutable

let str = "Hello";
let arr = [1, 2, 3];

console.log(str.toUpperCase()); // HELLO
console.log(str);

console.log(arr.push(4));
console.log(arr); // Mutable

console.log(arr[2]); // 3
console.log(arr["2"]); // 3

Add commentMore actions
 * Array creation - different options
 *
 * @options
 * 1. Literals (most commonly used)
 * 2. Constructor function
 * 3. Object creation using new keyword
 *
 

//  1. Literals (most commonly used)
let arr = ["apple", "orange", "banana"]

// Constructor function
// let arr = Array("apple", "orange", "banana")

// Object creation using new keyword
// let arr = new Array("apple", "orange", "banana")


// Check
console.log(arr); 
console.log(`Single ele: ${arr[1]}`);
console.log(typeof arr); // Object
console.log(arr.constructor);

Add commentMore actions
 * Use of filter method
 * @usecase
 * Find elements which meets some conditions
 *
 * @returns
 * Filtered Array
 

let book = [
  {
    category: "reference",
    author: "Nigel Rees",
    title: "Sayings of the Century",
    price: 8.95,
  },
  {
    category: "fiction",
    author: "Evelyn Waugh",
    title: "Sword of Honour",
    price: 12.99,
  },
  {
    category: "fiction",
    author: "Herman Melville",
    title: "Moby Dick",
    isbn: "0-553-21311-3",
    price: 8.99,
  },
];

// Get books which are > $10
let res = book.filter(ele => ele.price > 7)
console.log(res);

Add commentMore actions
 * length property rules
 *
 * @rules
 * 1. length property returns total index + 1. This does not mean there are that many elements in that object
 * 2. length property can be set manually
 

// Rule 1
let arr = []
arr[4] = "kiwi"
console.log(arr);
console.log(`Total elements: ${arr.length}`); // 5

let count = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i]) {
        count ++
    }
}

console.log(`The actual count is: ${count}`);

// Rule 2

let arr = []
arr.length = 10
console.log(arr);
console.log(`The total elements: ${arr.length}`);

More actions
/**
 * Merge array using of spread operator
 

 let arr1 = ["apple", "orange", "banana"];
 let arr2 = ["chocolate", "biscuit", "cake"];
 
 let arr = [...arr1, ...arr2]

 console.log(arr); 
 console.log(arr.length); // 6Add comment

 Add commentMore actions
 * 2. Different type of data
 * 3. Array containing an object
 * 4. Array containing an array
 

// 1. Same type of data
let arr = ["apple", "orange", "banana"];

// 2. Different type of data
let arr = [1, "two", true]

// 3. Array containing an object
let arr = [
  {
    name: "Rob",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
];

//  4. Array containing an array
let arr = [
  [1, 2, 3],
  ["one", "two", "three"],
];

// check
console.log(arr);
console.log(`Total elements: ${arr.length}`);*/

