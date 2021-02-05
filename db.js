const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const getWidgets = function () {
  const res = "SELECT id, name FROM widgets LIMIT 5";
  return pool.query(res);
};

module.exports = { getWidgets, pool };