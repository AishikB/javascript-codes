// the process of using a variable or method before it is DECLARED is called hoisting

//hoisting with vars

//what works
console.log(name);
var name = 'Aishik'

//what does not work
console.log(age);
var age;
age = 28;

// Reason -- assignment of variable is not handled by hoisting. when a var is hoisted value assigned is undefined

//hoisting with function

// what works
run();

function run() {
    console.log('running');
}

// what does not work
// walk();
// const walk = function walk() {
//     console.log('walking')
// }