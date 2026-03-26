const { registerUser } = require("../controller/auth.controller.js")
// 📌 Remember the file name should be with .js

const router = require("express").Router()

router // 👉 Starting route chaining (writing multiple routes together)
    .post("/signup", registerUser)

module.exports = router