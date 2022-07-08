function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }
      const resulte = number * number;
      resolve(resulte);
    }, 1000);
  });
  return promise;
}

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare("string");
  })
  .then(
    (value2) => {
      console.log(value2);
    },
    (reject) => {
      console.log("error happened: " + reject);
    }
  );
