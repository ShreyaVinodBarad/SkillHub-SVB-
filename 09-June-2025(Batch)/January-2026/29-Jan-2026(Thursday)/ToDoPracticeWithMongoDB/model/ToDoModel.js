const mongoose = require("mongoose")

module.exports = mongoose.model("toDoPractice", new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, default: false }
}))