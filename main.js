const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const sql = "select * from users";
pool.query(sql)
  .then(res => {
    console.log(res.rows);
  });