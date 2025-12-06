import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, deleteProduct, readProduct, updateProduct } from '../redux/actions/product.actions'

const Products = () => {
    const dispatch = useDispatch()
    const values = {
        title: "Fake Product",
        price: 500,
        image: "https://images.unsplash.com/photo-1764893217272-eea9608dde93?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    const { loading, error, createSuccess, updateSuccess, deleteSuccess, allProducts } = useSelector(state => state.products)
    //                                     👆 products named key From Store File
    // 👆 loading, error, createSuccess, updateSuccess, deleteSuccess, allProducts  => From Slice File

    useEffect(() => {
        dispatch(readProduct())
    }, [])
    useEffect(() => {
        if (createSuccess || deleteSuccess || updateSuccess) {
            dispatch(readProduct())
        }
    }, [createSuccess, deleteSuccess, updateSuccess])

    if (loading) {
        return <div className='spinner-border text-success'></div>
    }


    return (
        <div>
            <h4>
                Products
            </h4>
            <button type="button" class="btn btn-primary" onClick={() => dispatch(createProduct(values))}>
                Create
            </button>

            <table class="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map(item => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} alt="Image" style={{ height: "100px", objectFit: "contain" }} /></td>
                                <td className='d-flex gap-3'>
                                    <button type="button" class="btn btn-warning" onClick={() => dispatch(updateProduct({ ...item, title: "Dell Laptop" }))}>
                                        Update
                                    </button>
                                    <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteProduct(item.id))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products