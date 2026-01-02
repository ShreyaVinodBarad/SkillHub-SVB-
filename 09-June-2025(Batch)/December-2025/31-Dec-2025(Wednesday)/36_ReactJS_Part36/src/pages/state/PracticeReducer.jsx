import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useReducer } from 'react'

const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO": return { ...state, NOTES: [...state.NOTES, payload] };
        case "UPDATE_TODO": return;
        case "DELETE_TODO": return { ...state, NOTES: state.NOTES.filter(item => item.id !== payload) };
        default: return state;
    }
}

const PracticeReducer = () => {

    const [{ NOTES }, dispatch] = useReducer(todoReducer, { NOTES: [] })

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: ""
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch({ type: "ADD_TODO", payload: { ...values, id: NOTES.length + 1 } })
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">
                                ToDo
                            </div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            className={handleClasses("task")}
                                            {...formik.getFieldProps("task")}
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.task}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className={handleClasses("desc")}
                                            {...formik.getFieldProps("desc")}
                                        />
                                        <div className="invalid-feedback">
                                            {formik.errors.desc}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-3 w-100">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                        {
                            NOTES && <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        NOTES.map(item => <tr>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.desc}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger" onClick={() => dispatch({ type: "DELETE_TODO", payload: item.id })}>Delete</button>
                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeReducer