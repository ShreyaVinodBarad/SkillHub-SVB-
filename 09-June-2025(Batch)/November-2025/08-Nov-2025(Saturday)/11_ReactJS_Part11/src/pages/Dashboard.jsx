import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [publish, setPublish] = useState("Yes")
    const [allBlogs, setAllBlogs] = useState([])
    const [selectedBlog, setSelectedBlog] = useState()
    const URL = "http://localhost:5000/article"

    const createBlog = async () => {
        try {
            await axios.post(URL, { title, desc, image, publish })
            toast.success("Blog Created Successfullly!")
            readBlog()
        }
        catch (err) {
            toast.error(err)
        }
    }
    // 👆 POST => URL + Body

    const readBlog = async () => {
        try {
            // await axios.get(URL)
            // const x = await axios.get(URL)
            // console.log(x) // 👉 Gives an Object => data is a key where all the is stored
            const { data } = await axios.get(URL) // data an Array of Object
            setAllBlogs(data)
        }
        catch (err) {
            toast.error(err)
        }
    }
    // 👆 GET => URL

    const updateBlog = async () => {
        try {
            await axios.patch(`${URL}/${selectedBlog.id}`, { title, desc, image, publish })
            toast.success("Blog Updated Successfullly!")
            readBlog()
        }
        catch (err) {
            toast.error(err)
        }
    }
    // 👆 PUT / PATCH => URL + ID + Body 

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${URL}/${id}`)
            toast.success("Blog Deleted Successfullly!")
            readBlog()
        }
        catch (err) {
            toast.error(err)
        }
    }
    // 👆 DELETE => URL + ID

    const handleEdit = item => {
        setTitle(item.title)
        setDesc(item.desc)
        setImage(item.image)
        setPublish(item.publish)
        setSelectedBlog(item)
    }
    // 👆 When clicked on Edit Button then all the from the respective field will be inserted in their input for further editing.

    useEffect(() => {
        readBlog()
    }, [])
    return (
        <div>
            {/* <h3 className='alert alert-success mx-3 text-center mt-3'>
                Admin Page
            </h3> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card my-3">
                            <div class="card-body">

                                <input value={title} class="form-control mt-3" type="text" placeholder='Enter Title...' onChange={event => setTitle(event.target.value)} />

                                <textarea value={desc} class="form-control mt-3" placeholder='Enter Description...' onChange={event => setDesc(event.target.value)}></textarea>

                                <input value={image} type="text" placeholder='Enter Image URL...' class="form-control mt-3" onChange={event => setImage(event.target.value)} />

                                <select class="form-select mt-3" onChange={event => setPublish(event.target.value)} value={publish}>
                                    <option value="">
                                        Do you want to Publish?
                                    </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                {
                                    selectedBlog
                                        ? <button type="button" class="btn btn-warning w-100 mt-3" onClick={updateBlog}>Edit Blog</button>
                                        : <button type="button" class="btn btn-primary w-100 mt-3" onClick={createBlog}>Create Blog</button>
                                }


                            </div>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Publish</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBlogs.map(item => {
                                        return <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.desc}</td>
                                            <td className='text-center'><img src={item.image} style={{ height: "150px", width: "100%", objectFit: "cover" }} /></td>
                                            <td>{item.publish}</td>
                                            <td className='d-flex justify-content-center align-items-center gap-3'>
                                                <button type="button" class="btn btn-warning" onClick={() => handleEdit(item)}>Edit</button>
                                                <button type="button" class="btn btn-danger" onClick={() => deleteBlog(item.id)}>Delete</button>
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

export default Dashboard