import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import axios from "axios"

const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    const URL = "http://localhost:5000/products"
    const readProducts = async () => {
        try {
            const { data } = await axios.get(URL)
            setAllProducts(data)
        } catch (err) {
            toast.error(err)
        }
    }
    useEffect(() => {
        readProducts()
    }, [])
    return (
        <div>
            {/* <h4 className='alert alert-primary mt-3 text-center'>
                Home Page
            </h4> */}
            <div className="container">
                <div className="row mt-3">
                    {
                        allProducts.map(item => {
                            return <div className="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-header alert alert-warning fs-5 text-center mb-0">
                                        {item.name}
                                    </div>
                                    <div class="card-body alert alert-primary my-0">
                                        <ul class="list-group">
                                            <li class="list-group-item text-center">
                                                Product Price: {item.price}
                                            </li>
                                            <li class="list-group-item text-center">
                                                Product Description: {item.desc}
                                            </li>
                                            <li class="list-group-item text-center">
                                                Product Category: {item.category}
                                            </li>
                                            <li class="list-group-item text-center">
                                                Product Stock: {item.stock}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home