const mongoose = require("mongoose")
/*
👆
- Importing mongoose library
- It helps to connect and work with MongoDB
*/

module.exports = mongoose.model("toDoPractice", new mongoose.Schema({
    /*
    👆
    - Creating and exporting a model named "toDoPractice"
    - Inside it, we are creating a schema (structure of data)
    */
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, default: false }
}))

/*
📌 Creating Schema
a) Schema
- A schema is the structure or blueprint of your data.
- It defines:
What fields (columns) exist
Their data types (string, number, etc.)
Rules (required, default, unique, etc.)
b) Model
- A model is the actual tool used to interact with the data (based on the schema).
- It allows you to:
Create data
Read data
Update data
Delete data
*/
