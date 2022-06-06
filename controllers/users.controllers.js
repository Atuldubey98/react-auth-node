const Users = require("../models/Users");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorhandler");
const bcryptjs = require("bcryptjs");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await Users.findByPk(email);
  if (user === null) {
    return next(new ErrorHandler("Email or password doesn't match !", 404));
  }
  if (!await bcryptjs.compare(password, user.password)) {
    return next(new ErrorHandler("Email or password doesn't match !", 404));
  }
  sendToken(user, 200, res);
});
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password, name } = req.body;
  const user = new Users({
    email,
    name,
    password: await bcryptjs.hash(password, 12),
  });
  await user.save();
  sendToken(user, 201, res);
});

exports.profileUser = catchAsyncErrors(async (req,res,next)=>{
  const user = req.user;
  return res.status(200).json({status : true, user});
});
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
