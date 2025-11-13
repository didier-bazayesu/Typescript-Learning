//understanding enum 

const  enum  ExactValue {

   Monday ,
   Tuesday ,
   wensday
}

let dressCode :ExactValue = ExactValue.Monday;
console.log(dressCode);

type literal = string | boolean | number;

let num : literal = true;
console.log(num)

//learning literal type 

 let string : 'str1'|'str3'|'str6'|45;
 string = 45;
 console.log(string);


 //understanding the main different between null and undefined 

 let x : undefined;

console.log(x)


//defining how undefined triggered as optional property ;
type checkobject ={
   name : string ;
   ages : number 
   isSingle : boolean;
   hobby? : any;
}

let myObject : checkobject = {
   name : 'didier',
   ages : 34,
   isSingle: true,
   
}

console.log(myObject);


//understanding default parameter and optional chaining

function checkType (str:string,st1?:string){
    return  st1;
    ; 
   
}
console.log(checkType('didier'))


// learning and understanding interfaces 

interface dengo {
   [index:string] : string | (()=> void),
   greet:()=> void
}

let person :dengo  = {
   didier : 'didier',
   greet: function(){
      console.log(this.didier)
   }
}
console.log(person)

class Persons  {
   name : string;
   constructor(name:string){
      this.name = name;
   }
   greet(){
      console.log("hello world");
   }
}
let n = new Persons('didier');
console.log(n)

//intersection type 

type prop1 = {
   name : 'didier',
}
type prop2 = {
   ages : number
}

let obj : prop1  | prop2 = {
   name : 'didier',
   ages : 45
}
console.log(obj)


// partial utility type 


interface partailUtility{
   name : string ;
   ages : number
}
type requtility = Partial<partailUtility>;

let object : requtility = {
   name : 'didier',
}
console.log(object)

// understanding pick type 

type pickType = Pick<partailUtility,"name">
let  school :pickType  = {
   name : "Group scolaire Nawe "
} 

//understanding typeof type operator in typescript

  type strings = typeof school 
  let home :strings = {
   name : "Huye"
  }
  console.log(home);


  //creating generic data type

  //single generic parameter 
  function handleGeneric<v>(val:v):void{
      console.log("value:", val)
  }

  console.log(handleGeneric([1,2,3,4,5,6,7]));

  //generic with optional parameter 


  //interface inheritance 

  interface handleInherit {
   name : string ,
   ages : number ,
   student_id : number
  }
  interface  inheritis extends handleInherit{
   account_id: number 
  }

  function changeInheritis <t extends handleInherit | inheritis>(value ?: t) : void{

    console.log(value);
  }

  console.log(changeInheritis())

  //understanding generic interface 