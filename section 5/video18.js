const myPromise = new Promise(function (resolve, reject) {
  //initaly myPromise is in pending state and you should invoke resolve function in order to transfer the promise to the fulfilled state or you should invoke reject functin in order to transfer the promise to reject state
  //   resolve("value");
  //   reject("reason");
}); // the promise constructor takes only one argument and this is a function. This argument is required and you cannot create a promise without it. This unction is called executer and it is invoked at that very moment when we create a promise.

console.log(myPromise);
