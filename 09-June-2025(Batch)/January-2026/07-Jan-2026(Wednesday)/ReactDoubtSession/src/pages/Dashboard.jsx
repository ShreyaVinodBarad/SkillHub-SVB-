import { useFormik } from "formik"
import { memo, useCallback, useReducer, useState } from "react"
import * as yup from "yup"
import { useAddTodoMutation, useGetTodoQuery, useModifyTodoMutation, useRemoveTodoMutation } from "../redux/apis/admin.api"
import { toast } from "react-toastify"
const Dashboard = () => {
    const [pagi, setPagi] = useState({ limit: 5, page: 1 })

    const { data } = useGetTodoQuery(pagi)
    const [add] = useAddTodoMutation()
    const [modify] = useModifyTodoMutation()
    const [remove] = useRemoveTodoMutation()

    const createToDo = useCallback(async toDoData => {
        try {
            await add(toDoData).unwrap()
            toast.success("ToDo Create Success!")
        } catch (error) {
            toast.error(error ? error.message : "Unable to Create To-Do")
            console.log(error)
        }
    }, [])

    const updateToDo = useCallback(async toDoData => {
        try {

        } catch (error) {
            toast.error(error ? error.message : "Unable to Update To-Do")
            console.log(error)
        }
    }, [])

    const deleteToDo = useCallback(async toDoData => {
        try {

        } catch (error) {
            toast.error(error ? error.message : "Unable to Remove To-Do")
            console.log(error)
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            task: "Learn Pagination",
            desc: "Learning Imp Topics",
            priority: "High",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createToDo({ ...values, complete: false })
            resetForm()
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Task..."
                    {...formik.getFieldProps("task")}
                />
                <input
                    type="text"
                    placeholder="Enter Description..."
                    {...formik.getFieldProps("desc")}
                />
                <select
                    {...formik.getFieldProps("priority")}
                >
                    <option selected>Choose Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Add</button>
            </form>
            {pagi.limit}
            <select onChange={event => setPagi({ ...pagi, limit: event.target.value })} value={pagi.limit}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>

            {
                data && <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Complete</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.desc}</td>
                                <td>{item.priority}</td>
                                <td>{item.complete ? "Complete" : "In Complete"}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default memo(Dashboard)