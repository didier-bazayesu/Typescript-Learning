function calculateTax(income:number , taxyear:number):number{


  if(taxyear < 2022) return income * 1.2;
  income+= income  * 1.3 ;
  return income;



  // 1. literal type 

  let tax : "up"| "down" | "left" | "right";

  tax = "up";

  // 2. union type 

  //the variable might have multiple type either string type or other type 

  let string : string | number | boolean= true

  //3 . custome type 

  //user defined type 

  type didier = {
    name : string ;
    age : number
    isValid : Boolean
  }

  let myObject:didier = {

    name : "didier",
    age : 23,
    isValid : true,
    
  }
}