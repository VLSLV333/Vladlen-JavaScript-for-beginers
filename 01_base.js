//                                                                    1 Переменные

// var name = "Vlslv";

// let age = 25;
// const vrivshik = true;

// const if = true // err, because if is a keyword;
// const smth5 = 5;
// const 5smth = 5; // err, because cannot beggin with a number;

//                                                                     2 Мутирование

// console.log("Person's last name: " + lastName + " , his age is " + age);
// alert("Person's last name: " + lastName + " , his age is " + age);

// const lastName = prompt("Insert last name");
// alert(age + " " + lastName);


//                                                                     3 Операторы

// let currentYear = 2022;
// let birthYear = 1997;

// const a = 10;
// const b = 5;

// const age = currentYear - birthYear;
// console.log(currentYear++);
// console.log(currentYear);
// console.log(++birthYear);

//                                                                      4 Типы данных

// const vrivshik = true;
// const name = "Vlslv";
// const age = 20;
// let x
// console.log(typeof vrivshik);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

//                           5 приоритет операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const fullAge = 26
// let currentYear = 2022;
// let birthYear = 1997;

// const isFullAge = currentYear - birthYear >= fullAge; // 25 > = 26
// console.log(isFullAge);


//                                                          6 Условные операторы
// const courseStatus = "pending"; // pending, ready, fail

// if (courseStatus === "pending"){
//     console.log("Курс еще не готов");
// } else if (courseStatus === "ready"){
//     console.log("Курс готов к продаже");
// } else {
//     console.log("КУрс на минус");
// }

// const isReady = false;
// isReady ? console.log("Курс готов к продаже") : console.log("Курс еще не готов");

//                                                          7 Булевая логика

//                                                          8 Функции

// function calculateAge (year){
//     return year - 1997;
// }
// // console.log(calculateAge(1999));

// function logInfoAbout (name, year){
//     const age = calculateAge(year);
//     console.log("Name is " + name + ", his age is " + age);
// }
// logInfoAbout("Vlad", 2022);


//                                                             9 Массивы

// const cars = ["Mazda", "Mercedes", "Ford"];
// console.log(cars.length);
// console.log(cars[1]);

// cars[0] = "Porsche";
// console.log(cars);
// cars[3] = "Mazda";
// console.log(cars);

//                                                          10 Циклы
// const cars = ["Mazda", "Mercedes", "Ford", "Porsche"];

// // for(let i = 0; i < cars.length; i++ ){
// //     const car = cars[i];
// //     console.log(car);
// // }

// for (let car of cars ){
//     console.log(car);
// }


//                                                          11 обьекты

// const person = {
//     "firstName" : "Vlad",
//     "lastName" : "Shrst",
//     "year" : 1997,
//     "languages" : ["UA", "Eng"],
//     "hasWife" : true,
//     greet: function (){
//         console.log("WASSAAAP");
//     }
// }
// console.log(person.firstName);
// console.log(person["lastName"]);
// const key = "languages";
// console.log(person[key]);
// // person.hasWife = false;
// person.greet();
// person.isProgramer = "almost";
// console.log(person);


