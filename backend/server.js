"use strict";

const app = require("./app");
console.log("server.js-after app")
const { PORT } = require("./config");
console.log("server.js-after PORT")


app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

