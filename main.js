const { Pool } = require("pg");
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

// call a function that returns a Promise
const query = "SELECT id, name FROM users LIMIT 5";
const promise = pool.query(query);
console.log(promise);

// Need to know when the promise is "done" (resolved)
// This is the basic promise pattern
promise.then();

// We can then() the same promise over and over.  Does not run the action again
promise.then();
promise.then();
promise.then();

// then() needs a callback function or we'll never know what happened
const callback = function (res) {
  console.log();
  console.log(res.rows);
};
promise.then(callback);
console.log();

// Normally we would write the callback inline, using an arrow function
promise.then(res => {
  console.log();
  console.log(res.rows);
});

// This just closes the pool quicker
// pool.end();

console.log("***End of my Code ***\n");