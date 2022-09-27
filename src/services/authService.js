const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const { SECTRET, SALT_ROUNDS } = require("../config/constants");

const blacklist = new Set();

exports.register = async (email, password) => {
  const existingUser = await User.findOne({
    email: new RegExp(`^${email}$`, "i"),
  });

  if (existingUser) {
    throw new Error("This user already exists!");
  }

  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  let user = new User({
    email,
    password: hashedPassword,
  });
  await user.save();

  return createSession(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({
    email: new RegExp(`^${email}$`, "i"),
  });

  if (!user) {
    throw new Error("Invalid user or password!");
  }
  let isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid user or password!");
  }
  return createSession(user);
};

function createSession(user) {
  const payload = { email: user.email, _id: user._id };
  const option = { expiresIn: "3d" };
  const accessToken = jwt.sign(payload, SECTRET, option);

  return {
    email: user.email,
    accessToken,
    _id: user._id,
  };
}

exports.logout = (token) => blacklist.add(token);

exports.validateToken = (token) => {
  if (blacklist.has(token)) {
    throw new Error("Token is blacklisted");
  }

  return jwt.verify(token, SECTRET);
};

