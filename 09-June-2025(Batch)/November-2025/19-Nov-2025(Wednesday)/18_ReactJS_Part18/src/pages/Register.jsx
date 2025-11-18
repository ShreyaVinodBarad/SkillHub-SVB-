import React from 'react'
import { useFormik } from "formik"
import { handleClasses, URL } from '../share/handleClasses'
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            handleRegister()
            resetForm()
        }
    })

    const handleRegister = async () => {
        try {
            await axios.post(URL, formik.values)
            toast.success("Register Success!")
            console.log("Register Success!")
            navigate("/login")
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                            <div className="card mt-3">
                                <div className="card-header alert alert-warning fs-4 text-center">
                                    Signup
                                </div>
                                <div className="card-body">

                                    <div>
                                        <input
                                            type="text"
                                            className={handleClasses(formik, "name")}
                                            {...formik.getFieldProps("name")}
                                            placeholder="Enter your Name"

                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.name}
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className={handleClasses(formik, "email")}
                                            {...formik.getFieldProps("email")}
                                            placeholder="Enter Your Email"
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.email}
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className={handleClasses(formik, "password")}
                                            {...formik.getFieldProps("password")}
                                            placeholder="Enter Your Password"
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.password}
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className={handleClasses(formik, "cpassword")}
                                            {...formik.getFieldProps("cpassword")}
                                            placeholder="Confirm Your Password"
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.cpassword}
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>

                                    <p className='text-center mt-3'>
                                        Already have Account? <Link
                                            to="/login">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
/*
1) useNavigate:
a) What is useNavigate? 
- useNavigate() is a React Router hook.
- It helps you move the user to another page without refreshing the browser.
- Example:
After login → go to Dashboard
After signup → go to Login page
- So instead of using <a href="">, we use useNavigate().
b) Syntax
import { useNavigate } from "react-router-dom"
const navigate = useNavigate()
c) How to Use (Very Easy Explanation)
Step 1: Import it
import { useNavigate } from "react-router-dom"
Step 2: Create navigate function
const navigate = useNavigate()
✔ Step 3: Use it to go to another page
navigate("/login")
- This will open /login page.
d) Summary
| Feature             | Meaning                 |
| ------------------- | ----------------------- |
| useNavigate()       | A hook to change pages  |
| navigate("/path")   | Go to that page         |
| No refresh          | SPA navigation (smooth) |
---------------------------------------------------
*/ 