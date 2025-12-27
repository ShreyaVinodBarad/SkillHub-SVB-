import React, { useEffect } from 'react'
import clsx from "clsx"
import * as yup from "yup"
import { useFormik } from "formik"
import { useCreateToDoMutation, useDeleteToDoMutation, useReadToDoQuery } from "../redux/apis/todo.api"
import { toast } from 'react-toastify'
const ToDo = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            priority: ""
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            createToDo(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })


    const { data } = useReadToDoQuery()

    //      👇 Action      👇 RTK will crate these variables in redux
    const [createToDo, { isLoading, isError, isSuccess, error }] = useCreateToDoMutation()

    const [deleteToDo, {
        isSuccess: deleteSuccess,
        isError: deleteIsError,
        isLoading: deleteIsLoading,
        error: deleteError
    }] = useDeleteToDoMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("To-Do Create Success!")
        }
    }, [isSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("To-Do Delete Success!")
        }
    }, [deleteSuccess])

    useEffect(() => {
        if (deleteIsError) {
            toast.error("Unable to Delete To-Do!")
        }
    }, [deleteIsError])

    if (isError) {
        console.log(error)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div class="card mt-3">
                        <div class="card-header alert alert-warning fs-3 text-center">
                            To - Do CRUD
                        </div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("title")} className={handleClasses("title")}
                                        placeholder='Enter Title...'
                                    />
                                    <div className="invalid-feedback">
                                        {formik.errors.title}
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("desc")}
                                        className={handleClasses("desc")}
                                        placeholder='Enter Description...'
                                    />
                                    <div className="invalid-feedback">
                                        {formik.errors.desc}
                                    </div>
                                </div>

                                <div>
                                    <select
                                        {...formik.getFieldProps("priority")}
                                        className={handleClasses("priority")}
                                    >
                                        <option value="">
                                            Choose Priority
                                        </option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        {formik.errors.priority}
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                    {
                        data && <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => {
                                        return <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.priority}</td>
                                            <td className='d-flex justify-content-center gap-3'>
                                                <button
                                                    type="button"
                                                    class="btn btn-warning"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                    onClick={() => deleteToDo(item.id)}
                                                >
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
            </div>
        </div>
    )
}

export default ToDo