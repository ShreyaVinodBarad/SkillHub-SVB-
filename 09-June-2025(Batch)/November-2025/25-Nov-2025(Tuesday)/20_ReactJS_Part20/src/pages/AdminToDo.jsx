import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from "yup"
import { handleClasses, URL } from '../shared/utility'
import { toast } from 'react-toastify'
import axios from 'axios'

const AdminToDo = () => {

    const [allToDos, setAllToDos] = useState([])
    const [allEmployees, setAllEmployees] = useState([])

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
            emp: ""
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
            emp: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            createToDo()
            resetForm()
        }
    })

    const createToDo = async () => {
        try {
            await axios.post(`${URL}/todos`, formik.values)
            toast.success("Task Created Successfully!")
            readToDo()
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    const readToDo = async () => {
        try {
            const { data } = await axios.get(`${URL}/todos`)
            console.log(data)
            setAllToDos(data)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }


    const deleteToDo = async id => {
        try {
            await axios.delete(`${URL}/todos/${id}`)
            toast.success("Task Deleted Successfully!")
            readToDo()
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    const readEmployees = async () => {
        try {
            const { data } = await axios.get(`${URL}/users`, { params: { role: "employee", active: true } })
            console.log(data)
            setAllEmployees(data)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }
    /*

    const handleEmployeeName = empId => {
        const empName = allEmployees
        .filter(item => item.id == empId)
        .map(item => item.name)
        return empName
    }
    */
    // 👇 Shorter Version of the above code
    const handleEmployeeName = empId => allEmployees
        .filter(item => item.id == empId)
        .map(item => item.name)

    useEffect(() => {
        readToDo()
        readEmployees()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning text-center fs-4 ">
                                Task Manager
                            </div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <select
                                            class="form-select"
                                            {...formik.getFieldProps("emp")}
                                            className={handleClasses(formik, "emp")}
                                        >
                                            <option selected>
                                                Choose Employee
                                            </option>
                                            {
                                                allEmployees.map(item => {
                                                    return <option value={item.id}>
                                                        {item.name}
                                                    </option>
                                                })
                                            }
                                        </select>
                                        <div className='invalid-feedback'>
                                            {formik.errors.emp}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder='Enter Task...'
                                            {...formik.getFieldProps("task")}
                                            className={handleClasses(formik, "task")}
                                        />
                                        <div className='invalid-feedback'>
                                            {formik.errors.task}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder='Enter the Description...'
                                            {...formik.getFieldProps("desc")}
                                            className={handleClasses(formik, "desc")}
                                        >
                                        </textarea>
                                        <div className='invalid-feedback'>
                                            {formik.errors.desc}
                                        </div>
                                    </div>
                                    <div>
                                        <select
                                            {...formik.getFieldProps("priority")}
                                            className={handleClasses(formik, "priority")}
                                        >
                                            <option selected>
                                                Choose Priority
                                            </option>
                                            <option value="High">High</option>
                                            <option value="Medium">
                                                Medium
                                            </option>
                                            <option value="Low">
                                                Low
                                            </option>
                                        </select>
                                        <div className='invalid-feedback'>
                                            {formik.errors.priority}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Create Task
                                    </button>
                                </form>
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Employee</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allToDos.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.priority}</td>
                                            <td>{handleEmployeeName(item.emp)}</td>
                                            <td className='d-flex justify-content-center align-items-center gap-3'>
                                                <button type="button" class="btn btn-warning">
                                                    Edit
                                                </button>
                                                <button type="button" class="btn btn-danger" onClick={() => deleteToDo(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminToDo