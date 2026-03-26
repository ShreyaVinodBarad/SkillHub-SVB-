const mongoose = require("mongoose")

module.exports = mongoose.model("userAuth", new mongoose.Schema({
    //                            👆 Changing Model Name
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}))