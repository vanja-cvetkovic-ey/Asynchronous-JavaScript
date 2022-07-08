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

calculateSquare("string").then(
  (value) => {
    console.log("success: " + value);
  },
  (reason) => {
    console.log("Error: " + reason);
  }
);
