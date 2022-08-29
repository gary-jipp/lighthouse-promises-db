console.log("***Start of my Code ***\n");

const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});


const sql = "select * from users";
const result = pool.query(sql);
console.log(result);

pool.query(sql)
  .then(res => {
    console.log(res.rows);
  });


console.log("***End of my Code ***\n");