const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookierParser = require("cookie-parser");

const user = require("./models/user");

dotenv.config({ path: "./config/.env" });

connectDB();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(cookierParser());
// routes
require("./routes/SignUpRoute")(app);
require("./routes/LogInRoute")(app);

const port = process.env.SERVER_PORT;
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});
