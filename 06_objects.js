const person = {
    name : "Vlad",
    age : 25,
    isProgrammer : "almost",
    languages : ["Eng", "Ua"],
    // "complex key" : "Complex Value",
    // ["key_" + (1 + 3)] : "Computed Key",
    greet() {
        console.log("Hi!");
    },
    info(){
        // console.log("this:", this)
        console.info("Інформація про людину по імені: ", this.name)
    }
}

// tryLogger2 = {
//     withWordsIn( begining = false, middle = false, ending = false) {
//             if (begining){
//                 console.log("-----------Begining-------------");
//             }
//             Object.keys(this).forEach( (key, index, array) => {
//                 console.log(key, this[key])
//                 if (middle && index != array.length - 1){
//                     console.log("xDxDxDxDxDxDxDxDxDxDxDxDxDxD");
//                 }
//             });
//             if (ending){
//                 console.log("--------------END------------------")
//             }
//     }
// }
// tryLogger2.withWordsIn.call(person, true, true, true);


// const {name: v, age: years, languages: speak} = person;
// person.greet();

// console.log(person.name);

// console.log(person.age);
// console.log(person["complex key"]);
// console.log(person["key_4"]);
// person.age++;
// person.languages.push("KEKW");

// delete person["key_4"];
// console.log(person);

// const name = person.name;
// const age = person.age;                      не вірний спосіб
// const languages = person.languages;

// const {name: momCalledMe, age: personAge, languages = "not learned"} = person
// console.log(person);

// for (let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log("key: ", key);
//         console.log("value: ", person[key]);
//     };    
// }

// Object.keys(person).forEach((key) => {
//     console.log("key: ", key);
//     console.log("value: ", person[key]);
// })


//                                                                  Контекст

// person.info();

// const logger = {
//     // keys(){
//     //     console.log(Object.keys(this));
//     // },

    // keysAndValues() {                               // Стрілочні функціїї НЕ СТВОРЮЮТЬ ВЛАСНИЙ КОНТЕКСТ
    //     Object.keys(this).forEach((key) => {
    //         console.log(key, this[key]);
    //     })
        // const self = this;
        // Object.keys(this).forEach(function(key)  {
        //     console.log(key, self[key]);
        // })
        // Object.keys(this).forEach(function(key) {
        //         console.log(key, this[key]);
        //     }.bind(this))
    // },

//     withParams(top = false, between  = false, bottom  = false){
//         if (top){
//             console.log("-----------START-----------");
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(key, this[key]);
//             if (between && index !== array.length -1){
//                 console.log("----------------------");
//             }
//         })
//         if (bottom){
//             console.log("-------------END--------------")
//         }
//     }

// }
// logger.keysAndValues.call(person);
// logger.withParams.call(person, true, true, true);
// logger.withParams.apply(person, [true, true, true]);


// const bound = logger.keys.bind(logger);
// const bound = logger.keys.bind(person);
// bound();

// logger.keys.call(person);