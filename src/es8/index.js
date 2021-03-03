const data = {
    frontend : 'Guy',
    backend : 'Isabel',
    design : 'Ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
/////////////

const data = {
    frontend : 'Guy',
    backend : 'Isabel',
    design : 'Ana',
}
const values = Object.values(data);
console.log(values);
console.log(values.length);
///////////////

const string = 'Hello';
console.log(string.padStart(8,'hi '));
console.log(string.padEnd(12,' -----'));
console.log('food'.padEnd(12, ' -----'));