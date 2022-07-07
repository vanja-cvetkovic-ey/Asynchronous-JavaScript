// function calcSquare(numb, cb) {
//   setTimeout(() => {
//     if (typeof numb !== "numb") {
//       throw new Error("number");
//     }
//     const result = numb * numb;
//     cb(result);
//   }, 1000);
// }

// try {
//   calcSquare("bad argument", (result) => {
//     console.log(result);
//   });
// } catch (error) {
//   console.log("caught error" + String(error));
// }

function calculateSquare(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number will be expected"));
      return;
    }
    const result = number * number;
    callback(result);
  }, 1000);
}

calculateSquare(2, function (error, result) {
  if (error !== null) {
    console.log("caught err" + String(error));
    return;
  }
  console.log(result);
});
