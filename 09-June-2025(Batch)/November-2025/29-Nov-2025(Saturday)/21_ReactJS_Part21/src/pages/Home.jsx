import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../shared/utility'

const Home = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const handleGetBlogs = async () => {
        try {
            const { data } = await axios.get(`${URL}/blogs`, { params: { publish: true } })
            setAllBlogs(data)
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
            <div className="row">
                {
                    allBlogs.map(item => <div className='col-sm-3'>
                        <div class="card h-100 mt-3">
                            <div class="card-body">
                                <img src={item.image} alt="Image" className='card-img-top' style={{
                                    height: "130px",
                                    objectFit: "cover"
                                }} />
                                <div className='alert alert-primary mt-3 h-50 text-center'>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home