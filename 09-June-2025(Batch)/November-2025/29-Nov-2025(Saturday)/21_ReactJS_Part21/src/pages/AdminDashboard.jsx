import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../shared/utility'
import axios from 'axios'

const AdminDashboard = () => {

    const [stat, setStat] = useState([
        {
            label: "Author",
            count: 0,
            varient: "primary"
        },
        {
            label: "Blogs",
            count: 0,
            varient: "warning"
        },
        {
            label: "Active",
            count: 0,
            varient: "success"
        },
        {
            label: "InActive",
            count: 0,
            varient: "danger"
        }
    ])

    const getAllAuthors = async () => {
        try {
            const { data } = await axios.get(`${URL}/users`, { params: { role: "author" } })
            console.log(data.length)
            const copy = [...stat]
            copy[0].count = data.length
            copy[2].count = data.filter(item => item.active === true).length
            copy[3].count = data.filter(item => item.active === false).length
            setStat(copy)
            // We can't change state variable directly, so we are making copy ot it.
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get(`${URL}/blogs`)
            const copy = [...stat]
            copy[1].count = data.length
            setStat(copy)
            console.log(data.length)
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    useEffect(() => {
        getAllAuthors()
        getAllBlogs()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        stat.map(item => {
                            return <div className="col-sm-3">
                                <div class={`card mt-3 alert alert-${item.varient}`}>
                                    <div class="card-body d-flex justify-content-between">
                                        <div>{item.label}</div>
                                        <div className='display-5'>
                                            {item.count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {/* 👆 Rather than repeating same code for designing 4 cards we are using map  */}
                </div>
            </div>
        </div >
    )
}

export default AdminDashboard