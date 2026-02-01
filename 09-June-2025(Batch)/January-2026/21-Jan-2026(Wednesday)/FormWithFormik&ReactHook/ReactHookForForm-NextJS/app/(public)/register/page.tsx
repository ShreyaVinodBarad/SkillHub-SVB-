"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const Register = () => {
    const userSchema = z.object({
        name: z.string().min(1, "name is required field"), // custom error
        email: z.string().min(1),
        mobile: z.string().min(1),
        password: z.string().min(1),
        cpassword: z.string().min(1)
    })

    type FormType = z.infer<typeof userSchema>
    // const x = useForm<FormType>({
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormType>({
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: ""
        },
        resolver: zodResolver(userSchema)
    })

    // console.log(x)

    const handleRegister = (data: FormType) => {
        console.log(data)
    }

    return <>
        <form onSubmit={handleSubmit(handleRegister)}>
            <input
                type='text'
                placeholder='name'
                {...register("name")}
            />
            <div>
                {errors && errors.name?.message}
            </div>

            <input
                type='text'
                placeholder='email'
                {...register("email")}
            />
            {errors && errors.email?.message}

            <input
                type='text'
                placeholder='mobile'
                {...register("mobile")}
            />
            <div>
                {errors && errors.mobile?.message}
            </div>

            <input
                type='text'
                placeholder='password'
                {...register("password")}
            />
            <div>
                {errors && errors.password?.message}
            </div>

            <input
                type='text'
                placeholder='cpassword'
                {...register("cpassword")}
            />
            <div>
                {errors && errors.cpassword?.message}
            </div>

            <button
                type='submit'
            >
                Register
            </button>
        </form>
    </>
}

export default Register