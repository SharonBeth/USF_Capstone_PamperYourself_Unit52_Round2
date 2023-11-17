"use strict";

require("dotenv").config();
require("colors");
const {db} = require("./db");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "capstone2_test"
        : process.env.DATABASE_URL || "capstone2";
}

// bcryt factor

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;
//Left these for usefully purposes when turning on the server.
console.log("Capstone: Pamper Yourself:" .green);
console.log("SECRET_KEY:".green, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR:".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---")

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
    BCRYPT_WORK_FACTOR
};