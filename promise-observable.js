const rxjs = require('rxjs');

// const greetingPoster = new Promise((resolve, reject) => {
//     console.log('Text inside promise');
//     resolve('Hello world!');
//   });

//   console.log('Before calling then method on Promise');

//   greetingPoster.then(message => console.log(message));

  
  const observable = rxjs.Observable.create(observer => {
    console.log('Text inside an observable');
    observer.next('Hello world!');
    observer.complete();
  });

  console.log('Before subscribing an Observable');

  observable.subscribe((message)=> console.log(message))