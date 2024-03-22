"use strict";
/* -------------------------------------------------------
    EXPRESS -Store API
------------------------------------------------------- */

// npm init -y
// $ npm i express dotenv express-async-errors cors
// $ npm i
//  npm i cookie-session

const express = require("express");
const app = express();
/* ------------------------------------------------------- */

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/dbConnection");
dbConnection();

/* ------------------------------------------------------- */

app.use(express.json());

// SessionsCookies:
const session = require("cookie-session");
app.use(require("cookie-session")({ secret: process.env.SECRET_KEY }));

// Middlewares:
app.use(require("./src/middlewares/userControl"));

/* ------------------------------------------------------- */
// Routes:
// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    session: req.session,
    isLogin: req.isLogin,
  });
});

/* ------------------------------------------------------- */
// Route işlemleri
app.use(require("./src/routes/productsRoute"));
app.use("/users", require("./src/routes/userRoutes"));
app.use("/admin", require("./src/routes/adminRoutes"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/errorHandler"));
// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));
/* ------------------------------------------------------- */
// Syncronization
// require("./src/helpers/sync");
