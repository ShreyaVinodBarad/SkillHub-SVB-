import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { handleClasses, URL } from '../shared/utility'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Register = () => {
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
            handleRegister()
            resetForm()
        }
    })

    const handleRegister = async () => {
        try {
            await axios.post(URL, formik.values)
            toast.success("User Register Success!")
            navigate("/login")
        } catch (err) {
            toast.error(err)
        }
    }

    const navigate = useNavigate()
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning fs-4 text-center">
                                    Signup
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "name")}
                                            placeholder="Enter your name"
                                            {...formik.getFieldProps("name")}
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.name}
                                        </div>
                                    </div>
                                    <div class="mt-2">
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
                                            type="text"
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
                                    <div class="mt-2">
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "cpassword")}
                                            placeholder="Confirm Your Password"
                                            {...formik.getFieldProps("cpassword")}
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.cpassword}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>
                                    <p class="text-center mt-3">
                                        Already Have Account? <Link to="/login">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Register