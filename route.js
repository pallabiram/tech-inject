const express = require("express");
const router = express.Router();

router.post("/api/user/register", userController.register);

module.exports = router;