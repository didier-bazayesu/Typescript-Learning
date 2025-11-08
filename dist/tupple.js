"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeInput(str) {
    if (typeof str == 'string') {
        return str.length;
    }
    else {
        return str += 46;
    }
}
console.log(changeInput(6666));
let functionSignature = (num1, num2) => {
    return '1' + num1 + num2;
};
console.log(functionSignature(203, 3045));
//# sourceMappingURL=tupple.js.map