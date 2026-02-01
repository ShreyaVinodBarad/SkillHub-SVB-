"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const Login = () => {
    const userSchema = z.object({
        email: z.string().min(1),
        password: z.string().min(1)
    })

    type FormType = z.infer<typeof userSchema>

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormType>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(userSchema)
    })

    const handleLogin = (data: FormType) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <input
                type='text'
                placeholder='Enter email...'
                {...register("email")}
            />
            <div>
                {errors && errors.email?.message}
            </div>

            <input
                type='text'
                placeholder='Enter password...'
                {...register("password")}
            />
            <div>
                {errors && errors.password?.message}
            </div>

            <button
                type='submit'
            >
                Login
            </button>
        </form>
    )
}

export default Login