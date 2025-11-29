
type handletype = (a:number, b:number, c:Function) => number;


const addNumber : handletype = function applyOperation(a,b,operation){
   return operation(a,b);
}

const add:handletype = (x,y) => x+y;
const multiply:handletype = (x,y)=> x*y ;

console.log(addNumber(20,34,add));
console.log(addNumber(45,36,multiply));


//question 9 learning to create Readony property

interface readonlyProperty {

    apiUrl : string;
    timeout : number

}

const config : Readonly<readonlyProperty> = {
    apiUrl: "https://api.example.com",
    timeout : 5000
}

console.log(config);


//understanding the literal type 

type literal = "north"| "south" | "east" | "west";


function move(direction:literal) {
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


//understanding class with type annotation



class BankAccount {

    private balance : number ;
    constructor(){
        this.balance = 1000;
    }
    deposit(amount:number):boolean{
        this.balance = this.balance + amount;
        console.log(`the new balance is ${this.balance}`);
        return true;
    }

    withdraw(amount:number):boolean{
        if(amount > this.balance){
            console.log(`the Amount to withdraw is greater the current balance ${this.balance}`);
            return false;

        }else{
            this.balance -= amount;
            console.log(  `the widraw done successful the new balance is ${this.balance}`);
            return true;

        }
    }
}

let n = new BankAccount();
n.deposit(500);
n.deposit(2034)
n.deposit(-345)
n.withdraw(2000)


enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

function getColorCode (color:Color):string |never{

    switch(color){
        case Color.Blue : return "BLUE"
        break;
        case Color.Red : return "RED"
        break;
        case Color.Green : return "GREEN"
        break
        default : throw new Error("Invalid color");
    }

}
console.log(getColorCode(Color.Blue));



//function that throws the error


//Generic function with constraints
interface User {
    name: string;
    age: number;
    email: string;
}
const user = {
    name : "didier",
    age : 23,
    email : "didierbazayesu@gmail.com"
} 
function getProperty <k extends User,t extends keyof User> (obj:k,key:t): k[t]{
    return obj[key];

}
console.log(getProperty(user,"name"))
console.log(getProperty(user,"age"));


//Understanding how tupple works 
type tuplle = [name: string, age: number, active: boolean]

function formatUserTuple(user:tuplle){
    const [name ,age,active] = user;

    return `${name} is ${age} Years old and is ${active ?  'active' : "inactive"} `;
}

console.log(formatUserTuple(["Alice", 28, true]));
console.log(formatUserTuple(["Bob", 35, false]))



//Learning type guard 

type typeGuards = string | number | boolean;

function  processValue(value:typeGuards):typeGuards{
    return typeof value == "number" ? 
    `Number value is ${value+=value}` : 
    typeof value == "string" ?  `String value  : ${value.toLocaleUpperCase()}`: `Boolean value : ${value}`
}

console.log(processValue(20));
console.log(processValue(true));
console.log(processValue("google"));
























