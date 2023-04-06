const user = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const maxTime = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxTime,
  });
};

module.exports = (app) =>
  app.post("/api/register", async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const { firstName, lastName, email } = req.body;
      const userDB = await user.findOne({ email });
      if (userDB) {
        res.status(400);
        res.send({ message: "User already exists!" });
      } else {
        const newUser = await user.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        });
        const token = createToken(user.id);

        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxTime: maxTime * 1000,
        });
        let message = "The account was successfully created";
        res.status(201);
        res.send({ message, data: newUser });
      }
    });
  });
