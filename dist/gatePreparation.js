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
console.log(Color.Blue);
//# sourceMappingURL=gatePreparation.js.map