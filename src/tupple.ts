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
