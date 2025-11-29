"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addNumber = function applyOperation(a, b, operation) {
    return operation(a, b);
};
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(addNumber(20, 34, add));
console.log(addNumber(45, 36, multiply));
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
console.log(config);
function move(direction) {
    switch (direction) {
        case "north":
            return { x: 0, y: 1 };
        case "south":
            return { x: 0, y: -1 };
        case "east":
            return { x: 1, y: 0 };
        case "west":
            return { x: -1, y: 0 };
    }
}
console.log(move("east"));
class BankAccount {
    balance;
    constructor() {
        this.balance = 1000;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log(`the new balance is ${this.balance}`);
        return true;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`the Amount to withdraw is greater the current balance ${this.balance}`);
            return false;
        }
        else {
            this.balance -= amount;
            console.log(`the widraw done successful the new balance is ${this.balance}`);
            return true;
        }
    }
}
let n = new BankAccount();
n.deposit(500);
n.deposit(2034);
n.deposit(-345);
n.withdraw(2000);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
function getColorCode(color) {
    switch (color) {
        case Color.Blue:
            return "BLUE";
            break;
        case Color.Red:
            return "RED";
            break;
        case Color.Green:
            return "GREEN";
            break;
        default: throw new Error("Invalid color");
    }
}
console.log(getColorCode(Color.Blue));
const user = {
    name: "didier",
    age: 23,
    email: "didierbazayesu@gmail.com"
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
function formatUserTuple(user) {
    const [name, age, active] = user;
    return `${name} is ${age} Years old and is ${active ? 'active' : "inactive"} `;
}
console.log(formatUserTuple(["Alice", 28, true]));
console.log(formatUserTuple(["Bob", 35, false]));
function processValue(value) {
    return typeof value == "number" ?
        `Number value is ${value += value}` :
        typeof value == "string" ? `String value  : ${value.toLocaleUpperCase()}` : `Boolean value : ${value}`;
}
console.log(processValue(20));
console.log(processValue(true));
console.log(processValue("google"));
//# sourceMappingURL=gatePreparation.js.map