"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(3.5, 2.5));
const myFunction = function applyOperation(a, b, operation) {
    return operation(a, b);
};
const multiply = (x, y) => x * y;
const add = (x, y) => x + y;
const devide = (x) => x - x;
console.log(myFunction(10, 5, multiply));
console.log(myFunction(10, 5, add));
console.log(myFunction(30, 30, devide));
function learningGeneric(value) {
    return value.name;
}
let object = { name: 'didier', age: 34 };
console.log(learningGeneric(object));
function returnTypes(number) {
    return number;
}
let type = returnTypes(34);
console.log(type);
//# sourceMappingURL=mentalModel.js.map