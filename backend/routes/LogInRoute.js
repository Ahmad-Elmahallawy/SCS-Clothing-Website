const user = require("../models/user");
const jwt = require("jsonwebtoken");

const maxTime = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxTime,
  });
};

module.exports = (app) =>
  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const userCreation = user.create({ email, password });
    const token = createToken(user.id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxTime: maxTime * 1000,
    });
    res.status(201).json({user: user._id, created: true})
  });
