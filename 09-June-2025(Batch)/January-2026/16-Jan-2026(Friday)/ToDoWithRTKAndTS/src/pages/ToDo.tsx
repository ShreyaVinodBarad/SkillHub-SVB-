import { useFormik } from "formik"
import * as yup from "yup"
import type { TODO_TYPE } from "../types/note"
import { useAddNoteMutation, useDeleteNoteMutation, useGetNotesQuery, useUpdateNoteMutation } from "../redux/apis/todo.api"
import { toast } from "react-toastify"

const ToDo = () => {
    /*
    type TODO_TYPE = {
        task: string,
        desc: string,
        priority: string,
        complete: boolean
    }
    */


    // 👆 Redux value in React

    const { data } = useGetNotesQuery()

    const [createNote] = useAddNoteMutation()

    const [removeToDo] = useDeleteNoteMutation()

    const [updateToDo] = useUpdateNoteMutation()

    const formik = useFormik<TODO_TYPE>({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
            complete: false
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required()
        }),
        onSubmit: async (values) => {
            try {
                await createNote(values).unwrap()
                toast.success("To - Do create success!")
            } catch (error) {
                console.log(error)
                toast.error("Unable to create To - Do!")
            }
        }
    })

    const deleteToDo = async (id: number) => {
        try {
            await removeToDo(id).unwrap()
            toast.success("To - Do delete success!")
        } catch (error) {
            console.log(error)
            toast.error("Unable to Delete To - Do!")
        }
    }
    const modifyToDo = async (arg: TODO_TYPE) => {
        try {
            await updateToDo(arg).unwrap()
            toast.success("To - Do update success!")
        } catch (error) {
            console.log(error)
            toast.error("Unable to Update To - Do!")
        }
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input  {...formik.getFieldProps("task")} type="text" placeholder="Enter task..." />
                <input  {...formik.getFieldProps("desc")} type="text" placeholder="Enter description..." />
                <select {...formik.getFieldProps("priority")}>
                    <option value="">Choose Category</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Add</button>
            </form>
            {
                data && <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Complete</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.desc}</td>
                                <td>{item.priority}</td>
                                <td>
                                    {
                                        item.complete
                                            ? <button onClick={() => modifyToDo({ ...item, complete: false })}>
                                                Mark in Complete
                                            </button>
                                            : <button onClick={() => modifyToDo({ ...item, complete: true })}>
                                                Mark Complete
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => deleteToDo(item.id as number)}>
                                        Remove
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