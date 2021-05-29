
let student1 = {
    name: 'Aishik',
    totalMarks(...marks) {
        return `${this.name}: ${marks.reduce((x, y) => {
            return x + y
        }, 0)}`
    }
}

//console.log(student1.totalMarks(10, 20, 30, 20))

let student2 = {
    name: 'Bhat'
}

let student2Marks = student1.totalMarks.bind(student2);
//console.log(student2Marks(11, 12, 31, 14))


// Manupulating this with bind

let me = {
    name: 'Aishik',
    sayName() {
        return this.name
    }
}

let obj1 = me.sayName

//console.log(obj1()) // does not work as this refers to window obj

let obj2 = me.sayName.bind(me)
//console.log(obj2()) // works

let me2 = {
    name: 'Aishik',
    sayName: () => {
        return this
    }
}

console.log(me2.sayName())

let obj3 = me2.sayName;
console.log(obj3())