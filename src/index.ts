// const anchor = document.querySelector("a");

// console.log(anchor);


// let arr = [2,3,4,6,4,6,7,0];
// console.log(arr);



//Learning type variable 

// function checkParameter <t>(value:t):t{

//      return value;
// };

// console.log(checkParameter(45));


// //learning union check

// function checkUnion (param:unknown){
// console.log(param);

// }

// console.log(checkUnion('didier'));



// //any type 

// let number : unknown;

// number = 'didier';
// number = 10;

// console.log(number);


// //checking property in object and return something 

// interface mow  {
//   name : 'didier';
//  greet: ()=> void;
// }

//  interface greet{
//     name : 'rukundo';
//     greet: ()=> void;
//  }




//learning type annotation with code academy


function proclaim(status = 'not ready...', repeat = 1) {
   for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
   }
}

proclaim();
proclaim('ready?');
proclaim('ready!', 3);


//function void 

type checkfunction = (name: string) => void;
function sayHi(name: string, check: checkfunction) {
   return check(name);
}

function str(name: string) {
   console.log(name.toUpperCase())
};
console.log(sayHi('didier', str))

