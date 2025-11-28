import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../shared/utility'

const AdminAuthor = () => {
    const [allAuthors, setAllAuthors] = useState([])
    const handleAuthorsData = async () => {
        try {
            const { data } = await axios.get(`${URL}/users`, { params: { role: "author" } })
            setAllAuthors(data)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    const handleAuthorAccount = async (id, status) => {
        try {
            await axios.patch(`${URL}/users/${id}`, { active: status })
            handleAuthorsData()
            toast.success("Account Update Success!")
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    useEffect(() => {
        handleAuthorsData()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allAuthors.map(item => {
                                        return <tr className={`${item.active ? "table-success" : "table-danger"}`}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img src={item.photo} alt="AuthorPhoto"
                                                    style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} />
                                            </td>
                                            <td>{item.email}</td>
                                            <td>
                                                {
                                                    item.active ? "Active" : "In Active"
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.active
                                                        ? <button type="button" class="btn btn-danger" onClick={() => handleAuthorAccount(item.id, false)}>
                                                            <i className="bi bi-ban"></i>
                                                        </button>
                                                        : <button type="button" class="btn btn-success" onClick={() => handleAuthorAccount(item.id, true)}>
                                                            <i className="bi bi-unlock"></i>
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

export default AdminAuthor