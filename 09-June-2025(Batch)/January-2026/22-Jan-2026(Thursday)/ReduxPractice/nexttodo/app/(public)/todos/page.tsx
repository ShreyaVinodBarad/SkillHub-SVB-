"use client"
// 👆 Makes this a client component (runs in browser)

import { useAddToDoMutation, useGetToDosQuery } from "@/app/redux/apis/todo.api"
// 👆 Hooks to get todos and add todo
import { zodResolver } from "@hookform/resolvers/zod"
// 👆 Connects Zod validation with form
import { useForm } from "react-hook-form"
// 👆 Handles form state (inputs, submit, errors)
import z from "zod"
// 👆 Used to define validation rules

const ToDos = () => {

    const { data } = useGetToDosQuery()
    // 👆 Gets all todos from API
    const [addToDo] = useAddToDoMutation()
    // 👆 Function to add new todo

    const noteSchema = z.object({
        // 👆 Define validation rules
        task: z.string().min(1),
        desc: z.string().min(1),
        priority: z.string().min(1)
        // 👆 All fields must not be empty
    })

    type Note = z.infer<typeof noteSchema>
    // 👆 Automatically creates TypeScript type from schema
    /*
    👆
    - Automatically creates a TypeScript type from your Zod schema
    - z.infer = get TypeScript type from Zod schema
    - Means:
    Note will have: task, desc, priority
    Same rules as schema
    */

    const { register, reset, formState: { errors }, handleSubmit } =
        useForm<Note>({
            /*
            👆
            Setup form:
            register → connect inputs
            reset → clear form
            errors → validation errors
            handleSubmit → handle submit
            useForm<Note>() → Form will follow Note type
            */
            defaultValues: {
                task: "",
                desc: "",
                priority: ""
            },
            /*
            👆
            Defaults Values:
            Initial empty values
            */
            resolver: zodResolver(noteSchema)
            // 👆 Apply Zod validation
        })

    const createToDo = async (data: Note) => {
        /*
        👆
        Function runs when form is submitted
        data = form data (task, desc, priority)
        data: Note
        - This means:
        data = a variable (input)
        Note = its type
        */
        try {
            await addToDo(data).unwrap()
            /*
            👆
            - Send data to backend
            - .unwrap():
            .unwrap() is used with RTK Query to get the real result or throw error
            */
            console.log("To - Do Create Success!")
        } catch (error) {
            console.log(error)
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createToDo)}>
                <input
                    {...register("task")}
                    /*
                    👆
                    1) register("task")
                    - Registers this input with name "task"
                    - So form knows:
                    this field exists
                    its value
                    its validation
                    2) {... } (spread operator)
                    - Spreads all required properties into input
                    - It adds things like:
                    onChange
                    onBlur
                    ref
                    */
                    type="text"
                    placeholder="Enter task..."
                />
                <input
                    {...register("desc")}
                    type="text"
                    placeholder="Enter description..."
                />
                <select
                    {...register("priority")}
                >
                    <option value="">Choose Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Create To - Do</button>
            </form>
            {
                data && <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.priority}</td>
                                    <td>
                                        <button>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default ToDos