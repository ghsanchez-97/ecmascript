const obj = {
    name : 'Guy',
    age: 23,
    country: 'NIC',
};
let { name, ...all} = obj;
console.log(all);

/////////

const obj = {
    name: 'Guy',
    age: 23,
};
const obj1 = {
    ...obj,
    country: 'NIC'
}
console.log(obj1);

////////////////////

const helloword = () => {
    return new Promise((resolve, reject) =>{
        (true)
           ? setTimeout(() => resolve('Hello World'), 3000)
           : reject (new Error('Test Error'))
    })
}
helloword()
 .then(resolve => console.log(resolve))
 .catch( error => console.log(error))
 .finally(() => console.log('Finalizo'))

 ////////////

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const match = regexData.exec('2018-09-20');
 const year = match[1];
 const month = match[2];
 const day = match[3];

 console.log(year, month, day);