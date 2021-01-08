console.log("\n***Start of my Code ***");
const { getWidgets, pool } = require("./db.js");

// Call the promise in a function
const myFunction = function () {
  
  const promise = getWidgets();

  promise.then(res => {
    console.log(res.rows);
  });

  // return res;    // oops, can't do this
  return promise;   //  return the promise
};

// Call my new Function
const result = myFunction();
console.log(result);    // Now my new function returns a promise

// Now I have to "then" the result from my function also
result.then(res => console.log(res.rows));

// You can "then" the same promise over and over again.
result.then(res => console.log(res.rows));
result.then(res => console.log(res.rows));
result.then(res => console.log(res.rows));


pool.end();
console.log("***End of my Code ***\n");