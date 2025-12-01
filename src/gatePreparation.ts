
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




//checking the type 


interface   check {
    name : string,
    price : number
};




 function calculateTotal(items:check[]):string {
    let total:number = 0;
    for (let item of items) {
        total += item.price;
    }
    return total.toFixed(2);
}

function applyDiscount(amount:number, discount:number):number {
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




//type checking for another question
interface PersonCheck {
    name: string,
    address: {
        street: string,
        city: string
    }
};

interface  update {
    age : number;
    city : string
};


function mergeObjects(obj1:PersonCheck, obj2:update) {
    return { ...obj1, ...obj2 };
}

function getNestedValue(obj:PersonCheck, path:string) {
    const keys: string[] = path.split('.');
    let value :any= obj;
    for (let key of keys) {
        if(value == null) return undefined;
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



//  custom type prediction type  and undrstanding how check is works 

interface Book {
    title : string;
    isbn : string
}
function isBook(check:Book|string):check is Book{
  
    return typeof check !== "string";
}
const items: (Book | string)[] = [
    { title: "1984", isbn: "978-0451524935" },
    "Not a book",
    { title: "Brave New World", isbn: "978-0060085261" }
];
const books = items.filter(isBook);
console.log(books);


//other example

function isString (value:string|number):value is number{
    if(typeof value == "number"){
        return true;
    }else{
        return false;
    }
}
console.log(isString(123));


enum d {
     name = "didier",
     age = 34

}

console.log(d.age);




interface indexSignature{
    [key :string] : string| number | (()=> void)
}
let object:indexSignature = {
    name : "didier",
    age : 23,
    greet(){
        console.log(this.name);
    }
}
console.log(object);


//learning record utility type


let obj :Record<"name"|"age"|"country",string|number> = {
    name : "didier",
    age : 34,
    country : "Rwanda"
}
console.log(obj);


// understanding mapped type 


interface  mappedType{
    name : string,
    age : number
}


type makeOptional<t> = {
   [key in keyof t]? : t[key];
 
  
} 
interface  country{
    country?: string
}
let mappedObject :makeOptional<mappedType> & country = {
    name :"didier",
    country : "Rwanda"
   
} 
console.log(mappedObject)

type omit =  Omit<mappedType,"age">
let omitObject:omit ={

    name : "didier",
    
}
console.log(omitObject)
//pick
type pick =  Pick<mappedType,"age">
let pickObject :pick = {
    age : 34,
    
}

console.log(pickObject)

let keyofObject = {
    name: "mukundwa",
    age : 34,
    residence : "Rwanda",
    isAdmin : true

}

type typeKeyOfObject = typeof keyofObject;
let f :typeKeyOfObject = {
    name:"didier",
    age : 24,
    residence : "burundi",
    isAdmin : true
}
console.log(f)

type checlValue = typeKeyOfObject[keyof typeKeyOfObject];
let c : checlValue = true;
console.log(c)
let mycity  = {

    name : "Gaseke",
    Dstrict :"Rwanda",

    population : 347474

} as const;
console.log(mycity)
 

//larning type casting and type assertion

type checkMyname = string | number;

let myname:checkMyname ="didier bazayesu";

let newName = myname as string;
console.log(newName);


//type assertion
let fatherName = "Jeanbosco" as string;

//typecasting 

let number = "123"
console.log(Number(number));
console.log(fatherName);


//learning function overloading in typescript


function addd (a:number, b:number):number;
function addd(a:string, b:string): string;

//implementation

function addd(a:any , b:any){
    return a + b;
}
let  sum = addd(1,2);

console.log(sum);
console.log(addd("didier", " Welcome!"));


class myBluepprint {
    public name : string;
    public age : number;

    constructor(name :string,age:number){
        this.name = name as string;
        this.age = age
        
        
    }
}
let blueprint1 = new myBluepprint("didier", 34);
console.log(blueprint1);
let blueprint2 : myBluepprint = {
    name : "Patrick",
    age : 64
}
console.log(blueprint2)

































