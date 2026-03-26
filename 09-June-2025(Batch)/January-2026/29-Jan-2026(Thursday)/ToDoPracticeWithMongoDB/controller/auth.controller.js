const UserModel = require("../model/UserModel.js")
// 📌 Remember the file name should be with .js

exports.registerUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.status(201).json({ message: "User Register Success!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}