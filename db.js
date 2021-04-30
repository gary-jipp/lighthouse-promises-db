const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const sql = "SELECT id, name FROM widgets LIMIT 5";
pool.query(sql);

