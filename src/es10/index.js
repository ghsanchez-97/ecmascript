let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat());

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '                Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World        ';
console.log(hello);
console.log(hello.trimEnd());

try{

}catch{

}

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);