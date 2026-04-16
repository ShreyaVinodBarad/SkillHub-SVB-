// 👇 Creating Schema - Import mongoose
const mongoose = require("mongoose")

// 👇 Creating module and exporting it
module.exports = mongoose.model("user", new mongoose.Schema({
    // Name of the module is       👆 user
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true }))