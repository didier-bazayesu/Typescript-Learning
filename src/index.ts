// const anchor = document.querySelector("a");

// console.log(anchor);


// let arr = [2,3,4,6,4,6,7,0];
// console.log(arr);



//Learning type variable 

function checkParameter <t>(value:t):t{

     return value;
};

console.log(checkParameter(45));


//learning union check

function checkUnion (param:unknown){
console.log(param);

}

console.log(checkUnion('didier'));



//any type 

let number : unknown;

number = 'didier';
number = 10;

console.log(number);


//

