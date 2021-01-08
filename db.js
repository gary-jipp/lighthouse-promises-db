const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const getWidgets = function () {
  const query = "SELECT id, name FROM widgets LIMIT 5";
  return pool.query(query);
};

const getUsers = function () {
  const query = "SELECT id, name FROM users LIMIT 5";
  return pool.query(query);
};

const getRecords = function (query) {
  return pool.query(query);
};

module.exports = { getWidgets, getUsers, getRecords, pool };