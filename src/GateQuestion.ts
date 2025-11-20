//this is for question 8

type typeGuard = number | boolean| string;

const checkType = (value:typeGuard):typeGuard=>{

    return   typeof value == "number" ? value * 2 : typeof value == "string" ? value.toUpperCase()  : !value;
}

console.log(checkType(10))
console.log(checkType('didier'));
console.log(checkType(true));



//Question 9

interface Config {
    apiUrl : string;
    timeout : number
}

const  config : Readonly<Config>={
     apiUrl : "https://api.example.com",
     timeout:  5000
}

console.log(config);


// The task number 12 never type 


