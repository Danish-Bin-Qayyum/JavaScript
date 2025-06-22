
//----------------- topics control flow ---------------//

 //if...else   ( Q . 1)

  /*let hour = 10 ;
/*if (hour >= 6 && hour < 12 ) {
    console.log("good morning");
    
} else if(hour >= 12 && hour <18) {
    console.log('good afternoon');
    
}else{
 console.log("goog evening");
}*/


// nested if...else  ( Q . 2)

/*function checkgrade(score){
    let grade;
    if (score>=90) {
        grade="a";
        
    }
    else{
        if (score>=80) {
            grade + "b"
        }
        else{
            if (score>=70) {
                grade='c'
            }else{
                grade='d'
            }
        }
    }
    console.log(grade);
}
checkgrade(80);*/


 //switch...case   ( Q . 3)

/*function checkday(){
     let day;
     switch (checkday) {
        case 0:
            day = "mon"
            break;
                   case 1:
            day = "tue"
            break;
              case 2:
            day = "wed"
            break;
              case 3:
            day = "thus"
            break;
              case 4:
            day = "fri"
            break;
              case 5:
            day = "sta"
            break;
              case 6:
            day = "sun"
            break;
            
        default:
            console.log("invalid");
            break;
     }
}*/
 

 //break and continue  ( Q . 4)
 /*let i =0
 while (i<=10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
     console.log(i);
     i++
 }
 //max of tow number

 let number = max(3,5)
 console.log(number);

 function max(a,b) {

        return (a>b) ? a:b
 }

======>>>>   Summary
 //----------------- topics control flow ---------------//
 //if...else
 //nested if .... else
 //switch...case
 //break and continue
 //max of tow number



//---------(  pull from github by udemay cours )------------------//

 /**Add commentMore actions
 * Conditional statements use cases:
 * 1. Just if statement
 * 2. if (!)
 * 3. if and else
 * 4. if else if - Nested
 * 5. if else [inner conditions]
 * 6. Use of if conditions in loops
 *
 */

// Use case 1: Just if - handling a ramdom popup
let popupExist = false
if (popupExist === true) console.log(`>>> Perform click action...`);

// Use case 2: Just if (NOT) - Checking for falsy value
let data = ""
if(!data) throw Error(">>> No valid data provided")

// Use case 3: if..else: If file exist read the file, else create the file
let fileExist = "N"

if (fileExist === "Y") {
  console.log(`>> Reading the file`);
} else {
  console.log(`>> Creating the file`);
}

// Use case 4: if else if ... Nested conditions... Act based on list of conditions
let err = "AssertionError"
if (err === "Error") {
    console.log(`>> Retry...`);
} else if (err === "AssertionError") {
    console.log(`>> Fail the test`);
} else if (err === "DataValidation") {
    console.log(`>> Read the test data file...`);
} else {
    console.log(`>> Print the error message`);
}


// Use case 5: If else [Inner conditions]: Quering a database for test data
let isSuccess = false
if(isSuccess === true) {
    console.log(`>> Storing the db values..`);
} else {
    console.log(`No data recived`);
    let errorCode = "ACCEPT"
    if(errorCode === "ACCEPT") {
        console.log(`>> Continue the exection...`);
    } else {
        console.log(`>> Fail the test...`);
    }
}


// Use case 6: if in loops
for (let i = 1; i <=10; i++){
    if (i === 6) break
    console.log(i);
}
console.log

/// link  :  https://github.com/copeautomation/js-essential-for-automation/commit/cc56d3a88f61da2876b336cbe06671c59d12e176