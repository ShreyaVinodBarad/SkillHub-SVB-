import React, { useContext } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { handleClasses, URL } from '../share/handleClasses'
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { AuthContext } from '../App'

const Login = () => {
    // const x = useContext(AuthContext)
    // x return an Object 👆 

    const { auth, setAuth } = useContext(AuthContext)
    // 👆 Object Destructuring

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            handleLogin()
            resetForm()
        }
    })

    const handleLogin = async () => {
        try {
            const { data } = await axios.get(URL, { params: formik.values })
            // 👆 You're trying to send the login form values (email and password) to JSON-Server using query string.
            console.log(data)
            // 👆 data gives an array if the entered data in email and password field matches with the backend data. If it does not matches than it returns empty array.
            if (data.length === 0) {
                toast.error("Invalid Credentials!")
            } else {
                localStorage.setItem("auth", JSON.stringify(data[0]))
                /*
                👆
                - It saves data[0] in the browser’s localStorage after converting it into a JSON string.
                - Syntax:
                localStorage.setItem(key, value)
                a) key → the name under which you want to store the data
                b) value → the data you want to store (must be a string)
                */
                setAuth(data[0])
                // 👆 We have passed an array data and at 0th index it has an object which has email and password that has matched the data with the backend. So, in auth we have an object.
                toast.success("Login Success!")
                navigate("/admin")
            }
        }
        catch (err) {
            toast.error(err)
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
                                    Login
                                </div>
                                <div className="card-body">

                                    <div>
                                        <input
                                            type="text"
                                            className={handleClasses(formik, "email")}
                                            placeholder="Enter Your Email"
                                            {...formik.getFieldProps("email")}
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.email}
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            className={handleClasses(formik, "password")}
                                            placeholder="Enter Your Password"
                                            {...formik.getFieldProps("password")}
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.password}
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>

                                    <p className='text-center mt-3'>
                                        Don't have Account? <Link
                                            to="/register">
                                            Create Account
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

export default Login
/*
1) Query String:
- A query string is extra information added at the end of a URL to filter, search, or sort data.
- Example URL:
http://localhost:3000/users?age=20
Meaning → give users where age = 20
- In short:
Query string = adding ?key=value in the URL to get specific filtered data from JSON-Server.
-------------------------------------------------------------------
2) When you use:
axios.get(URL, { params: formik.values })
- it converts your form values into a query string like this:
http://localhost:3000/users?email=abc@gmail.com&password=123
- Meaning:
You are asking JSON-Server:
“Give me the user whose email and password match these values.”
a) params: formik.values
formik.values = { email: "...", password: "..." }
axios converts this to ?email=...&password=...
b) { data } = ...
- Axios always returns data
- This extracts the response data from the API
- console.log(data)
- Prints the result you get from JSON-Server.
-------------------------------------------------------------------
*/ 