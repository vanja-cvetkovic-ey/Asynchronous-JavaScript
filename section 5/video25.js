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
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(3);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(4);
  });
