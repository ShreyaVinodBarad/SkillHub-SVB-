import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './FormSchema'

const Yup = () => {
    const formInitialValues = {
        name: "",
        email: ""
    }
    const { handleSubmit, handleChange, values, errors } = useFormik({
        // 👆 After Destructuring
        // 👆 errors → stores validation messages if any input is wrong.
        initialValues: formInitialValues,
        validationSchema: FormSchema,
        // 👆 validationSchema → connects Yup rules to Formik.
        onSubmit: (values) => {
            console.log(values)
            console.log(values.name)
            console.log(values.email)
        }
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-primary fs-3 text-center">Formik + Yup</div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" className='form-control' name="name" placeholder='Enter name...' value={values.name} onChange={handleChange} />

                                    <span style={{ color: "red" }}>{errors.name}</span>
                                    {/* 
                                    👆 shows error message if rule fails. 
                                    */}

                                    <input type="text" className='form-control mt-3' name="email" placeholder='Enter email...' value={values.email} onChange={handleChange} />

                                    <span style={{ color: "red" }}>{errors.email}</span>
                                    {/* 
                                    👆 shows error message if rule fails. 
                                    */}

                                    <button type="submit" class="btn btn-success w-100 mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yup
/*
1) 2) Yup => Form Validation, BuiltIn(REQUIRED, MIN, MAX, Email), Error Messages
a) What is Yup?
- Yup is a JavaScript validation library.
- It helps to check if user input is correct before sending data (like in forms).
- Yup is a validation library that helps you set rules for form fields (like “name is required” or “email must be valid”).
- Formik can easily connect with Yup to validate your forms automatically.
- Mostly used with Formik or React Hook Form.
- Formik makes form validation easy - When paired with Yup.

b) Install Formik and Yup
- Run this in your terminal:
npm install formik yup

c) For Formik:
Form => Submit => Sata
For Yup:
Form => Data => Validate(Form Validation with Yup) => Submit

d) Working with Yup
a) Schema File:
All Validation Rules place here on Input Field => DataType, Required, Min, Max, Email, etc
b) Schema File => Include in 👇
       👆              useFormik Hook - Handles the Form Data
-------------------------------------------------------------
*/ 