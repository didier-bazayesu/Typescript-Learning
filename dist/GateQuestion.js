"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkType = (value) => {
    return typeof value == "number" ? value * 2 : typeof value == "string" ? value.toUpperCase() : !value;
};
console.log(checkType(10));
console.log(checkType('didier'));
console.log(checkType(true));
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
console.log(config);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
function getColorCode(color) {
    return typeof color == "string" ? Infinity : color;
}
console.log(getColorCode(Color.Red));
//# sourceMappingURL=GateQuestion.js.map