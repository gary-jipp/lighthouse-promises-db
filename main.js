const {Pool} = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});


console.log("\n***Start of my Code ***");


// We usually put the "then" on a separate line
pool.query("insert into users (name, email) values ('Alice', 'alice@email.com') returning *")
  .then(res => {
    const user = res.rows[0];
    console.log("new user", user);
    const sql = "insert into widgets (name, user_id) values ($1, $2) returning *";
    return pool.query(sql, ["New Widget", user.id]
    );
  })
  .then(res => {
    const widget = res.rows[0];
    console.log("widget", widget);
  })
  .catch(e => console.log(e));

console.log("***End of my Code ***\n");