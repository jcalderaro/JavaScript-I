// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => {
    console.log("Function was invoked!");
};
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };   
// anotherFunction("Example");

let anotherFunction = param => param;
anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => param1 + param2;
add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => param1 - param2;
subtract(1,2);