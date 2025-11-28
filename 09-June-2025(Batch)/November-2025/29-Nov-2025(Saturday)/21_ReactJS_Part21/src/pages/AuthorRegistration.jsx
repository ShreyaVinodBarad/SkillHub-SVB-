import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'
import { handleClasses, URL } from '../shared/utility'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const AuthorRegistration = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            photo: "",
            email: "",
            password: "",
            cpassword: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            photo: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")])
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(`${URL}/users`, { ...formik.values, role: "author", active: true })
                toast.success("Author Register Success!")
                navigate("/login")
                resetForm()
            } catch (err) {
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
                            <div class="card my-3">
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
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "photo")}
                                            {...formik.getFieldProps("photo")}
                                            placeholder="Enter your photo URL"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.photo}
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
/*
1) oneOf in Yup:
a) oneOf is used to check whether a field’s value matches any one value from a given list.
- In your case:
cpassword: yup.string().required().oneOf([yup.ref("password")])
b) Meaning:
- cpassword must be the same as the value in password.
- yup.ref("password") means "take the value of the password field".
- So oneOf([yup.ref("password")]) means cpassword should match password.
c) In short:
- oneOf is used for confirm password validation — it ensures two fields have identical values.
d) oneOf([yup.ref("password")]) → checks if confirm password value equals password value.
-----------------------------------------------------------------
*/ 