const cars = ["Mazda", "Ford", "BMW", "Mercedes"];
const fib = [1, 1, 2, 3, 5, 8, 13, 21];
const people = [
    {name : "Vlad", budget : 100000000},
    {name : "Julia", budget : 20000},
    {name : "Anastasia", budget : 10000}
]

// function () // функція



// // Метод - функція яка йде після об*єкту і крапки
// cars.push("Porsche");
// cars.unshift("Toyota");


// const firstName = cars.shift();
// const lastName = cars.pop();
// console.log(lastName);
// console.log(firstName);
// console.log(cars);

// console.log(cars.reverse());
// console.log(cars);

// const index = cars.indexOf("BMW");
// console.log(cars[index]);
// cars[index] = "Audi";
// console.log(cars);



// const index2 = people.findIndex( function(person){
//         return person.budget === 20000;
// });

// const person = people.find( function(person){
//     return person.budget === 20000;
// });

                                        //  const person2 = people.find(person2 => person2.budget === 20000);

// console.log(person);
// console.log(person2);


// console.log(index2);
// console.log(people[index2]);


// let a = "";
// for (let i = 0; i < people.length; i++){
//     if (people[i].budget === 20000){
//         a = people[i];
//         console.log(a);
//     }
// }


// let foundSomeone = "";
// for (const person of people){
//     if (person.budget === 20000){
//         foundSomeone = person;
//     } 
// }

// console.log(foundSomeone);


// console.log(cars.includes("Mercedes"));


// const upperCase = cars.map( cars => cars.toUpperCase());
// console.log(upperCase);
// console.log(cars);


// const pow2 = num => num ** 2;
// const sqrt = num => Math.sqrt(num);
// const pow2Fib2 = fib.map(pow2).map(sqrt);


// console.log(fib.map(pow2));
// console.log(pow2Fib2);



// const pow2 = num => num ** 2;

// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter( num =>  num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);


// const people = [
//     {name : "Vlad", budget : 100000},
//     {name : "Julia", budget : 20000},
//     {name : "Sasha", budget : 1000}
// ]

// const budgetSum = people
// .filter(person => person.budget > 22000)
// .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
// }, 0);

// console.log(budgetSum);



// const pow2Fib = fib.map( nums => Math.pow(nums, 2));
// console.log(pow2Fib);

//                                                      1 Task
// const text = "Hi, I am learing JavaScript";
// let firstStep = text.split("");
// firstStep = firstStep.reverse();
// const answer = firstStep.join("");
// console.log(answer);

// let answer2 = text.split("").reverse().join("");
// console.log(answer2);


