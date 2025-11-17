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

class Animal {

};
class Dog extends Animal {

};

let dogs : Dog = new  Animal ;
let animals : Animal = dogs;

