const express = require("express");
const router = express.Router();

const { validateBody, schemas } = require("../helpers/routeHelpers");
const userController = require("../controllers/users");

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/secret", userController.secret);

module.exports = router;