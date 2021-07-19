console.log("\n***Start of my Code ***");
const { getUsers, pool } = require("./db.js");


const promise = getUsers();

// We usually put the "then" on a separate line
promise
  .then(res => {
    console.log("then 1:", res.rows);
    return getUsers();    // We can call another promise after this one
  })
  .then(res => {
    console.log("then 2:", res.rows);
    return res.rows;
  })
  .then(res => {
    console.log("then 3:", res);   //  What is res here?
    // return 5;
  })
  .then(res => {
    console.log("then 4:", res);   // What happened here?  undefined!
  })
  .catch(e => console.log(e));

console.log("***End of my Code ***\n");