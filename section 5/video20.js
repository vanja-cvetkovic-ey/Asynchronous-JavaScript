const myPromise = new Promise(function (resolve, reject) {
  resolve("hello world");
});
// promise object has a couple of methods that we can use in order to access promise value and promise staus
// one of these is then method .then() which takes two arguments:
//onFulfilled - which will be called when the promise is fulfilled and takes only one argument and has only one argument --- the fulfillment value
// onRejected function will be called if the promise is rejected  and has only one argument --- the rejectmen reason

myPromise.then((value) => {
  console.log("this is inside the onFulfilled function");
});

// with providing unfulfilled and rejected functions, we are kind of subscribing to the result of the promise
// those functions will be called async after the promise becomes fulfileld or rejected
// they are added to the message queue and willl be executed only after the call stack becomes empty

console.log("this is writen after myPromise.then");
