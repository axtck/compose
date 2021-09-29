const express = require("express");
const app = express();
const mysql = require("mysql");
const penv = require("./config/penv");

console.log(`Environment variables: ${JSON.stringify(penv)}`);


const port = penv.port || 5001;
app.listen(port, () => console.log(`Listening on ${port}`));