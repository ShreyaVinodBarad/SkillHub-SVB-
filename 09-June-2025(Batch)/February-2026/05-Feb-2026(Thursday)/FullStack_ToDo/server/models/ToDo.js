// 👇 Creating Schema - Import mongoose
const mongoose = require("mongoose")

// 👇 Creating module and exporting it
module.exports = mongoose.model("todo", new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, required: false }
}, { timestamps: true }))
// 👆 model takes 2 parameters => table name and validation schema
// mongoose.Schema() => Takes 2 objects => 1st for Validation and 2nd used to create automatic keys i.e. createdAt(To see time when it is new entry created) and updatedAt(To see time when it is updated) => timestamps: true creates these two entries to track when created and updated.