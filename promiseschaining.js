fetch('https://api.github.com') // fetch returns a promise
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json(); // returns a new promise
  })
  .then(userData => {
    console.log(`User name: ${userData.name}`); // Access the final data
  })
  .catch(error => {
    console.error(`Could not get user data: ${error}`); // Catches any error in the chain
  });
