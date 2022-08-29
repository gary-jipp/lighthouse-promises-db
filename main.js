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
