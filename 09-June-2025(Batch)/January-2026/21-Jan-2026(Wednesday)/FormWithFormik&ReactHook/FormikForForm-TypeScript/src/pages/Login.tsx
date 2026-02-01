import clsx from "clsx"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as yup from "yup"
const Login = () => {
    type User = {
        email: string,
        password: string
    }

    const userSchema: yup.ObjectSchema<User> = yup.object({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const formik = useFormik<User>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: userSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    const handleClasses = (key: keyof User) => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="card mt-3">
                            <div className="card-header alert alert-warning text-center fs-3">
                                Login
                            </div>
                            <div className="card-body">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Email...."
                                        className={handleClasses("email")}
                                        {...formik.getFieldProps("email")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.email}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Enter Password...."
                                        className={handleClasses("password")}
                                        {...formik.getFieldProps("password")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.password}
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>
                                    <p className="text-center mt-3">
                                        Don't Have Account? <Link to="/register">Register</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login