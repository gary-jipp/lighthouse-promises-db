console.log("\n***Start of my Code ***");
const { getRecords, pool } = require("./db.js");


// We usually put the "then" on a separate line
getRecords("select * from widgets")
  .then(res => {
    console.log(res.rows);
    return getRecords("select * from wwwwidgets");
  })
  .catch(err => {
    console.log("catch:", Object.keys(err));
    console.log("catch:", err.detail);    // Not all of these are useful
    console.log("catch:", err.code);
  })
  .finally(() => {
    console.log("finally");
    pool.end();
  });


console.log("***End of my Code ***\n");