const express = require("express");
const app = express();
// env vars
require("dotenv").config();
const penv = require("./config/penv");
console.log(`Environment variables: ${JSON.stringify(penv)}`);
// imports
const mysql = require("mysql");

//require("./config/connectDb")(mysql, penv); // connect to db
const connection = mysql.createConnection({
    host: penv.mysqlHost,
    user: penv.mysqlUser,
    password: penv.mysqlPw,
});

connection.connect((err) => {
    if (err) throw new Error("connect", err.message);
    console.log("Connected!");
});

const port = penv.port || 5001;
app.listen(port, () => console.log(`Listening on ${port}`));