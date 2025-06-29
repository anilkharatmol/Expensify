const express = require("express");
const { addUser, loginAuth } = require("../controllers/usersController");

const router = express.Router();

router.post("/add", addUser);

router.post("/login", loginAuth)

module.exports = router;