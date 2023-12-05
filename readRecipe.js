// asynchrones
const fs = require('fs');

fs.readFile('recipes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file', err);
    return;
  }
  console.log(data);
});

// synchrones
// const fs = require('fs');

// try {
//   const data = fs.readFileSync('recipes.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error('Error reading file', err);
// }
