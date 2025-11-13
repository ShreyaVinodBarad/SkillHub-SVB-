import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const Dashboard = () => {

    const URL = "http://localhost:5000/notes"

    const [allToDo, setAllToDo] = useState([])

    /*
    When edit button is clicked, we are passing complete item in setSelectedToDo ie. complete object.
    👇
    */
    const [selectedToDo, setSelectedToDo] = useState()

    const formik = useFormik({
        enableReinitialize: true,
        // 👆 Mandotary to take data back to input field
        initialValues: {
            task: selectedToDo ? selectedToDo.task : "",
            /*
            👆
            When page is refreshed than selectedToDo is empty(undefined), but if there is an object(Object => Edit button clicked we have pass item ie. object) than based on every input field we have added data back to input field to update the input.
            */
            desc: selectedToDo ? selectedToDo.desc : "",
            priority: selectedToDo ? selectedToDo.priority : "",
            completionDate: selectedToDo ? selectedToDo.completionDate : ""
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required().min(5).max(60),
            priority: yup.string().required(),
            completionDate: yup.string().required()
        }),

        onSubmit: (values, { resetForm }) => {
            console.log(values)
            if (selectedToDo) {
                updateToDo()
            } else {
                createToDo()
            }
            /*
            👆
            When ever there is an object inside selectedToDo than we have to update and when there is undefined in it then when have to create to do.
            */
            resetForm()
        }
        /*
        👆
        onSubmit: (x, y) => {
            console.log(x) => Data types in Input Field
            console.log(y) => Object with key(function): resetForm, validationForm, etc
        }
        */
    })

    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    const createToDo = async () => {
        try {
            // await axios.post(URL, formik.values)
            await axios.post(URL, { ...formik.values, complete: false })
            /*
            👆
            { ...formik.values, complete: false } means — take all the data from formik.values and also add one more key called complete with value false.
            So it sends everything from the form plus complete: false together.
            */
            toast.success("Task Created Successfully!")
            readToDo()
        }
        catch (err) {
            toast.error(err)
        }
    }

    const readToDo = async () => {
        try {
            /*
            const y = await axios.get(URL)
            👆
            await axios.get(URL) gives a response object, and inside it there is a data key that contains all the input field data saved till now.
            */
            const { data } = await axios.get(URL)
            setAllToDo(data)
        }
        catch (err) {
            toast.error(err)
        }
    }

    const updateToDo = async () => {
        try {
            await axios.patch(`${URL}/${selectedToDo.id}`, formik.values)
            toast.success("Task Updated Successfully!")
            readToDo()
            setSelectedToDo(null)
            /*
            👆
            1) Brings add button as the condition is there when the selectedToDo to empty remove update button and show add button.
            2) Makes the input field empty because when selectedToDo is empty make the input field empty.
            */
        }
        catch (err) {
            toast.error(err)
        }
    }

    const deleteToDo = async id => {
        try {
            await axios.delete(`${URL}/${id}`)
            toast.success("Task Deleted Successfully!")
            readToDo()
        }
        catch (err) {
            toast.error(err)
        }
    }

    useEffect(() => {
        readToDo()
    }, [])

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning text-center fs-4">
                                    To - Do using Formik + Yup + clsx
                                </div>
                                <div class="card-body">

                                    <div>
                                        <input
                                            type="text"
                                            placeholder='Enter task...'
                                            name='task'
                                            {...formik.getFieldProps("task")}
                                            className={handleClasses("task")}
                                        />
                                        <span className='invalid-feedback'>
                                            {formik.errors.task}
                                        </span>
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder='Enter description...'
                                            name='desc'
                                            {...formik.getFieldProps("desc")}
                                            className={handleClasses("desc")}
                                        >
                                        </textarea>
                                        <span className='invalid-feedback'>
                                            {formik.errors.desc}
                                        </span>
                                    </div>

                                    <div>
                                        <select
                                            class="form-select"
                                            name='priority'
                                            {...formik.getFieldProps("priority")}
                                            className={handleClasses("priority")}
                                        >
                                            <option value="">
                                                Select Priority
                                            </option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        <span className='invalid-feedback'>
                                            {formik.errors.priority}
                                        </span>
                                    </div>

                                    <div>
                                        <input
                                            type="date"
                                            placeholder='Enter completion date...'
                                            name='completionDate'
                                            {...formik.getFieldProps("completionDate")}
                                            className={handleClasses("completionDate")}
                                        />
                                        <span className='invalid-feedback'>
                                            {formik.errors.completionDate}
                                        </span>
                                    </div>

                                    {
                                        selectedToDo
                                            ? <button type="submit" class="btn btn-warning my-3 w-100" onClick={updateToDo}>
                                                Update Task
                                            </button>
                                            : <button type="submit" class="btn btn-primary my-3 w-100">
                                                Add Task
                                            </button>
                                    }
                                    {/* 
                                    👆
                                    When page is refreshed that is there is nothing in selectedToDo so show Add button, but whenever there is an object inside selectedToDo when clicked on edit button than show update button.
                                    */}
                                </div>
                            </div>
                            {/* 
                            <pre>
                                {JSON.stringify(formik.values, null, 2)}
                            </pre> 
                            */}

                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th className='text-center'>Task</th>
                                        <th>Description</th>
                                        <th>Priority</th>
                                        <th className='text-center'>
                                            Completion Date
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allToDo.map(item => {
                                            return <tr>
                                                <td>{item.id}</td>
                                                <td>{item.task}</td>
                                                <td>{item.desc}</td>
                                                <td>{item.priority}</td>
                                                <td>{item.completionDate}</td>
                                                <td className='d-flex flex-column gap-3'>
                                                    <button type="button" class="btn btn-warning" onClick={() => setSelectedToDo(item)}>
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-danger" onClick={() => deleteToDo(item.id)}>
                                                        <i className="bi bi-trash"></i>
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
            </form>
        </div>
    )
}

export default Dashboard
/*
Create => POST      => URL + Body
Read   => GET       => URL
Update => PUT/PATCH => URL + ID + Body
Delete => DELETE       => URL + ID
*/ 