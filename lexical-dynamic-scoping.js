function dynamicScoping() {
    console.log('this from scoping',this)
    let details = {
        name: 'Aishik',
        sayHi() {
            console.log('this from sayHI',this)
        }
    }
    console.log(details.sayHi())
    return details;
}

dynamicScoping();

function lexicalScoping() {
    console.log('this from scoping',this)
    let details = {
        name: 'Aishik',
        sayHi: () => {
            console.log('this from sayHI',this)
        }
    }
    console.log(details.sayHi())
    return details;
}

lexicalScoping();

// Arrow function helps us to achive lexical scoping
