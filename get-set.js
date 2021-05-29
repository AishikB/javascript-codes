let details = {
    name: 'Aishik',
    age: 28,
    get data() {
        return `${this.name} ${this.age}`;
    },
    set data(val) {
        this.name = val.name;
        this.age = val.age;
    } 
}

console.log(details.data);
details.data = {
    name: 'Jack',
    age: 31
}
console.log(details.data);
