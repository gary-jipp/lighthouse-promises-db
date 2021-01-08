console.log("\n***Start of my Code ***");
const { getRecords, pool } = require("./db.js");


// We usually put the "then" on a separate line
getRecords("select * from widgets")
  .then(res => {
    console.log(res.rows);
    return getRecords("select * from users limit 3");
  })
  .then(res => {
    console.log(res.rows);
    return getRecords("select * from wwidgets");
  })
  .catch(err => {
    // console.log("catch:", Object.keys(err));
    console.log("catch:", err.detail);  // Not all of these are useful
    console.log("catch:", err);
  })
  .finally(() => {
    console.log("finally");
    pool.end();   // Now we can close the db connection
  });


console.log("***End of my Code ***\n");