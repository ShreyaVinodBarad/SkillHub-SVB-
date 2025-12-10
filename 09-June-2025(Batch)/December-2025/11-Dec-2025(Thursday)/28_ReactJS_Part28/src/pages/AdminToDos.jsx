import React, { useEffect } from 'react'
import Center from "./../components/Center"
import { useDispatch, useSelector } from 'react-redux'
import { createToDo, deleteToDo, readEmployee, readToDos } from "../redux/actions/admin.actions"
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../shared/utility'
import { toast } from 'react-toastify'
const AdminToDos = () => {
    const dispatch = useDispatch()

    const { allEmployees, allToDos, loading, createToDoSuccess, deleteSuccess, error } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(readEmployee())
        dispatch(readToDos())
    }, [])

    /*
    admin.actions.js 
        createToDo
        readToDo
        deleteToDo
    admin.slice.js
        addCase
    */

    const formik = useFormik({
        initialValues: {
            employee: "",
            task: "",
            description: "",
            priority: ""
        },
        validationSchema: yup.object({
            employee: yup.string().required(),
            task: yup.string().required(),
            description: yup.string().required(),
            priority: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(createToDo({ ...values, complete: false }))
            resetForm()
        }
    })

    useEffect(() => {
        if (createToDoSuccess) {
            toast.success("Create To-Do Success!")
        }
    }, [createToDoSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("Delete To-Do Success!")
        }
    }, [deleteSuccess])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])


    useEffect(() => {
        if (createToDoSuccess || deleteSuccess) {
            dispatch(readToDos())
        }
    }, [createToDoSuccess, deleteSuccess])


    if (loading) {
        return <div class="spinner-border text-success"></div>
    }


    return (
        <div>
            <Center>
                <div class="card mt-3">
                    <div class="card-header alert alert-warning fs-4 text-center">
                        ToDo CURD
                    </div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <select
                                    class="form-select"
                                    className={handleClasses(formik, "employee")}
                                    {...formik.getFieldProps("employee")}
                                >
                                    <option selected>Choose Employee</option>
                                    {
                                        allEmployees && allEmployees.map(item => {
                                            return <option value={item.id}>{item.name}</option>
                                        })
                                    }
                                </select>
                                <div className='invalid-feedback'>
                                    {formik.errors.employee}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Task...'
                                    className={handleClasses(formik, "task")}
                                    {...formik.getFieldProps("task")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.task}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter Description...'
                                    className={handleClasses(formik, "description")}
                                    {...formik.getFieldProps("description")}
                                />
                                <div className='invalid-feedback'>
                                    {formik.errors.description}
                                </div>
                            </div>
                            <div>
                                <select
                                    class="form-select"
                                    className={handleClasses(formik, "priority")}
                                    {...formik.getFieldProps("priority")}
                                >
                                    <option selected>Choose Priority</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <div className='invalid-feedback'>
                                    {formik.errors.priority}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Create ToDo
                            </button>
                        </form>
                    </div>
                </div>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Complete</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToDos && allToDos.map(item => {
                                return <tr>
                                    <td>
                                        {
                                            allEmployees && allEmployees.filter(emp => emp.id == item.employee).map(emp => emp.name)
                                        }
                                    </td>
                                    <td>{item.task}</td>
                                    <td>{item.description}</td>
                                    <td>{item.priority}</td>
                                    <td className='text-center'>
                                        {
                                            item.complete
                                                ? <span class="badge text-bg-success">Complete</span>
                                                : <div class="spinner-border text-warning"></div>
                                        }
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteToDo(item.id))}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </Center>
        </div>
    )
}

export default AdminToDos