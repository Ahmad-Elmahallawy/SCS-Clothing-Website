const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")

//database connection
connection()

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
