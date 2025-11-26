import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"
import { handleClasses } from '../shared/utility'

const Login = () => {
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
            resetForm()
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