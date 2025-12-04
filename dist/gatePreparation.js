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
;
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total.toFixed(2);
}
function applyDiscount(amount, discount) {
    const discountedAmount = amount - (amount * discount);
    return discountedAmount;
}
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 79 }
];
const total = calculateTotal(products);
console.log(total);
const discounted = applyDiscount(Number(total), 0.1);
console.log(discounted);
;
;
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
function getNestedValue(obj, path) {
    const keys = path.split('.');
    let value = obj;
    for (let key of keys) {
        if (value == null)
            return undefined;
        value = value[key];
    }
    return value;
}
const person = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
const updates = { age: 30, city: "Boston" };
const merged = mergeObjects(person, updates);
const street = getNestedValue(person, "address.street");
console.log(merged);
console.log(street);
function isBook(check) {
    return typeof check !== "string";
}
const items = [
    { title: "1984", isbn: "978-0451524935" },
    "Not a book",
    { title: "Brave New World", isbn: "978-0060085261" }
];
const books = items.filter(isBook);
console.log(books);
function isString(value) {
    if (typeof value == "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isString(123));
var d;
(function (d) {
    d["name"] = "didier";
    d[d["age"] = 34] = "age";
})(d || (d = {}));
console.log(d.age);
let object = {
    name: "didier",
    age: 23,
    greet() {
        console.log(this.name);
    }
};
console.log(object);
let obj = {
    name: "didier",
    age: 34,
    country: "Rwanda"
};
console.log(obj);
let mappedObject = {
    name: "didier",
    country: "Rwanda"
};
console.log(mappedObject);
let omitObject = {
    name: "didier",
};
console.log(omitObject);
let pickObject = {
    age: 34,
};
console.log(pickObject);
let keyofObject = {
    name: "mukundwa",
    age: 34,
    residence: "Rwanda",
    isAdmin: true
};
let f = {
    name: "didier",
    age: 24,
    residence: "burundi",
    isAdmin: true
};
console.log(f);
let c = true;
console.log(c);
let mycity = {
    name: "Gaseke",
    Dstrict: "Rwanda",
    population: 347474
};
console.log(mycity);
let myname = "didier bazayesu";
let newName = myname;
console.log(newName);
let fatherName = "Jeanbosco";
let number = "123";
console.log(Number(number));
console.log(fatherName);
function addd(a, b) {
    return a + b;
}
let sum = addd(1, 2);
console.log(sum);
console.log(addd("didier", " Welcome!"));
class myBluepprint {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let blueprint1 = new myBluepprint("didier", 34);
console.log(blueprint1);
let blueprint2 = {
    name: "Patrick",
    age: 64
};
console.log(blueprint2);
function logLength(value) {
    console.log(value.length);
}
console.log(logLength("didier"));
let taxObject = {
    vat: 234,
    tid: 234,
    vatName: "value added tax"
};
function checkTaxName(obj, key) {
    return obj[key];
}
console.log(checkTaxName(taxObject, "vatName"));
let name = "Didier";
let lowerCase = "didier";
console.log(name);
console.log(lowerCase);
function sub(a, b) {
    return a + b;
}
let num1 = [36464, 37474];
let num2 = 37474;
console.log(num1);
console.log(num2);
let didier = "didier";
function optionalParameter(value) {
    return value;
}
console.log(optionalParameter());
const nulloptionalObject = { name: "Didier" };
console.log(nulloptionalObject.address?.city);
class UseIndexSignature {
    amount = 2000;
    setname = "";
    greet(name, deposit) {
        this.setname = name;
        this.amount += deposit;
        console.log(`Hello ${this.setname}, your total amount is ${this.amount}`);
    }
}
const person1 = new UseIndexSignature();
person1.greet("didier", 3450);
let objectCombine = {
    name: "didier",
    age: 123,
    country: "rwanda"
};
console.log(objectCombine);
let handleArray = [1, 2, 3, 4, 5];
let newArray = [1, 2, 3, 1, 2, 3, 4];
console.log(handleArray);
console.log(newArray);
function changeMind(...value) {
    return value;
}
console.log(changeMind(1, 2, 3, 4, 4, "hey"));
//# sourceMappingURL=gatePreparation.js.map