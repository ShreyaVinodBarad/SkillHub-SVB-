import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'
import { handleClasses } from '../shared/utility'

const AuthorRegistration = () => {
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
                                <div class="card-header alert alert-warning text-center fs-4">
                                    Register
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "name")}
                                            {...formik.getFieldProps("name")}
                                            placeholder="Enter your name"
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
                                            {...formik.getFieldProps("email")}
                                            placeholder="Enter Your Email"
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
                                            {...formik.getFieldProps("password")}
                                            placeholder="Enter Your Password"
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
                                            {...formik.getFieldProps("cpassword")}
                                            placeholder="Confirm Your Password"
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
                                    {/* <p class="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
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

export default AuthorRegistration