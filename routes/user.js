const express = require("express");

const { loginUser, registerUser, profileUser } = require("../controllers/users.controllers");
const { isAuthenticated } = require("../utils/auth");

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",isAuthenticated,  profileUser);
module.exports = router;
