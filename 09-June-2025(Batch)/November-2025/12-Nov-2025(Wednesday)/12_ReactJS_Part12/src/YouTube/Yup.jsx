import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './FormSchema'

const Yup = () => {
    const formInitialValues = {
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: ""
    }
    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        // 👆 After Destructuring
        // 👆 errors → stores validation messages if any input is wrong.
        initialValues: formInitialValues,
        validationSchema: FormSchema,
        // 👆 validationSchema → connects Yup rules to Formik.
        onSubmit: (values, action) => {
            console.log(values)
            console.log(values.name)
            console.log(values.email)
            console.log(values.age)
            console.log(values.password)
            console.log(values.confirmPassword)
            action.resetForm()
        }
        /*
        👆
        a) onSubmit runs when the form is submitted.
        b) action → gives some extra helper functions from Formik.
        c) action.resetForm() → clears all input fields and sets the form back to its initial values (empty again).
        d) In simple words:
        - After the form is successfully submitted, resetForm() makes the form look fresh again — as if you just opened it for the first time.
        */
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
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="name"
                                        placeholder='Enter name...'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {
                                        errors.name && touched.name ? (<span style={{ color: "red" }}>{errors.name}</span>) : null
                                    }
                                    {/* 
                                    👆 shows error message if rule fails. 
                                    */}

                                    <input
                                        type="text"
                                        className='form-control mt-3'
                                        name="email"
                                        placeholder='Enter email...'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {
                                        errors.email && touched.email ? (<span style={{ color: "red" }}>{errors.email}</span>) : null
                                    }
                                    {/* 
                                    👆 shows error message if rule fails. 
                                    */}

                                    <input
                                        type="text"
                                        className='form-control mt-3'
                                        name="age"
                                        placeholder='Enter age...'
                                        value={values.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {
                                        errors.age && touched.age ? (<span style={{ color: "red" }}>{errors.age}</span>) : null
                                    }

                                    <input
                                        type="text"
                                        className='form-control mt-3'
                                        name="password"
                                        placeholder='Enter password...'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {
                                        errors.password && touched.password ? (<span style={{ color: "red" }}>{errors.password}</span>) : null
                                    }

                                    <input
                                        type="text"
                                        className='form-control mt-3'
                                        name="confirmPassword"
                                        placeholder='Enter confirm password...'
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {
                                        errors.confirmPassword && touched.confirmPassword ? (<span style={{ color: "red" }}>{errors.confirmPassword}</span>) : null
                                    }

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
2) handleBlur and touched:
a) handleBlur → Tells Formik that a field was unfocused (the user clicked or tabbed away from it).
b) touched → Keeps track of which fields the user has visited (blurred at least once).
c) Example:
When you type in an input and then click outside it —
handleBlur runs
Formik marks that field as touched: true
Then you can show an error only after it’s been touched.
-------------------------------------------------------------
*/ 