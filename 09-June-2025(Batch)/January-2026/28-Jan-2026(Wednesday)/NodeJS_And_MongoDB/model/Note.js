const mongoose = require("mongoose")

module.exports = mongoose.model("note", new mongoose.Schema({
    /*
    new mongoose.Schema({ ... })
    👆
    Creates a schema(blueprint) for a MongoDB collection.
    */
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true }
    // 👆 All these fields must be a string and cannot be empty
}))
/*
mongoose.model("note", ...)
👆
- Creates a model named "note" using this schema.
- This model allows you to create, read, update, delete (CRUD) notes in MongoDB.

module.exports = ...
👆
Exports the model so it can be used in other files.
*/ 

// module.exports = mongoose

/*
📌 Schema and Model
a) Schema 
→ A plan or blueprint that tells MongoDB what fields a document should have and their types.
→ Like a form: task, desc, priority – all must be filled in a certain way

b) Model 
→ A tool or class created from the schema that lets you create, read, update, delete data in the database.

c) Shortcut:
Schema = plan, Model = tool to use that plan.
*/ 