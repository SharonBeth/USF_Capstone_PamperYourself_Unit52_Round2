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

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
    BCRYPT_WORK_FACTOR
};