"use strict";

const express = require("express");
const cors = require("cors");
const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const videos = require("./routes/videos");
const usersRoutes = require("./routes/users");
const morgan = require("morgan");
const app = express();

// generalized routes
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

// localized routes
app.use("/auth", authRoutes);
app.use("/videos", videos);
app.use("/users", usersRoutes)

// Handles 404 errors
app.use(function (req, res, next) {
    return next(new NotFoundError());
});

// Generic error handling
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
});
  
module.exports = app;