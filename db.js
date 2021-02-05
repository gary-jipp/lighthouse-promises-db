const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const getWidgets = function () {
  const results = "SELECT id, name FROM widgets LIMIT 5";
  return pool.query(results);
};

module.exports = { getWidgets, pool };