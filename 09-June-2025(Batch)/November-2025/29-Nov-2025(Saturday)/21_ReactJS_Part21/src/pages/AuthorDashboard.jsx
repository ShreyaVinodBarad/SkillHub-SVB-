import React, { useContext, useEffect, useState } from 'react'
import { handleClasses, URL } from '../shared/utility'
import { useFormik } from 'formik'
import * as yup from "yup"
import { toast } from 'react-toastify'
import axios from 'axios'
import { AuthContext } from '../App'

const AuthorDashboard = () => {
    const [allBlogs, getAllBlogs] = useState([])
    const { auth } = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: ""
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            image: yup.string().required()
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(`${URL}/blogs`, { ...formik.values, publish: false, author: auth.author.id })
                toast.success("Blog Create Successfully!")
                handleGetBlogs()
                resetForm()
            } catch (err) {
                toast.error(err)
                console.log(err)
            }
        }
    })

    const handleGetBlogs = async () => {
        try {
            const { data } = await axios.get(`${URL}/blogs`)
            getAllBlogs(data)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }



    useEffect(() => {
        handleGetBlogs()
    }, [])
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 offset-sm-2">
                            <div class="card mt-3">
                                <div class="card-header alert alert-warning fs-4 text-center">
                                    Blog
                                </div>
                                <div class="card-body">
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "title")}
                                            placeholder="Enter title..."
                                            {...formik.getFieldProps("title")}
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.title}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <textarea
                                            class={handleClasses(formik, "desc")}
                                            {...formik.getFieldProps("desc")}
                                            placeholder='Enter description...'
                                        >
                                        </textarea>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            {formik.errors.desc}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            class={handleClasses(formik, "image")}
                                            {...formik.getFieldProps("image")}
                                            placeholder="Enter image URL..."
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
                                        <th>Image</th>
                                        <th>Description</th>
                                        <th>Publish</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allBlogs.map(item => {
                                            return <tr>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>
                                                    <img src={item.image} alt="BlogImg" style={{ height: "100px", width: "100px", objectFit: "cover", borderRadius: "50%" }} />
                                                </td>
                                                <td>{item.desc}</td>
                                                <td>
                                                    {
                                                        item.publish
                                                            ? <span class="badge text-bg-success">
                                                                Publish
                                                            </span>
                                                            : <div className='spinner spinner-border'>
                                                            </div>
                                                    }
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

export default AuthorDashboard