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
        return resolve('Promise 3');
    }, 800)
})

// with then catch

Promise.all([myPromise1, myPromise2, myPromise3])
    .then(data => console.log(data))
    .catch(err => console.log(err))

// with await
async function handlePromise() {
    let data = await Promise.all([myPromise1, myPromise2, myPromise3]);
    console.log(data)
}
handlePromise();