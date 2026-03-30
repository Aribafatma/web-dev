
function simulateAsyncOperation(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation successful!"); // Fulfills the promise
      } else {
        reject(new Error("Something went wrong.")); // Rejects the promise
      }
    }, 1000); // Simulates a 1-second delay
  });
}

// Consuming the promise using .then() and .catch()
simulateAsyncOperation(true) // Change to false to see the error handling
  .then((result) => {
    console.log(result); // Output: Operation successful!
  })
  .catch((error) => {
    console.error(error.message);
  });
