"use client"

import { useGetToDosQuery } from "@/redux/apis/todo.api"
/*
👆
This is a Redux Toolkit Query hook.
It fetches all todos from your backend API.
*/
import { zodResolver } from "@hookform/resolvers/zod"
// 👆 Connects Zod validation with React Hook Form.
import { useForm } from "react-hook-form"
// 👆 Main hook to manage form (inputs, submit, errors).
import z from "zod"
// 👆 Importing Zod library to create validation schema.

const Dashboard = () => {
    // 👆 Creating a React functional component.

    const { data } = useGetToDosQuery()
    /*
    👆
    Calling API automatically. data will contain todos from backend.
    */

    const toDoSchema = z.object({
        task: z.string().min(1),
        desc: z.string().min(1),
        priority: z.string().min(1)
    })
    /*
    👆
    Creating validation rules:
    - task must be string and not empty
    - desc must be string and not empty
    - priority must be string and not empty
    .min(1) means at least 1 character (not empty).
    */

    type toDoType = z.infer<typeof toDoSchema>
    /*
    👆
    Automatically creates a TypeScript type from schema.
    So you don’t manually write interface.
    Extract the TypeScript type from this Zod schema.
    */

    const { register, handleSubmit, formState: { errors } } = useForm<toDoType>
        ({
            /*
            👆
            register → connects inputs to form
            handleSubmit → handles form submit
            errors → stores validation errors       
            <toDoType> → tells TypeScript what type this form uses.
            */
            defaultValues: {
                task: "",
                desc: "",
                priority: ""
            },
            // 👆 Initial values of form inputs.
            resolver: zodResolver(toDoSchema)
            /*
            👆
            Connects Zod schema to form.
            Now validation runs automatically on submit.
            */
        })

    const handleCreate = (values: toDoType) => {
        console.log(values)
    }
    /*
    👆
    - Runs when form is valid and submitted.
    - values contains form data.
    - Currently just printing in console.
    - Later you can call API here.
    */

    return <>
        <form onSubmit={handleSubmit(handleCreate)}>
            {/* 
            👆
            When form submits:
            - First Zod validates
            - If valid → handleCreate runs
            */}
            <input {...register("task")} type="text" placeholder="Enter task..." />
            {/* 👆 register("task") connects input to form state. */}
            <input {...register("desc")} type="text" placeholder="Enter description..." />
            {/* 👆 register("desc") connects input to form state. */}
            <select {...register("priority")}>
                <option value="">Choose Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            {/* 👆 register("priority") connects input to form state. */}
            <button type="submit">Add To - Do</button>
            {/* 👆 Submits the form. */}
        </form>
    </>
}

export default Dashboard