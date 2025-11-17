import React, { useEffect, useState } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { } from "clsx"
import clsx from 'clsx'
import axios from "axios"
import { toast } from "react-toastify"
import Center from '../components/Center'

const Products = () => {
    const URL = "http://localhost:5000/products"
    const [allProducts, setAllProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedProduct ? selectedProduct.name : "",
            price: selectedProduct ? selectedProduct.price : "",
            desc: selectedProduct ? selectedProduct.desc : "",
            category: selectedProduct ? selectedProduct.category : "",
            stock: selectedProduct ? selectedProduct.stock : ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            price: yup.number().required(),
            desc: yup.string().required(),
            category: yup.string().required(),
            stock: yup.number().required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            selectedProduct ? updateProducts() : createProducts()
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control mt-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    const createProducts = async () => {
        try {
            await axios.post(URL, formik.values)
            toast.success("Product Created Successfully!")
            readProducts()
        }
        catch (err) {
            toast.error(err)
        }
    }

    const readProducts = async () => {
        try {
            const { data } = await axios.get(URL)
            setAllProducts(data)
        } catch (err) {
            toast.error(err)
        }
    }

    const updateProducts = async () => {
        try {
            await axios.patch(`${URL}/${selectedProduct.id}`, formik.values)
            toast.success("Product Updated Successfully!")
            readProducts()
            setSelectedProduct(null)
        } catch (err) {
            toast.error(err)
        }
    }

    const deleteProducts = async id => {
        try {
            await axios.delete(`${URL}/${id}`)
            toast.success("Product Deleted Successfully!")
            readProducts()
        } catch (err) {
            toast.error(err)
        }
    }

    useEffect(() => {
        readProducts()
    }, [])

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Center allProducts={allProducts} deleteProducts={deleteProducts} setSelectedProduct={setSelectedProduct}>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter name of Product...'
                            {...formik.getFieldProps("name")}
                            className={handleClasses("name")}
                        />
                        <span className='invalid-feedback'>
                            {formik.errors.name}
                        </span>
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder='Enter Product Price...'
                            {...formik.getFieldProps("price")}
                            className={handleClasses("price")}
                        />
                        <span className='invalid-feedback'>
                            {formik.errors.price}
                        </span>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='Enter Product Description...'
                            {...formik.getFieldProps("desc")}
                            className={handleClasses("desc")}
                        />
                        <span className='invalid-feedback'>
                            {formik.errors.desc}
                        </span>
                    </div>

                    <div>
                        <select
                            class="form-select"
                            {...formik.getFieldProps("category")}
                            className={handleClasses("category")}
                        >
                            <option value="">
                                Choose Category...
                            </option>
                            <option value="Clothing">
                                Clothing
                            </option>
                            <option value="Shoes">
                                Shoes
                            </option>
                            <option value="Electronics">
                                Electronics
                            </option>
                        </select>
                        <span className='invalid-feedback'>
                            {formik.errors.category}
                        </span>
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder='Enter Stock...'
                            {...formik.getFieldProps("stock")}
                            className={handleClasses("stock")}
                        />
                        <span className='invalid-feedback'>
                            {formik.errors.stock}
                        </span>
                    </div>

                    {
                        selectedProduct
                            ? <div>
                                <button type="submit" class="btn btn-warning w-100 mt-3">
                                    Update Product
                                </button>
                                <button type="submit" class="btn btn-danger w-100 mt-3" onClick={() => setSelectedProduct(null)}>
                                    Cancle Product
                                </button>
                            </div>
                            :
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Add Product
                            </button>
                    }

                </Center >
            </form >
        </div >
    )
}

export default Products