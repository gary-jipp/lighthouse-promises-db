console.log("\n***Start of my Code ***");
const { getWidgets, getUsers, pool } = require("./db.js");


const promise = getWidgets();

// We usually put the "then" on a separate line
promise
  .then(res => {
    console.log("then:",res.rows);
    return getUsers();    // We can call another promise after this one
  })
  .then(res => {
    console.log("then:",res.rows);
    return res.rows;
  })
  .then(res => {
    console.log("then:",res);   //  What is res here?
    return 5;
  })
  .then(res => {
    console.log("then:",res);   // What happened here?  undefined!
  })
  .catch(e => console.log(e));


// pool.end();   //  Why can't we do this here anymore??
console.log("***End of my Code ***\n");