// Solve all the typing issues in the code without changing the implementation
type handle = (...a:string[]) => string

 const d : handle = function concatenate(...strings) {
    return strings.join('');
}
console.log(d('Hello', 'Hi', 'Hola'));







// function processItems(items, callback) {
//     return items
//       .filter(item => typeof item === 'string' || typeof item === 'number')
//       .map(item => callback(item));
//   }

//   const result = processItems(
//     ["hello", 42, true, null],
//     function (item) {
//       if (typeof item === "string") return item.toUpperCase();
//       return item * 2;
//     }
//   );

//   console.log(result);