let dad = {
    age: 70,
    name: 'John',
    bankBalance: 1000,
    property() {
        return this.bankBalance;
    }
}


let son = {
    age: 40,
    name: 'Jack'
}

console.log(son.age);
// console.log(son.property) -> does not work

son.__proto__ = dad;

console.log(son.property());
console.log(son.age);