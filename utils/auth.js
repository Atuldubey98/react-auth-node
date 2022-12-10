const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("./errorhandler");
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to get resource", 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  const { email, name } = await Users.findByPk(decodeData.email);
  req.user = { email, name };
  next();
});
