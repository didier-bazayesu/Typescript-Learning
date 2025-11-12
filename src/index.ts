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

 let x : undefined|number;
 x = 20;
console.log(x)