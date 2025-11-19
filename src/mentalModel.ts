
//thefirst question

// function addNumbers(/* Params */) {
//     // Your code here
// }

// Expected Behavior:

// Input: addNumbers(5, 10)
// Output: 15
// Input: addNumbers(3.5, 2.5)
// Output: 6


function addNumbers (num1:number, num2: number):number{
   return num1+num2;
}
console.log(addNumbers(3.5, 2.5));


// the question 2

// Question 2: Description:
// Create a function that accepts either a string or a number as input and returns a message describing what type it received.Use union types to enforce this.

// Starter Code:
// function describeInput(/* Params */) {
//     // Your code here
// }


// Expected Behavior:

// Input: describeInput("hello")
// Output: "You provided a string: hello"
// Input: describeInput(42)
// Output: "You provided a number: 42"


// type check = string|number;

// function describeInput(input:number|string) {

//     return typeof input === "string" ? `You provided a number: ${input}` : `You provided a string: ${input}`;


// }
// console.log(describeInput(45));


//3

// Question 3: Description:
// Create an interface called User with properties for name(string), age(number), and email(string).Then refactor the function below to add proper types for the parameters and return type

// Starter Code:
// // Define the User interface here

// function introduceUser(user) {
//     return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
// }

// Expected Behavior:

// Input: { name: "Alice", age: 28, email: "alice@example.com" }
// Output:

// interface user {
//     name : string;
//     age : number;
//     email : string;

//     greet: ()=> void
// }


// let  users : user = {

//     name : "alice ",
//     age :  28,
//     email : 'email@gmail.com',
//     greet : function(){
//         return `Hello, my name is ${this.name}, I am ${this.age}years old, and my email is ${this.email}`;
//     }

// }

// console.log(users.greet());


//4

// Victor — 7:02 PM
// Question 4: Description:
// Create an enum called Status with values for "Active", "Inactive", and "Pending".Write a function that accepts a Status and returns a descriptive message based on the status value.

// Starter Code:

// Define the Status enum here

// function getStatusMessage(status) {
//     // Your code here
// }

// Expected Behavior:

// Input: getStatusMessage(Status.Active)
// Output: "The item is currently active"
// Input: getStatusMessage(Status.Pending)
// Output: "The item is pending review"

// enum status{

//   Active = "Active",
//   pending =  "Pending",
//   inActive = "inactive"
// }

//  function getStatusMessage(status:status):string {
//     if(status == "Active"){
//         return `The item is  currently ${status}`
//     }else if(status == "Pending"){
//         return `The item is ${status} rreview`;
//     }else {

//         return "inactives";
//     }

//  }
//  console.log(getStatusMessage(status.Active))


 //the 5 question


// Write a generic function that returns the first element of an array
// function getFirstElement(arr) {
//     //   ...
// }


// Expected Behavior:

// Input: getFirstElement([1, 2, 3])
// Output: 1
// Input: getFirstElement(["a", "b", "c"])
// Output: "a"
// Input: getFirstElement([{ id: 1 }, { id: 2 }])
// Output: { id: 1 }


//  function getFirstElement<t>(arr:t[]):t|undefined
//  {

//     return arr[0];
//  }

//  console.log(getFirstElement(['1',2,3]));




//the question 6

// Create two interfaces: Employee with properties name and employeeId, and Manager with property teamSize.Create an intersection type ManagerEmployee and write a function that describes a manager employee.

// Starter Code:

// // Define Employee interface
// // Define Manager interface
// // Define ManagerEmployee type

// function describeManagerEmployee(me) {
//     return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// }


// Expected Behavior:

// Input: { name: "Bob", employeeId: 123, teamSize: 5 }
// Output: "Bob (ID: 123) manages a team of 5 people"


// interface Employee{
//     name :string;
//     employeeId : number;
// };
// interface Manager {

//     teamSize:number

// };

// type  handletype = Manager & Employee;



// function describeManagerEmployee(me:handletype) {
//     return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// }

// console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));



// Victor — 8:02 PM
// Question 7: Description:
// Create a type alias for a function that takes two numbers and returns a number.Use this type to create a function that applies a mathematical operation to two numbers.

// Starter Code:

// // Define a missing TypeScript types

// function applyOperation(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// Expected Behavior:

// Input: applyOperation(10, 5, add)
// Output: 15
// Input: applyOperation(10, 5, multiply)
// Output: 50

type check = (num1:number, num2:number, func: Function)=> number;


const myFunction:check = function applyOperation(a, b, operation) {
    return operation(a, b);
};

const multiply:check = (x, y) => x * y;
const add :check= (x, y) => x + y;
const devide : check = (x)=> x-x;


console.log(myFunction(10,5,multiply));
console.log(myFunction(10, 5, add))
console.log(myFunction(30,30,devide));


//learning generic function and how it works in simple temrs 


function learningGeneric<t extends {name : string} >(value:t):t['name']|undefined{
    return  value.name;
}
let object = { name: 'didier', age: 34 }

console.log(learningGeneric(object))


//learning returntype parameter

function returnTypes (number:number){
     return number;
}

let type :ReturnType<typeof returnTypes> =  returnTypes(34);
console.log(type);


//understanding   basic on box and unbox in typescript


// class Box{
//     age:number = 30;
//     myNumber : object;
//   greet(){
//     this.myNumber = this.age;
//    console.log(`This is also Boxing method ${this.myNumber}`);
//   }
// }

// let Box1 = new Box();
// console.log(Box1.greet())

