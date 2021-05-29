let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('works');
    }, 1000)
})

myPromise
    .then(data => data+ '!')
    .then(data1 => {
        console.log(data1)
        throw Error;
        console.log(data1)
    })
    .then(data2 => {
        return data2 + '?';
    })
    .catch(err => err)
    .then(data3 => console.log(data3)) // after catch it goes in same order but does not have the value before error, it has whatever catch block returned
