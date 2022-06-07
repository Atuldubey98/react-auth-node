const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))
app.use(cookieParser());
app.use(bodyParser({urlencoded :  true}));

const errorMiddleware = require("./middlewares/error");
const user = require("./routes/user");
app.use("/api/v1", user);
app.use(errorMiddleware);
module.exports = app;
