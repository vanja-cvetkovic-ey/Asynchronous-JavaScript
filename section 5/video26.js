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
    throw new Error("Something went wrong");
    return calculateSquare(3);
  })
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log("error happened:" + reason);
    }
  );

calculateSquare(1)
  .then((value) => {
    console.log(value);

    return calculateSquare(3);
  })
  .then((value) => {
    throw new Error("Something went wrong");
    console.log(value);
  })
  .then(undefined, (reason) => {
    console.log("error happened: " + reason);
  });

// it si common to handle errors in a separate block that there is even a special method for this case --- .catch()
// a catch() only handles rejection cases
// it takes one argument, which is often rejected function and returns a promise

calculateSquare(1)
  .then((value) => {
    console.log(value);

    return calculateSquare(3);
  })
  .then((value) => {
    throw new Error("Something went wrong");
    console.log(value);
  })
  .catch((reason) => {
    console.log("error happened: " + reason);
  });

// promise return by that method becomes rejected in two cases, either through an error or some functin
