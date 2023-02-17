// import { loginUser, signupUser } from "../controllers/userController";

const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");

router.post("/signup", signupUser.register);
router.post("/activate", signupUser.activate);
router.post("/login", loginUser);

module.exports = router;
