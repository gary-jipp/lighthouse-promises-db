const { Pool } = require("pg");
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

const getUsers = function () {
  const query = "SELECT id, name FROM users LIMIT 5";
  return pool.query(query);
};

module.exports = { getUsers, pool };