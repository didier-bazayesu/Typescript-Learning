"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("emmanuel");
function sayHello(value) {
    console.log("hello didier How are you!");
}
let Person = class Person {
};
Person = __decorate([
    sayHello
], Person);
;
console.log(Person);
class Animal {
}
;
class Dog extends Animal {
}
;
function getDogs() {
    return new Dog();
}
;
let numberOfDogs;
numberOfDogs = getDogs;
let getOfDogs;
function sumOfDogs(animal) {
    console.log(new Animal());
}
getOfDogs = sumOfDogs;
let object = {
    a: 2,
    b: 4
};
let n = "a";
console.log(n);
console.log(getOfDogs);
console.log(numberOfDogs);
//# sourceMappingURL=tupple.js.map