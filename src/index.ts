function calculateTax(income:number , taxyear:number):number{


  if(taxyear < 2022) return income * 1.2;
  income+= income  * 1.3 ;
  return income;