import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { handleClasses } from '../share/handleClasses'
import { Link } from "react-router-dom"

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

                                    <button type="button" className="btn btn-primary w-100 mt-3">
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