import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'
import clsx from 'clsx'

const Dashboard = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: ""
        },
        validationSchema: yup.object({
            title: yup.string().required("Ttile is important!"),
            desc: yup.string().required("Description is important!"),
            image: yup.string().required("Image URL is important!")
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    /*
    const titleClasses = clsx({
        "form-control": true,
        "is-invalid": formik.touched.title && formik.errors.title,
        "is-valid": formik.touched.title && !formik.errors.title
    })
    console.log(titleClasses)
    */
    /*
    👆
    - The above code uses clsx — a library that helps join class names conditionally.
    - Concept in short and easy words:
    a) You pass an object to clsx().
    b) Keys = class names.
    c) Values = true or false conditions.
    d) If the value is true, that class is added; if false, it’s skipped.
    - It’s a clean way to add classes based on conditions instead of writing long if statements or ternary operators.
    */

    const descClasses = clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched.desc && formik.errors.desc,
        "is-valid": formik.touched.desc && !formik.errors.desc
    })
    console.log(descClasses)

    const imageClasses = clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched.image && formik.errors.image,
        "is-valid": formik.touched.image && !formik.errors.image
    })
    console.log(imageClasses)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning text-center fs-4">
                                Formik Blog
                            </div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <input type="text" placeholder='Enter title...' className={handleClasses("title")} name='title' {...formik.getFieldProps("title")} />

                                    <input type="text" placeholder='Enter description...' name='desc' {...formik.getFieldProps("desc")} className={handleClasses("desc")} />

                                    <input type="text" placeholder='Enter image URL...' name='image' className={handleClasses("image")} {...formik.getFieldProps("image")} />

                                    <button type="submit" class="btn btn-primary w-100 my-3">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                        <pre className='alert alert-success mt-3'>
                            {JSON.stringify(formik.values, null, 2)}
                        </pre>
                        <pre className='alert alert-danger'>
                            {JSON.stringify(formik.errors, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

/*
1) {...formik.getFieldProps("title")}
- This line connects your input field to Formik.
a) Explanation:
formik.getFieldProps("title") gives all the things Formik needs to control and track the "title" field — like its value, onChange, and onBlur.
- The ... (spread operator) puts all those properties inside the input tag automatically.
b) Example:
<input type="text" {...formik.getFieldProps("title")} />
- This is the same as writing:
<input
  type="text"
  name="title"
  value={formik.values.title}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
/>
c) In simple words:
It’s a shortcut to make your input field work with Formik easily — no need to write value, onChange, and onBlur separately.
-----------------------------------------------------------------
*/ 