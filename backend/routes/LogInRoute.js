const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const maxTime = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxTime,
  });
};

const login = async (email, password) => {
  user.findOne({ email });
  if (userFunc) {
    const auth = await bcrypt.compare(password, userFunc.password);
    if (auth) {
      return userFunc;
    }
    throw Error("incorrect Password");
  }
  throw Error("incorrect Email");
};

module.exports = (app) =>
  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const isUser = user.findOne({ email });
    if (isUser) {
      const auth = bcrypt.compare(password, isUser.password);
      if (auth) {
        const token = createToken(user.id);
        console.log('here')
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxTime: maxTime * 1000,
        });
        res.status(200).res.send({ message, data: newUser });
      }
      throw Error("incorrect Password");
    }
    throw Error("incorrect Email");
  });
