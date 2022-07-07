// function f(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1500);
// }

// f(() => console.log("This is a callback"));

// console.log("Hello World");

function f(callback) {
  callback();
}

f(() => console.log("This is a callback"));

console.log("Hello World");
