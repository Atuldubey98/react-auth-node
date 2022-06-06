const express = require("express");

const { loginUser, registerUser, profileUser, logoutUser } = require("../controllers/users.controllers");
const { isAuthenticated } = require("../utils/auth");

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",isAuthenticated,  profileUser);
router.post("/logout",isAuthenticated,  logoutUser);

module.exports = router;
