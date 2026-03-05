const { register, login, logout } = require("../controllers/auth.controller.js")

// 👇 Taking out router's functionality from express.
const router = require("express").Router()

router
    .post("/signup", register)
    .post("/signin", login)
    .post("/signout", logout)

module.exports = router
// 👆 Exporting router variable