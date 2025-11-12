import { useFormik } from 'formik'
// 👆 You are using the Formik hook useFormik() to handle form data.
import React from 'react'

const Formik = () => {
    // useFormik() => Returns an Object
    const formInitialValues = {
        name: "",
        email: ""
        // 👆 In input filed we have name attribute, here name attribute value is used as key.
    }
    /*
    👆
    - This object stores default values of form fields.
    - The keys (name, email) must match the name attributes in your input tags.
    -  Why?
    Formik uses these names to automatically update and track values for each input.
    */

    // const formik = useFormik({ => Without Destructuring
    const { handleSubmit, handleChange, values } = useFormik({
        // 👆 After Destructuring
        initialValues: formInitialValues,
        onSubmit: (values) => {
            console.log(values)
            console.log(values.name)
            console.log(values.email)
        }
    })
    /*
    👆
    - useFormik() returns an object containing helper functions and values.
    a) initialValues
    - Sets the starting values for your form inputs.
    b) onSubmit
    - Function that runs when the form is submitted (handleSubmit). It receives all form values automatically.
    c) values
    - Holds the current values of all form inputs.
    d) handleChange
    - Updates the values automatically when you type in an input.
    e) handleSubmit
    - Handles the submit event and calls the onSubmit() function.
    */

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-primary fs-3 text-center">Formik</div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    {/* 
                                    👆
                                    a) onSubmit={handleSubmit} → When you click Submit, Formik will:
                                    - Prevent page refresh
                                    - Run your onSubmit function
                                    - Pass all form values as an object
                                    */}
                                    <input type="text" className='form-control' name="name" placeholder='Enter name...' value={values.name} onChange={handleChange} />
                                    <input type="text" className='form-control mt-3' name="email" placeholder='Enter email...' value={values.email} onChange={handleChange} />
                                    {/* 
                                    👆
                                    value={values.name} and onChange={handleChange} → keeps input controlled (value always comes from Formik).
                                    - When you type in a field, Formik automatically updates that field’s value.
                                    */}
                                    <button type="submit" class="btn btn-success w-100 mt-3">Submit</button>
                                </form>
                                {/* 
                                👆
                                Example Flow:
                                - You type "Shreya" in the name field → Formik updates values.name.
                                - You type "abc@gmail.com" in the email field → Formik updates values.email.
                                - You click Submit → onSubmit runs → logs:
                                { name: "Shreya", email: "abc@gmail.com" }
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formik
/*
1) Formik => Form Handling, State Management, Accessing the Form Data
a) What is Formik?
- Formik is a React library used to build and manage forms easily.
- It helps handle:
a) Form state (values entered by user)
b) Validation (checking errors)
c) Submission (what happens when user clicks Submit)
- It provides built in form componenets which we can use to create a form like Field, Button, Option, etc, or we can apply formik on our built on HTML input types.
- It helps with the three most annoying parts:
a) Getting Values in and out of form state.
b) Validation and Error Messages => Only possible with Yup Library
c) Handling Form Submission

b) Why use Formik?
- Without Formik, we handle everything manually using useState.
- Formik reduces code and automatically manages form data and validation.

c) How to install Formik
npm install formik

d) Steps to do in Formik:
1) Create a Form
2) Use the useFormik hook of Formik Library
3) Setting up the onChange and value attribute of the text field
4) Then getting form data by setting up teh onsubmit event on form

e) Summary in Short:
| Step | What Happens                                           |
| ---- | ------------------------------------------------------ |
| 1    | Define starting form data (`initialValues`)            |
| 2    | Use `useFormik()` to manage form                       |
| 3    | Destructure (`handleChange`, `handleSubmit`, `values`) |
| 4    | Connect them to form and input fields                  |
| 5    | On submit, Formik gives all data in one object         |
-------------------------------------------------------------
*/ 