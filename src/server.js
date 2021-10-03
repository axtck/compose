const express = require("express");
const app = express();

// env vars
require("dotenv").config();
const penv = require("./config/penv");
Object.entries(penv).map(([k, v]) => console.log(`${k}: \t\t\t${v}`));

// database 
const mysql = require("mysql");
require("./config/database/connect")(mysql, penv); // connect to db

// listen
const port = penv.port || 5001;
app.listen(port, () => console.log(`Listening on ${port}`));