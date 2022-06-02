const express = require("express");

const { loginUser, registerUser } = require("../controllers/users.controllers");

const router = express.Router();
router.post("/register", registerUser);
module.exports = router;
