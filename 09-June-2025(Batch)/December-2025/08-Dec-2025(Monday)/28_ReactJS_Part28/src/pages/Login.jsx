import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { handleClasses } from "./../shared/utility"
import { useDispatch, useSelector } from "react-redux"
import { signin } from '../redux/actions/auth.actions'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const { loading, error, success } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(signin(formik.values))
            resetForm()
        }
    })

    useEffect(() => {
        if (success) {
            toast.success("Login Successful!")
            navigate("/admin")
        }
    }, [success])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    if (loading) {
        return <div class="spinner-border text-success"></div>
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
                                            type="password"
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
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>
                                    <p class="text-center mt-3">
                                        Dont Have Account? <a href="#">Create Account</a>
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