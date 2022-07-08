// async/await is a syntatic ffeature of programming languages that allows an asynchronous function to be structured in a way similar to an ordinary synchronous function

// async function f() {} - always return a promise and if such a function returns a value and that is not a promise then JS automatically drops it into a promise - JS will automaticaly create a promise around that value. It would be resolved promise with that same value

async function f() {
  return "hello world";
}

///if a async function returns somethign that is already a promise, then Javascript wont make any transformation on it.

async function fPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(resolve);
      resolve(true);
    }, 1000);
  });
}
fPromise();

async function fReject() {
  return Promise.reject(404);
}

fReject();
