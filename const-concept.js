//objects declared as const can not be reassigned by values within the object can be changed

const details = {
    name: 'Aishik'
}

// Allowed operations

details['age'] = 28;
details['address'] = 'Kolkata';
delete details.name;

console.log(details);

// Not allowed
details = {};

console.log(details);

// Important concept - JS is run by V8 engine which is an interpreter and not a compiler, so it does not throw any compilation error.
// Error only orrurs when we run the code