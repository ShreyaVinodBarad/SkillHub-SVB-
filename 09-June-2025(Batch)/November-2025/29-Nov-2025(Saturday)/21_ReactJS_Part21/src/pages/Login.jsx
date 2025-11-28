import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as yup from "yup"
import { handleClasses, URL } from '../shared/utility'
import { toast } from 'react-toastify'
import axios from "axios"
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
        onSubmit: async (values, { resetForm }) => {
            try {
                const { data } = await axios.get(`${URL}/users`, { params: formik.values })
                // 👆 Applying filter in Database using params ie. Query String

                // 👇 If data entered does not matches the backend data than we will get an empty array.
                if (data.length === 0) {
                    toast.error("Invalid Credentials!")
                } else {
                    if (data[0].role === "admin") {
                        localStorage.setItem("local-admin", JSON.stringify(data[0]))
                        // 👆 To keep data after refresh also in auth variable
                        setAuth({ ...auth, admin: data[0] })
                        toast.success("Admin Login Success!")
                        navigate("/admin")
                    } else {
                        localStorage.setItem("local-author", JSON.stringify(data[0]))
                        setAuth({ ...auth, author: data[0] })
                        toast.success("Author Login Success!")
                        navigate("/author")
                    }
                }
                console.log(data)
                resetForm()
            }
            catch (err) {
                toast.error(err)
                console.log(err)
            }
        }
    })
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
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
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
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
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