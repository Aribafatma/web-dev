const promise1 = Promise.resolve('Result 1');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
const promise3 = fetch('https://api.github.com').then(res => res.json().then(data => `User ID: ${data.id}`));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises fulfilled:', results); 
    // Output: All promises fulfilled: [ 'Result 1', 'Result 2', 'User ID: 3833441' ]
  })
  .catch(error => {
    console.error('One of the promises rejected:', error); // Immediately rejects if any fail
  });
