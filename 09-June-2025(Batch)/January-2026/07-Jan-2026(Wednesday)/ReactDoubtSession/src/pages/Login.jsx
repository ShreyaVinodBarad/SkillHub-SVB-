import React, { memo, useCallback } from 'react'
import { useLazySigninQuery } from '../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from 'formik'
const Login = () => {
    const [signin] = useLazySigninQuery()
    const navigate = useNavigate()

    const handleSignin = useCallback(async userData => {
        try {
            const data = await signin(userData).unwrap()
            console.log(data)
            navigate("/admin")
        } catch (error) {
            console.log(error)
        }
    }, [navigate, signin])
    // 👆 Run this code when signin and navigate -> Dependancy Array

    // 👆 Behind the scene the function is created and deleted with every change without useCallback

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            handleSignin(values)
            resetForm()
        }
    })

    console.log("Render")

    return <>
        <form onSubmit={formik.handleSubmit}>
            <input
                type="email"
                placeholder='Enter Email...'
                {...formik.getFieldProps("email")}
            />
            <input
                type="password"
                placeholder='Enter Password...'
                {...formik.getFieldProps("password")}
            />
            <button type='submit'>login</button>
        </form>
    </>
}

export default memo(Login)