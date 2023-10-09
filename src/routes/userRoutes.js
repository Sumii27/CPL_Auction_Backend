const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
router.post("/login", userController.logIn);
router.post("/encrypt", userController.hashPassword);
module.exports = router;
