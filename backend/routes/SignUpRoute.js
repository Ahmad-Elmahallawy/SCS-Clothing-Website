const user = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
        let message = "The account was successfully created";
        res.status(201);
        res.send({ message, data: newUser });
      }
    });
  });
