/*function properties (radius) {
    return{
        radius,
        draw(){
            console.log("draw");
        }
    }
    
};
 const circle =  properties(1);
 console.log(circle);

 //constructor function
 function Circle1(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }    
 };*/

 // factory functuin
 // dynamic natur of obj
 // valu and reference
 // enumerating properties of an object

 function circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }    
 }; 

 circle.call({},1)
 circle.apply({},1)
 //cloning an object
 //garbage collection
 // math 
 // sting 
 // template
 // date
 // 

 //exercise
 let address = {
    street: "a",
    city: "b",
    zipcode: 'c',

 }
 function showaddress(address) {
    for (let key in address){
        console.log(key,address[key] );
    }  
 }
 showaddress(address);
 //exercise
 //exercise
 //exercise
 //exercise


