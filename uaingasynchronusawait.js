async function fetchUserDataAsync() {
  try {
    // await pauses execution until the promise settles
    const response = await fetch('https://api.github.com');
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    const userData = await response.json();
    console.log(`User name: ${userData.name}`);
  } catch (error) {
    // try-catch block handles any errors
    console.error(`Could not get user data: ${error}`);
  }
}

fetchUserDataAsync();
