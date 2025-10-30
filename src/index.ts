function checkType(str:number|string|boolean){

  if(typeof str === 'string') return str.toLocaleUpperCase();
  return str= true;
}

console.log(checkType('didier'))