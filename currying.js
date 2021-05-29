// Breaking a function with multiple parameters into multiple funtions with single parameter
// Special type of closure

function multiply(num1, num2) {
    return num1*num2;
}

const multiplyByNum = function fun(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

//console.log(multiply(2,3));

let multiplyByTwo = multiplyByNum(2);
let multiplyByThree = multiplyByNum(3);

//10 years later

console.log(multiplyByTwo(4));
console.log(multiplyByTwo(5));
console.log(multiplyByThree(7));
console.log(multiplyByThree(2));