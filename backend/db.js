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

module.exports = db;