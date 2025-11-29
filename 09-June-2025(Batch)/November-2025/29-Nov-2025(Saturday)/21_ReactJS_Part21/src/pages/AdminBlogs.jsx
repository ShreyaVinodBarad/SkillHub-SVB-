import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../shared/utility'
import { toast } from 'react-toastify'

const AdminBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const handleBlogTable = async () => {
        const { data } = await axios.get(`${URL}/blogs`)
        setAllBlogs(data)
    }
    const handleBlog = async (id, status) => {
        try {
            await axios.patch(`${URL}/blogs/${id}`, { publish: status })
            toast.success("Blog Update Success!")
            handleBlogTable()
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }
    useEffect(() => {
        handleBlogTable()
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-08 offset-sm-02">
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Publish</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBlogs.map(item => {
                                        return <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td className='text-center'>
                                                <img
                                                    src={item.image}
                                                    alt="Image"
                                                    style={{
                                                        height: "100px",
                                                        width: "100px",
                                                        objectFit: "cover",
                                                        borderRadius: "50%"
                                                    }}
                                                />
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
                                            <td>
                                                {
                                                    item.publish
                                                        ? <button
                                                            type="button"
                                                            class="btn btn-danger"
                                                            onClick={() => handleBlog(item.id, false)}
                                                        >
                                                            UnPublish
                                                        </button>
                                                        : <button
                                                            type="button"
                                                            class="btn btn-success"
                                                            onClick={() => handleBlog(item.id, true)}>
                                                            Publish
                                                        </button>
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
        </div>
    )
}

export default AdminBlogs