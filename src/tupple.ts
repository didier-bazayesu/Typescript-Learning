// let array:[string,number];

// array = ['didier',23,]



function changeInput(str:number|string){

   if(typeof str == 'string'){
   return  str.length
   }else
   {

    return str+=46;
   }

}

console.log(changeInput(6666));


let functionSignature = (num1:number,num2:number):string=>{

   return '1'+ num1+num2
}

console.log(functionSignature(203,3045))


