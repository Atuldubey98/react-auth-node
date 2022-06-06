const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");
const user = require("./routes/user");
const cors = require('cors');
app.use(cors())
app.use(cookieParser());
app.use(bodyParser({urlencoded :  true}));

app.use("/api/v1", user);
app.use(errorMiddleware);
module.exports = app;
