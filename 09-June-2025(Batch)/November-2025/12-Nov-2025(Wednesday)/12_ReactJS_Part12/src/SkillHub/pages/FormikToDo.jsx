import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'

const FormikToDo = () => {
    const formik = useFormik({
        initialValues: { task: "", desc: "", priority: "" },
        validationSchema: yup.object({
            task: yup
                .string()
                .required("Task value is Mandatory!")
                .min(2, "Too Short..."),
            desc: yup
                .string()
                .required("Description is Mandotary!"),
            priority: yup
                .string()
                .required("Priority is Mandotary!")
        }),
        onSubmit: () => {
            console.log("Form Submitted! 🎉")
            console.log(formik.values.task)
            console.log(formik.values.desc)
            console.log(formik.values.priority)
        }
    })
    console.log(formik)
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <form onSubmit={formik.handleSubmit}>
                                <div class="card-header alert alert-primary fs-3 text-center">Formik + Yup</div>
                                <div class="card-body">

                                    <div>
                                        {/* 👆 To use invaild-feedback we need to wrap input in div */}
                                        <input
                                            type="text"
                                            className={`form-control ${formik.errors.task && "is-invalid"} ${formik.touched.task && !formik.errors.task && "is-valid"}`} placeholder='Enter Task...'
                                            name='task'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        <span className='invalid-feedback'>
                                            {formik.errors.task}
                                        </span>
                                    </div>

                                    <div>
                                        <textarea
                                            className={`form-control mt-3 ${formik.errors.desc && "is-invalid"}
                                            ${formik.touched.desc && !formik.errors.desc && "is-valid"}`}
                                            placeholder='Enter Description...' name='desc'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                        </textarea>

                                        <span className='invalid-feedback'>
                                            {formik.errors.desc}
                                        </span>
                                    </div>

                                    <div>
                                        <select
                                            class={`form-select mt-3 ${formik.errors.priority && "is-invalid"}     
                                            ${formik.touched.priority && !formik.errors.priority && "is-valid"}`}
                                            name='priority'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>

                                        <span className='invalid-feedback'>
                                            {formik.errors.priority}
                                        </span>
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 mt-3">Add</button>
                                </div>
                            </form>
                        </div>

                        <pre className='alert alert-success fs-5 text-center mt-3'>
                            <span>formik.values</span>
                            <br />
                            {JSON.stringify(formik.values, null, 2)}
                            {/* 
                            👆
                            - It is used just to display the form data (values) neatly like an object on the screen — it converts the formik.values object into a readable JSON format with proper spacing (2 spaces).
                            - In short: it shows form values clearly in object style for checking/debugging.
                            */}
                        </pre>
                        <pre className='alert alert-warning fs-5 text-center mt-3'>
                            <span>formik.errors</span>
                            <br />
                            {JSON.stringify(formik.errors, null, 2)}
                        </pre>
                        <pre className='alert alert-secondary fs-5 text-center mt-3'>
                            <span>handleBlur & formik.touched</span>
                            <br />
                            {JSON.stringify(formik.touched, null, 2)}
                        </pre>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default FormikToDo

/*
1) 
a) onBlur={formik.handleBlur}
- When you move out of an input field (click away or press Tab), Formik runs handleBlur.
- It marks that field as “touched” — meaning the user has interacted with it once.
b) formik.touched
- It’s an object that keeps track of which fields have been touched.
c) Example:
touched: { name: true, email: false }
- means the user has clicked out of the “name” field but not the “email” one.
d) So basically:
- onBlur={formik.handleBlur} → tells Formik when a field is touched.
- formik.touched → helps you check and show validation errors only after a user leaves that field.
--------------------------------------------------------------
*/ 