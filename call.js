// Using a function into multiple objects

let student1 = {
    name: 'Aishik',
    totalMarks(...marks) {
        return `${this.name}: ${marks.reduce((x,y)=>{
            return x+y
        },0)}`
    }
}

console.log(student1.totalMarks(10,20,30,20))

let student2 = {
    name: 'Bhat'
}

console.log(student1.totalMarks.call(student2, 10,40,12,14))



// In apply we pass the params in array
console.log(student1.totalMarks.apply(student2, [10,40,12,14]))