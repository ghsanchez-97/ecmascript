function newFunction(name, age, country){
    var name =  name || 'Guy';
    var age = age || 23;
    var country = country || 'NIC';

    console.log(name,age,country);
}
//es6
function newFunction2(name='Guy', age=23, country='NIC'){
    console.log(name,age, country);
}

newFunction();
newFunction2('Ricardo', '23','CO')

//////////////

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//////////////////

let lorem = 'Quiero escribir una frase o palabra genial \n' + 'Otra frase epica que necesitamos';
//es6
let lorem2 = `otra frase epica que necesitamos 
ahora es otra frase epica
`
console.log(lorem);
console.log(lorem2);

////////
let person = {
    'name' : 'Guy',
    'age' : 23,
    'country' : 'NIC'
}
console.log(person.name, person.age, person.country);
//es6

let{name, age, country} = person;
console.log(name,age,country); 

////////////

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education=['David', ...team1, ...team2]
console.log(education);

//////////

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);

/////////

var a = 'b';
a = 'a'
const b = 'c';
//b = 'b';
console.log(a, b);
//////

let name = 'Guy';
let age = 23;

obj = {
    name:name,
    age: age
}

obj2 = { name, age}

console.log(obj2);
console.log(obj);

////////

const names =[{
    name: 'Guy',
    age: 23
},{
    name:'Yesica',
    age: 27
}]
let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

//////////////

const helloPromise = () => {
    return new Promise ((resolve, reject) =>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups!!')
        }
    })
}

helloPromise()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .then(() => console.log('hola'));

//////////////

class calculator {
    constructor(){
        this.valueA = 0
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

//////////
import { hello } from './module';
hello();

/////////
function* helloWorld(){
   if (true) {
       yield 'Hello, ';
   } 
   if (true) {
       yield 'World';
   }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);