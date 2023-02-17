const { register } = require("../controlers/user.controlers");


const router = require("express").Router();

router.post("/register",register);

module.exports = router;