const Users = require("../models/Users");
const bcryptjs = require("bcryptjs");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
});
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password, name } = req.body;
  const user = new Users({
    email,
    name,
    password: await bcryptjs.hash(password, 12),
  });
  await user.save();
  return res.status(200).json({ status: true, message: "Email created !" });
});
