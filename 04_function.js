//                                                  1 Function



// greet("Vlad");
// greet2("Hoh");   // --- дивись консоль


// Function declaration: --- може бути викликана будь-де в документі, навіть перед тим, як була задекларована
// function greet (name){
//     console.log("Hi -", name);
// }

//Function expression: --- якщо буде викликана перед оголошенням, то не буде функціонувати 
// const greet2 = function greet2(name){
//     console.log("Hi -", name);
// }

// console.log(typeof(greet));
// console.dir(greet); --- функції це об*єкти

//                                                 2   Анонімні функції   ----- function() - aнонімна, бо не має назви
// counter = 0;
// const Vlad = setInterval( function(){
//     if (counter !=5){
//     console.log(++counter)  
//     } else {
//         clearInterval(Vlad); // clearTimeout
//     }
// }, 1000);

//                                                 3 Стрілочні функції

// const greet = function greet(name){
//         console.log("Hi -", name);
//     }

// const arrow = (name) => {console.log("Hi -", name)};

// arrow("Vlad");

// const arrow2 = name => console.log("Hi -", name);
// arrow2("Vlad");

// const pow2 = num => num ** 2;
// console.log(pow2(5));

//                                                4 Параметри по замовчанню

// const sum = (a = 2, b = a * 3) => a + b;

// console.log(sum(2,5))
// console.log(sum(3))
// console.log(sum(5, 10))
// console.log(sum())

// function sumAll (...all){
//     let result = 0;
//     for (let num of all){
//         result += num;
//     }
//     return result;
// }

// const v = sumAll(1,2,3,4,231,52,122,-300);

// console.log(v);

//                                            5 Замикання  --- зазвичай застосовуються для збережння даних в бібліотеках

function createMember (name){
    return function(lastName){
        console.log(name + lastName);
    }
}

const accesToLastName = createMember("Vlad ");
// console.log(accesToLastName);

accesToLastName("Sherstiuk");
accesToLastName("Sidorenko")
createMember("Julia ")("Happy");