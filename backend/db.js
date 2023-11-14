"use strict";

const {Client} = require("pg");
const {getDatabaseUri} = require("./config");

let db;

if(process.env.NODE_ENV === "development") {
    db = new Client({
        host: "localhost",
        user: "testing1",
        port: 5432,
        password: "testingpassword1",
        database: "capstone2"
    });
}else {
    db = new Client({
        connectionString: getDatabaseUri()
    });
};

db.connect();

// Confirmation connected to database with  when starting up ServiceWorkerRegistration.

db.query(`Select * FROM users`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    db.end;
  });

module.exports = db;