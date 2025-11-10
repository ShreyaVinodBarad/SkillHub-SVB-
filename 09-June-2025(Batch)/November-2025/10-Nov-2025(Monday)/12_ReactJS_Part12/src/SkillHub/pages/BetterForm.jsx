import React, { useState } from 'react'

const BetterForm = () => {
    const [formData, setFormData] = useState({})
    const handleChange = event => {
        // console.log(event.target.name)
        const { name, value } = event.target
        //                           👇 Dynamic Key
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = () => { }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">Better Form</div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <input required type="text" name="fname" className='form-control' onChange={handleChange} />
                                    <input required type="text" name="lname" className='form-control mt-3' onChange={handleChange} />
                                    <button type='submit' className='btn btn-primary w-100 mt-3'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BetterForm

// variable value as key if we want than we use square bracket in object
/*
1) When you write onChange={handleChange}, React automatically sends an event object to the function handleChange whenever you type something in the input box.
- Now — inside this event object, there are many small details (called properties) about what happened.
- One of them is called target, which represents the exact element (like the input box) that triggered the event.
- Inside event.target, there are useful properties such as:
a) event.target.name → the name of the input (like "fname" or "lname")
b) event.target.value → the text you typed inside that input
- So, when you do this:
console.log(event.target.name)
- It will print:
a) "fname" when you type in the first input box
b) "lname" when you type in the second input box
- In simple words:
event.target means “the input box that changed.”
event.target.name means “the name written inside that input’s name attribute.”
---------------------------------------------------------------
2) Code Meaning: 
const { name, value } = event.target
setFormData({ ...formData, [name]: value })
a) Meaning:
event.target → the input box you are typing in.
name → input’s name (like "fname" or "lname")
value → what you typed inside the input.
{ ...formData } → copies the old data (so old inputs don’t get lost).
[name]: value →
The square brackets mean: use the value of the variable name as the key in the object.
- Example: if name = "fname", then [name]: value becomes "fname": value.
b) Example:
- If you type "Shreya" in input with name="fname",
then React does:
setFormData({ fname: "Shreya" })
- If you then type "Barad" in input with name="lname",
React updates:
setFormData({ fname: "Shreya", lname: "Barad" })
c) In short:
- Using [name] in square brackets lets us use the variable’s value as a key inside an object.
- Without brackets, it would make a key literally called "name", not "fname" or "lname".
---------------------------------------------------------------
3) onSubmit in ReactJS
- onSubmit is an event that runs when a form is submitted — like when you click a submit button or press Enter inside the form.
- Example 👇
<form onSubmit={handleSubmit}>
   <input type="text" />
   <button type="submit">Submit</button>
</form>
- Here, when you submit the form, the function handleSubmit() runs.
- Usually, we also write
event.preventDefault()
inside handleSubmit to stop the page from reloading after form submit.
- In short: 
onSubmit = runs a function when form is submitted.
---------------------------------------------------------------
*/ 