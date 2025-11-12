import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'
import clsx from 'clsx'

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required().min(3).max(10),
            confirmPassword: yup.string().required().min(3).max(10)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning text-center fs-5">
                                    Signup
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            name='name'
                                            class={handleClasses("name")}
                                            placeholder="Enter your name"
                                            {...formik.getFieldProps("name")}
                                        />
                                        <div className='invalid-feedback'>{formik.errors.name}</div>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name='email'
                                            class={handleClasses("email")}
                                            placeholder="Enter Your Email"
                                            {...formik.getFieldProps("email")}
                                        />
                                        <div className='invalid-feedback'>{formik.errors.email}</div>
                                    </div>

                                    <div>
                                        <input
                                            type="password"
                                            name='password'
                                            class={handleClasses("password")}
                                            placeholder="Enter Your Password"
                                            {...formik.getFieldProps("password")}
                                        />
                                        <div className='invalid-feedback'>{formik.errors.password}</div>
                                    </div>

                                    <div>
                                        <input
                                            type="password"
                                            name='confirmPassword'
                                            class={handleClasses("confirmPassword")}
                                            placeholder="Confirm Your Password"
                                            {...formik.getFieldProps("confirmPassword")}
                                        />
                                        <div className='invalid-feedback'>{formik.errors.confirmPassword}</div>
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 my-3">
                                        Signup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default SignUp