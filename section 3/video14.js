function calculateSquare(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

calculateSquare(1, (error, result) => {
  console.log(result);
});
calculateSquare(2, (error, result) => {
  console.log(result);
});
calculateSquare(3, (error, result) => {
  console.log(result);
});

calculateSquare(1, (error, result) => {
  console.log(result);
  calculateSquare(2, (error, result) => {
    console.log(result);
    calculateSquare(3, (error, result) => {
      console.log(result);
      calculateSquare(4, (error, result) => {
        console.log(result);
        calculateSquare(5, (error, result) => {
          console.log(result);
          calculateSquare(6, (error, result) => {
            console.log(result);
          });
        });
      });
    });
  });
});
