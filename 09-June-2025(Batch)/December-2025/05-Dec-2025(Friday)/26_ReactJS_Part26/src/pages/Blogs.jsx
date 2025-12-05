import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog, readBlog } from '../redux/actions/blog.actions'
const Blogs = () => {
    const dispatch = useDispatch()

    // Slice File 👇
    const { allBlogs, loading, error, success } = useSelector(state => state.devBlog)
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            image: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(createBlog(formik.values))
            alert("Blog Created!")
            console.log(formik.values)
            resetForm()
        }
    })
    const handleClasses = (key) => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })


    useEffect(() => {
        dispatch(readBlog())
    }, [])

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning fs-4 text-center">
                                    Blog
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses("title")}
                                            {...formik.getFieldProps("title")}
                                            placeholder="Enter Your Title"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.title}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses("desc")}
                                            {...formik.getFieldProps("desc")}
                                            placeholder="Enter Your Desc"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.desc}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <input
                                            type="text"
                                            class={handleClasses("image")}
                                            {...formik.getFieldProps("image")}
                                            placeholder="Enter Image URL"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.image}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Create Blog
                                    </button>
                                </div>
                            </div>
                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allBlogs.map(item => {
                                            return <tr>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.desc}</td>
                                                <td>
                                                    <img src={item.image} alt="Image" style={{ height: "100px", objectFit: "contain" }} />
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

export default Blogs