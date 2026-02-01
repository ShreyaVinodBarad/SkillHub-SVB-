import clsx from 'clsx'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from "yup"
const Register = () => {
    type User = {
        name: string,
        email: string,
        password: string,
        cpassword: string
    }

    const userSchema: yup.ObjectSchema<User> = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        cpassword: yup.string().required()
    })

    const formik = useFormik<User>({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: ""
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
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card mt-3">
                            <div className="card-header alert alert-warning text-center fs-3">
                                Signup
                            </div>
                            <div className="card-body">
                                <div>
                                    <input
                                        type="text"
                                        className={handleClasses("name")}
                                        placeholder="Enter your name"
                                        {...formik.getFieldProps("name")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.name}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        className={handleClasses("email")}
                                        placeholder="Enter Your Email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.email}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        className={handleClasses("password")}
                                        placeholder="Enter Your Password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.password}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        className={handleClasses("cpassword")}
                                        placeholder="Confirm Your Password"
                                        {...formik.getFieldProps("cpassword")}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        {formik.errors.cpassword}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register