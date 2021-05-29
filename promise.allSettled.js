// Problem with promise.all
let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Promise 1');
    }, 1000)
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Promise 2');
    }, 500)
})

let myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject('Promise 3');
    }, 800)
})

// with any on the promises returning reject we will not get response for any of the two sussessfull promises

Promise.all([myPromise1, myPromise2, myPromise3])
    .then(data => console.log(data))
    .catch(err => console.log(err))


Promise.allSettled([myPromise1, myPromise2, myPromise3])
    .then(data => console.log(data))
    .catch(err => console.log(err))