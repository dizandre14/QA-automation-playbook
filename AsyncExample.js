const makePromise = async() => {
console.log("loading...")
const value = Math.floor(Math.random() * 10) + 1;

  return new Promise((resolve, reject) => {
  
  setTimeout(() => {
    if (value > 5) {
      resolve(`Promise resolved successfully with value: ${value}`); // This will resolve the promise with a success message if the value is greater than 5.
    } else {
      reject(new Error(`Promise rejected due to an error with value: ${value}`)); // This will reject the promise with an error message if the value is 5 or less.
    }
   }, 2000);

});
}

const run = async() => {
  try {
    const result = await makePromise();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

run();