



 //----------------- topics control flow ---------------//
 //if...else/*let hour = 10 ;
/*if (hour >= 6 && hour < 12 ) {
    console.log("good morning");
    
} else if(hour >= 12 && hour <18) {
    console.log('good afternoon');
    
}else{
 console.log("goog evening");
}*/
// nested if...else
function checkgrade(score){
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
checkgrade(80);

 //switch...case
 

 //break and continue
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


 //----------------- topics control flow ---------------//
 //if...else
 //nested if .... else
 //switch...case
 //break and continue
 //max of tow number