import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../shared/utility'
import { useSignupMutation } from '../redux/apis/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [signup, { isLoading, isSuccess, isError, error }] = useSignupMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "register fail")
        }
    }, [isError])


    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }

    return <form onSubmit={formik.handleSubmit}>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card mt-3">
                        <div class="card-header alert alert-warning fs-3 text-center">Signup</div>
                        <div class="card-body">
                            <div>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.name}</div>
                            </div>
                            <div class="mt-3">
                                <input
                                    type="text"
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div class="mt-3">
                                <input
                                    type="text"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <div class="mt-3">
                                <input
                                    type="text"
                                    className={handleClasses(formik, "cpassword")}
                                    {...formik.getFieldProps("cpassword")}
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.cpassword}</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Register