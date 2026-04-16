"use client"

import { useSignupMutation } from "@/redux/apis/auth.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
// 👆 Import useRouter from next/navigation
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

const Register = () => {

    const [signup] = useSignupMutation()

    const router = useRouter()
    // 👆 useRouter is a hook that helps us navigate (move) between pages. And router is an object.

    const registerSchema = z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(1)
    })
    /*
    👆
    Creating validation rules:
    - task must be string and not empty
    - desc must be string and not empty
    - priority must be string and not empty
    .min(1) means at least 1 character (not empty).
    */

    type registerType = z.infer<typeof registerSchema>
    /*
    👆
    Automatically creates a TypeScript type from schema.
    So you don’t manually write interface.
    Extract the TypeScript type from this Zod schema.
    */
    const { reset, register, handleSubmit, formState: { errors } } = useForm<registerType>
        ({
            /*
            👆
            register → connects inputs to form
            handleSubmit → handles form submit
            errors → stores validation errors       
            <toDoType> → tells TypeScript what type this form uses.
            */
            defaultValues: {
                name: "",
                email: "",
                password: ""
            },
            // 👆 Initial values of form inputs.
            resolver: zodResolver(registerSchema)
            /*
            👆
            Connects Zod schema to form.
            Now validation runs automatically on submit.
            */
        })

    const handleRegister = async (data: registerType) => {
        // 👆 The data coming into this function must follow the structure of loginType
        try {
            await signup(data).unwrap()
            toast.success("Register Success!")
            reset()
            router.push("/")
        } catch (error) {
            console.log(error)
            toast.error("Unable to Register!")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <input
                    type="name"
                    {...register("name")}
                />
                <input
                    type="email"
                    {...register("email")}
                />
                <input
                    type="password"
                    {...register("password")}
                />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register