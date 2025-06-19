/*let color=["red" , "blue"]
color[2]="green",1
console.log(color[0]);
console.log(color.length);*/


/*const number = [3,4]

// end of array
number.push(5,6)

//begining 
number.unshift(1,2)

// middle 
number.splice(2,0)
console.log(number);

// index of array 
console.log(number.indexOf(1));
console.log(number.lastindexOf(1) !== (2))*/


/*const course = [
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


/* // removing element 

 const number = [1,2,3,4,5];
 // fron end
 const last = number.pop()

 // in begining
 const first = number.shift()

 // middle
 number.splice(2,2);
 console.log(number);*/

/* // combining 
 const first=[1,2,3]
 const second=[4,4,6]

 const combined = first.concat(second)
 const slice = combined.slice(2,3);

 console.log(combined);
 console.log(...first,...second);

 cnsole.log(slice);*/

 //--------------------( sorting of array )-------------------//
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
 
 



