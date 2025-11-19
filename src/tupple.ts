// // let array:[string,number];

// // array = ['didier',23,]



// function changeInput(str:number|string){

//    if(typeof str == 'string'){
//    return  str.length
//    }else
//    {

//     return str+=46;
//    }

// }

// console.log(changeInput(6666));

// type addnumber = (a:number,b:number)=> string;

// // let greet = (a:number,b:number)=> string;

// // greet = (num,str)=>  'hello';

// let functionSignature:addnumber = (num1,num2)=>{

//    return '1'+ num1+num2;
// }

// console.log(functionSignature(203,3045))


console.log("emmanuel")




//understanding and learning Decorator in typescript 

function sayHello(value: Function){
    console.log("hello didier How are you!");
}

@sayHello

class Person {
};

console.log(Person);


//understanding covariance




//real example for covarince 

class Animal {

};
class Dog extends Animal {

};

function getDogs(): Dog {
    return new Dog()
};

let numberOfDogs : ()=> Animal;

numberOfDogs = getDogs;  // Dog type is also included in Animal so can be used any where 
                        //animal can work


//contravariance 


let getOfDogs: (dog:Dog) => void;
function  sumOfDogs (animal : Animal){
    console.log(new Animal());
}

getOfDogs = sumOfDogs;


//Why is this a problem: const obj = { a: 1, b: 2 }; type Keys 
// = keyof typeof obj; What's the difference
//  between typeof obj and just writing the type directly?

//example

let object = {
    a:2 ,
    b: 4
};

type checking = keyof typeof object;
let n : checking = "a";
console.log(n);

console.log(getOfDogs);
console.log(numberOfDogs);