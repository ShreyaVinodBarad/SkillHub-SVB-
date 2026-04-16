"use client"

import { useSigninMutation } from "@/redux/apis/auth.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

const Login = () => {

  const router = useRouter()

  const [signin] = useSigninMutation()

  const loginSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
  })
  /*
  👆
  Creating validation rules:
  - task must be string and not empty
  - desc must be string and not empty
  - priority must be string and not empty
  .min(1) means at least 1 character (not empty).
  */

  type loginType = z.infer<typeof loginSchema>
  /*
  👆
  Automatically creates a TypeScript type from schema.
  So you don’t manually write interface.
  Extract the TypeScript type from this Zod schema.
  */
  const { reset, register, handleSubmit, formState: { errors } } = useForm<loginType>
    ({
      /*
      👆
      register → connects inputs to form
      handleSubmit → handles form submit
      errors → stores validation errors       
      <toDoType> → tells TypeScript what type this form uses.
      */
      defaultValues: {
        email: "",
        password: ""
      },
      // 👆 Initial values of form inputs.
      resolver: zodResolver(loginSchema)
      /*
      👆
      Connects Zod schema to form.
      Now validation runs automatically on submit.
      */
    })

  const handleLogin = async (data: loginType) => {
    // 👆 The data coming into this function must follow the structure of loginType
    try {
      await signin(data).unwrap()
      toast.success("User Login Success!")
      reset()
      router.push("/admin")
    } catch (error) {
      console.log(error)
      toast.error("Unable to Login User!")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="email"
          {...register("email")}
        />
        <input
          type="password"
          {...register("password")}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login