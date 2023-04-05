const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const user = require("./models/user");

dotenv.config({ path: "./config/.env" });

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

connectDB();

passport.use(user.createStrategy());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(bodyParser.json()).use(cors());
// routes
require("./routes/SignUpRoute")(app);

const port = process.env.SERVER_PORT;
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});
