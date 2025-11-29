"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=gatePreparation.js.map