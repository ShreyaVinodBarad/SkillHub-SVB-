import React, { useContext } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { handleClasses, URL } from '../shared/utility'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'
const Login = () => {
    const { auth, setAuth } = useContext(AuthContext)
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
            const { data } = await axios.get(`${URL}/users`, { params: formik.values })
            if (data.length === 0) {
                toast.error("Invalid Credientials!")
            }
            else {
                if (data[0].role === "admin") {
                    localStorage.setItem("auth", JSON.stringify(data[0]))
                    // 👆 We are using Local Storage becasue if we refresh page data should be saved.
                    setAuth(data[0])
                    // 👆 If Admin Login than store the data in Local Storage
                    navigate("/admin")
                    toast.success("Admin Login Success!")
                } else {
                    if (data[0].active) {
                        localStorage.setItem("auth", JSON.stringify(data[0]))
                        setAuth(data[0])
                        // 👆 If Employee Login than store the data in Local Storage
                        navigate("/employee")
                        toast.success("Employee Login Success!")
                    } else {
                        toast.error("Account Blocked by Admin!")
                    }
                }
            }
        } catch (err) {
            toast.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning fs-4 text-center">
                                    Login
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "email")}
                                            placeholder="Enter Your Email"
                                            {...formik.getFieldProps("email")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.email}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input
                                            type="password"
                                            class={handleClasses(formik, "password")}
                                            placeholder="Enter Your Password"
                                            {...formik.getFieldProps("password")}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            {formik.errors.password}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>
                                    {/* <p class="text-center mt-3">
                                        Dont Have Account? <a href="#">Create Account</a>
                                    </p> */}
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