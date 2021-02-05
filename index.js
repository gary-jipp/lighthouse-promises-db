const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

// call a function that returns a Promise
const query = "SELECT id, name FROM widgets LIMIT 5";
const promise = pool.query(query);
console.log(promise);

// Need to know when the promise is "done" (resolved)
// This is the basic promise pattern
promise.then();

// then() needs a callback function or we'll never know what happened
const callback = function (res) {
  console.log(res.rows);
};
promise.then(callback);

// Normally we would write the callback inline, using an arrow function
promise.then(res => {
  console.log(res.rows);
});

// This just closes the pool quicker
pool.end();

console.log("***End of my Code ***\n");