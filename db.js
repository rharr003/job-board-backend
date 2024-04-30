"use strict";
const { Client } = require("pg");
let db;

// use connection string in production
if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  //use default PG env vars when running locally and change db var to test db for testing
  if (process.env.NODE_ENV === "test")
    process.env.PGDATABASE = "job_board_test";
  db = new Client();
}
db.connect();

module.exports = db;
