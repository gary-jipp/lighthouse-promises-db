const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "lightbnb",
});

const getUsers = function () {
  const query = "SELECT id, name FROM users LIMIT 5";
  return pool.query(query);
};

module.exports = { getUsers, pool };