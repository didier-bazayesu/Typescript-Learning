function checkType(str:number|string|boolean){

  if(typeof str === 'string') return str.toLocaleUpperCase();
  return str= true;
}

console.log(checkType('didier'))


//on array 

let array: [String, number] = ['dider', 3];

array.push(5);
console.log(array);

//creating default array

let nameContainer = [2, 'didier',false]
nameContainer.push(true)
console.log(nameContainer);


// object 

// type shape = {
//   name : string,
//   age : 30,
//   greet : ()=> number,

// }

// let house = {

//   room : 3,
//   color : 'white',
//   isCold : true
// }

// let houses = {
//   room:3,

//   color: 'red',
//   isCold : false
// }

//explicit on array

let numberArray : number[];
numberArray = []
numberArray.push(34646);
