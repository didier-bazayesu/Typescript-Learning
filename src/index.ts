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

