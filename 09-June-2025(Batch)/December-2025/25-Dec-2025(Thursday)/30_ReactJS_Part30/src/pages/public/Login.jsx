import React from 'react'
import Center from "../../components/UI/Center"
import Input from "../../components/UI/Input"
import { Link, useNavigate } from "react-router-dom"
import Card from "../../components/UI/Card"
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../shared/utility'
import { useLazyLoginQuery } from '../../redux/apis/auth.api'
import { toast } from 'react-toastify'
const Login = () => {
    const [login, { isLoading, data }] = useLazyLoginQuery()
    const navigate = useNavigate()
    const fields = [
        { label: "email", placeholder: "Enter Email...", type: "email" },
        { label: "password", placeholder: "Enter Password...", type: "password" }
    ]
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await login(values).unwrap()
                // Runs after Promise Resolves 👇
                toast.success("Login Success!")
                switch (data.role) {
                    case "tpo":
                        navigate("/admin")
                        break;
                    case "student":
                        navigate("/student")
                        break;
                    case "company":
                        navigate("/company");
                        break;
                    default:
                        break;
                }
            } catch (error) {
                toast.error(error ? error.message : "Invalid Credientials!")
            } finally {
                resetForm()
            }
        }
    })
    return (
        <Center col={8} offset={2}>
            <Card header="Login" showFooter={false}>
                <form onSubmit={formik.handleSubmit}>
                    {/* 
                    <Input
                    label="Email"
                        placeholder="Enter Email..."
                        className="form-control"
                        type="email"
                        />
                        <Input
                        label="Password"
                        placeholder="Enter Password..."
                        className="form-control"
                        type="password"
                        />
                        */}
                    {
                        fields.map(item => <Input
                            className={handleClasses(formik, item.label)}
                            {...formik.getFieldProps(item.label)}
                            invalidFeedback={formik.errors[item.label]}
                            {...item}
                        />)
                    }
                    <button type="submit" class="btn btn-primary w-100 mt-3">
                        Login
                    </button>
                    <p class="text-center mt-3">
                        Dont Have Account?
                        <Link to="/register" href="#">
                            Create Account
                        </Link>
                    </p>
                </form>
            </Card>
        </Center >
    )
}

export default Login