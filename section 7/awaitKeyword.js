// await keyword is used to wait for a promise, it waits until the promise settled. it doesn't matter whether it is resolved or rejected. Await keyword doesnt matter whether it is resolved or rejected ===> the main this is that the promise is not binding anymore

function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });
}

async function f() {
  const specificNumber = await getSpecificNumber();
  console.log(specificNumber);
}

f();
