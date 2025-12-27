import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useCreateProductMutation, useDeleteProductMutation, useReadProductsQuery, useUpdateProductMutation } from '../redux/apis/product.api'
import { useEffect } from 'react'
import { toast } from "react-toastify"

const Products = () => {
    const [addProduct, { isLoading, isSuccess, isError, error }] = useCreateProductMutation()
    /*
    👆
    a) useCreateProductMutation()
    - RTK Query gives this hook to add/create a product (API call).
    b) addProduct
    - A function
    - You call it to send product data to the server
    c) Status information (object)
    Helps you know what’s happening with the API call:
    - isLoading → API call is in progress 
    - isSuccess → Product added successfully 
    - isError → Something went wrong 
    - error → Actual error message/details
    d) Simple meaning:
    “Give me a function to add a product, and also tell me whether it’s loading, successful, or failed.”
    */

    const {
        data,
        isLoading: readIsLoading,
        isSuccess: readIsSuccess,
        isError: readIsError,
        error: readError
    } = useReadProductsQuery()
    /*
    👆
    This line is taking values from RTK Query when you call useReadProductsQuery().
    a) What each one means:
    data → The products you get from the API (actual response)
    isLoading → true while data is being fetched
    isSuccess → true when data is successfully received
    isError → true if something goes wrong
    error → The error message/details (if API fails)
    */

    const [deleteProduct,
        {
            isLoading: deleteIsLoading,
            isSuccess: deleteIsSuccess,
            isError: deleteIsError,
            error: deleteError
        }
    ] = useDeleteProductMutation()
    /*
    👆
    a) deleteProduct 
    - a function
    → call this to delete a product
    b) isLoading 
    - true while the delete request is going on
    - (use it to show a loader)
    c) isSuccess 
    - true when product is deleted successfully
    - (show success message)
    d) isError 
    - true if delete failed
    - (show error message)
    e) error 
    - contains the error details if something went wrong
    */

    const [updateProduct,
        {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            isError: updateIsError,
            error: updateError
        }
    ] = useUpdateProductMutation()
    /*
    👆
    a) updateProduct
    - A function you call to update a product (API call).
    b) updateIsLoading
    - true while the update request is going on.
    c) updateIsSuccess
    - true when the product is updated successfully.
    d) updateIsError
    - true if something went wrong while updating.
    e) updateError
    - Contains the error message/details if update fails.
    */

    const formik = useFormik({
        initialValues: {
            title: "fake product",
            price: "50000",
            desc: "fake desc",
            hero: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addProduct({ ...values, publish: false })
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("product create success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "unable to  create product")
        }
    }, [isError])

    useEffect(() => {
        if (readIsError) {
            toast.error(readError ? readError.message : "unable to read product")
        }
    }, [readIsError])

    useEffect(() => {
        if (deleteIsSuccess) {
            toast.success("product Remove success")
        }
    }, [deleteIsSuccess])

    useEffect(() => {
        if (deleteIsError) {
            toast.error(deleteError ? deleteError.message : "unable to delete product")
        }
    }, [deleteIsError])

    useEffect(() => {
        if (updateIsSuccess) {
            toast.success("product update success")
        }
    }, [updateIsSuccess])

    useEffect(() => {
        if (updateIsError) {
            toast.error(updateError ? updateError.message : "unable to update producty")
        }
    }, [updateIsError])

    if (isLoading || readIsLoading || deleteIsLoading || updateIsLoading) {
        return <div class="spinner-border text-primary"></div>
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div class="card mt-3">
                        <div class="card-header alert alert-warning text-center fs-3">Products</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        className={handleClasses("title")}
                                        {...formik.getFieldProps("title")} type="text"
                                        placeholder='title'
                                    />
                                    <div >{formik.errors.title}</div>
                                </div>
                                <div>

                                    <input
                                        className={handleClasses("price")}
                                        {...formik.getFieldProps("price")}
                                        type="text"
                                        placeholder='price'
                                    />
                                    <div >{formik.errors.price}</div>
                                </div>
                                <div>

                                    <input
                                        className={handleClasses("desc")}
                                        {...formik.getFieldProps("desc")}
                                        type="text"
                                        placeholder='desc'
                                    />
                                    <div >{formik.errors.desc}</div>
                                </div>
                                <div>

                                    <input
                                        className={handleClasses("hero")}
                                        {...formik.getFieldProps("hero")} type="text"
                                        placeholder='hero'
                                    />
                                    <div >{formik.errors.hero}</div>
                                </div>
                                <button className='btn btn-primary w-100 btn-lg' type='submit'>Create</button>
                            </form>
                        </div>
                    </div>

                    <table class="table table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Desc</th>
                                <th>Hero</th>
                                <th>Publish</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map(item => {
                                    return <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.desc}</td>
                                        <td className='text-center align-middle'>
                                            <img src={item.hero} style={{ height: "100px" }} />
                                        </td>
                                        <td>
                                            {item.publish ? "Publish" : "UnPublish"}
                                        </td>
                                        <td className='d-flex justify-content-center gap-2 flex-column'>
                                            {
                                                item.publish
                                                    ? <button type="button" class="btn btn-warning me-2" onClick={() => updateProduct({ ...item, publish: false })}>UnPublish</button>
                                                    : <button type="button" class="btn btn-warning me-2" onClick={() => updateProduct({ ...item, publish: true })}>Publish</button>
                                            }
                                            <button type="button" class="btn btn-danger" onClick={() => deleteProduct(item.id)}>Remove</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Products