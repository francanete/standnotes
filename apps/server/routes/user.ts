import { userController } from "../controllers/userController";
import { upload } from "../middleware/uploadFile";

const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

router.post("/signup", userController.register);
router.post("/activate", userController.activate);
router.post("/login", userController.login);
router.post(
  "/update_user",
  requireAuth,
  upload.single("avatar"),
  userController.update
);

module.exports = router;
