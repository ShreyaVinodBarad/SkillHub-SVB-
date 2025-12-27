import React from 'react'
import Center from '../../components/UI/Center'
import Input from '../../components/UI/Input'
import { Link, useNavigate } from "react-router-dom"
import Card from "../../components/UI/Card"
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../shared/utility'
import { useRegisterMutation } from '../../redux/apis/auth.api'
import { toast } from 'react-toastify'
const RegisterCompany = () => {
    const [register,
        {
            isLoading,
            // isSuccess,
            // isError,
            // error
        }
    ] = useRegisterMutation()
    const navigate = useNavigate()
    const fields = [
        { label: "name", placeholder: "Enter Name...", type: "text" },
        { label: "email", placeholder: "Enter Email...", type: "email" },
        { label: "logo", placeholder: "Enter Logo URL...", type: "text" },
        { label: "address", placeholder: "Enter Address...", type: "text" },
        { label: "mobile", placeholder: "Enter Mobile...", type: "number" },
        { label: "password", placeholder: "Enter Password...", type: "password" }
    ]

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            logo: "",
            address: "",
            mobile: "",
            password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            logo: yup.string().required(),
            address: yup.string().required(),
            mobile: yup.string().required(),
            password: yup.string().required()
        }),
        // 👇 Code instead of useEffect()
        onSubmit: async (values, { resetForm }) => {
            try {
                await register(
                    {
                        ...values,
                        role: "company"
                    }
                ).unwrap() // Returns a Promise
                navigate("/")
                toast.success("Register Success!")
            } catch (error) {
                toast.error(error ? error.message : "Unable to Register Company!")
            }
            resetForm()
        }
    })
    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }
    return (
        <Center>
            <Card header="Register" showFooter={false}>
                <form onSubmit={formik.handleSubmit}>
                    {
                        fields.map(item =>
                            <Input
                                className={handleClasses(formik, item.label)}
                                {...formik.getFieldProps(item.label)}
                                invalidFeedback={formik.errors[item.label]}
                                {...item}
                            />
                        )
                    }
                    <button type="submit" class="btn btn-primary w-100 mt-3">
                        Register
                    </button>
                    <p class="text-center mt-3">
                        Already Have Account?
                        <Link to="/" href="#">
                            Login
                        </Link>
                    </p>
                </form>
            </Card >
        </Center >
    )
}

export default RegisterCompany