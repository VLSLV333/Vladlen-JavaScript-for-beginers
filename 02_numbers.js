//                                                  Number

// const num = 42 //integer
// const float = 42.42 // float

// console.log(float);
// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("Math.pow 53", Math.pow(2, 53) - 1); // 1 число підводиться у степінь (число яке після коми). тобто 2 у 53 степені.
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log("2 / 0", 2 / 0);
// console.log(Number.NaN) // Not a Number;
// console.log(typeof NaN); // консоль поверне "намбер"
// const weird  = 2 / undefined;
// console.log(Number.isNaN(weird)); // перевірить чи "вірд" не число
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(42));

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(Number.parseInt(stringInt) + 2);
// console.log(parseInt(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(Number.parseFloat(stringFloat) + 3);
// console.log(+stringFloat + 4);


// console.log(0.4 + 0.2);
// console.log((0.4 + 0.2).toFixed(2)); // string
// console.log(+((0.4 + 0.2).toFixed(2)));  // number
// console.log(parseFloat((0.4 + 0.2).toFixed(2))); // number



//                                                   2   BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n);
// console.log(-9007199254740991999999n);
// console.log(9007199254740991999999.21212121n); // err

// console.log(10n - 4) // err because we can not mix big int and simple numbers

// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);

//                                                 3     Math

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3));
// console.log(Math.abs(-322));
// console.log(Math.max(-322, 22, 12, 22222, 3124412421, 1));
// console.log(Math.min(-322, 22, 12, 22222, 3124412421, 1));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.5));
// console.log(Math.trunc(4.9));
// console.log(Math.random());

//                                                      4 Example

// function Vlad (max, min){
//     console.log(Math.round(Math.random() * (max - min) + 1));
// }
// Vlad (5, 1);

