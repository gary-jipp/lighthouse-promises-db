console.log("***Start of my Code ***\n");

const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "lightbnb",
});

const sql = "select id, name, email from users limit 10"; 
pool.query(sql)
  .then(res => {
    console.log(res.rows);
  });


console.log("***End of my Code ***\n");