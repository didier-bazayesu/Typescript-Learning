"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExactValue;
(function (ExactValue) {
    ExactValue[ExactValue["Monday"] = 0] = "Monday";
    ExactValue[ExactValue["Tuesday"] = 1] = "Tuesday";
    ExactValue[ExactValue["wensday"] = 2] = "wensday";
})(ExactValue || (ExactValue = {}));
let dressCode = ExactValue.Monday;
console.log(dressCode);
let num = true;
console.log(num);
let string;
string = 45;
console.log(string);
let x;
console.log(x);
let myObject = {
    name: 'didier',
    ages: 34,
    isSingle: true,
};
console.log(myObject);
function checkType(str, st1) {
    return st1;
    ;
}
console.log(checkType('didier'));
let person = {
    didier: 'didier',
    greet: function () {
        console.log(this.didier);
    }
};
console.log(person);
class Persons {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hello world");
    }
}
let n = new Persons('didier');
console.log(n);
let obj = {
    name: 'didier',
    ages: 45
};
console.log(obj);
let object = {
    name: 'didier',
};
console.log(object);
let school = {
    name: "Group scolaire Nawe "
};
let home = {
    name: "Huye"
};
console.log(home);
function handleGeneric(val) {
    console.log("value:", val);
}
console.log(handleGeneric([1, 2, 3, 4, 5, 6, 7]));
function changeInheritis(value) {
    console.log(value);
}
console.log(changeInheritis());
let handleTown = {
    name: "karongi",
    location: "krng0023N0383",
    load: "RD0346"
};
console.log(handleTown);
function handleGenericInterface(value) {
    console.log(value);
}
let objss = {
    name: 'canada',
    location: 'didier',
    load: "RD0346"
};
console.log(handleGenericInterface(objss));
function handleMeal(value) {
    return value;
}
console.log(handleMeal(56));
//# sourceMappingURL=index.js.map