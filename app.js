const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middlewares/error");
const user = require("./routes/user");
app.use(cookieParser());
app.use(bodyParser());

app.use("/api/v1", user);
app.use(errorMiddleware);
module.exports = app;
