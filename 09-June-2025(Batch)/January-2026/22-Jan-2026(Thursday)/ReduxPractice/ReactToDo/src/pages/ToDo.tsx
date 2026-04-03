import { useFormik } from "formik"
import * as yup from "yup"
import type { Note } from "../types/ToDoNote"
import { useAddToDoMutation, useDeleteToDoMutation, useGetToDosQuery } from "../redux/apis/todo.api"

const ToDo = () => {
    /*
    type Note = {
        id?: number,
        task: string,
        desc: string,
        priority: string
    } // 👉 2nd
    */

    const { data } = useGetToDosQuery()
    const [addToDo] = useAddToDoMutation()
    const [deleteToDo] = useDeleteToDoMutation()

    const ToDoSchema: yup.ObjectSchema<Note> = yup.object({
        // 👆 Setting validationSchema's data type: yup.ObjectSchema of Note
        id: yup.number().optional(),
        task: yup.string().required(),
        desc: yup.string().required(),
        priority: yup.string().required()
    }) // 👉 4th

    const formik = useFormik<Note>({
        initialValues: {
            task: "",
            desc: "",
            priority: ""
        },
        validationSchema: ToDoSchema,
        onSubmit: (values, { resetForm }) => {
            handleCreateToDo(values)
            console.log(values)
            resetForm()
        } // 👉 5th
    }) // 👉 3rd

    const handleCreateToDo = async (arg: Note) => {
        try {
            await addToDo(arg).unwrap()
            console.log("Create ToDo Success!")
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteToDo = async (arg: number) => {
        try {
            await deleteToDo(arg).unwrap()
            console.log("Delete ToDo Success!")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    {...formik.getFieldProps("task")} // 👉 6th
                    type="text"
                    placeholder="Enter task..."
                />
                <input
                    {...formik.getFieldProps("desc")}
                    type="text"
                    placeholder="Enter description..."
                />
                <select
                    {...formik.getFieldProps("priority")}
                >
                    <option value="">Choose Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Create To-Do</button>
            </form>
            {/* 👆 1st */}
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
                            data.map((item, index) => <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.desc}</td>
                                <td>{item.priority}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteToDo(item.id as number)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default ToDo