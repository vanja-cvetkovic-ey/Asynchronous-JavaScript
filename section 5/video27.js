// two methods that can help you to convert any JS value into a promise
function logToConsole(somePromise) {
  somePromise.then((value) => console.log(value));
}
const somePromise = new Promise((resolve, reject) => resolve("Hello"));

logToConsole(somePromise);

const value = "string";

/**
 * Convert any value to promise:
 * Promise.resolve() - convert any value to promise
 * It returns a project object that is resolved with a given value. if the value is already a promise, it will just return that promise
 */
function logToConsole1(value) {
  console.log(value);
}

const promisifiedValue = Promise.resolve(value);
logToConsole1(promisifiedValue);

/**
 * Convert any value to promise:
 * Promise.reject() - create a rejected promise with the given value
 */

const rejectedPromise = Promise.reject(value);
