import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createProduct, readProduct } from '../redux/actions/product.actions'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import clsx from 'clsx'
const Products = () => {

    const [pagi, setPagi] = useState({ limit: 2, page: 1 })

    const dispatch = useDispatch()
    const { loading, error, allProducts, createSuccess, total } = useSelector(state => state.inventory)

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            desc: "",
            hero: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(createProduct(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (createSuccess) {
            toast.success("product create success")
        }
    }, [createSuccess])

    useEffect(() => {
        dispatch(readProduct(pagi))
    }, [pagi])

    const handlePagination = () => {
        // 👆 Creates a function that will generate pagination buttons.
        if (total) {
            // 👆 Run pagination logic only if total number of items is available.
            const totalBtn = Math.ceil(total / pagi.limit)
            /*
            👆
            Calculate total number of pages
            Total pages = total products ÷ items per page (rounded up)
            Example:
            10 products / 3 limit = 4 pages
            */
            const allBtn = Array
                .from({ length: totalBtn })
                /*
                👆
                Create page number buttons
                Creates an array with length equal to number of pages
                Example:
                totalBtn = 4 → [ , , , ]
                */
                .map((item, i) => {
                    /*
                    👆
                    Convert array items into buttons
                    Loops through each page number
                    */
                    return <button
                        onClick={() => setPagi({ ...pagi, page: i + 1 })}
                        type='button'
                        className={
                            clsx({
                                "btn mt-3 w-100": true,
                                // 👆 Button always has Bootstrap btn class
                                "btn-primary": pagi.page === i + 1,
                                // 👆 If this is the current page, make it blue
                                "btn-outline-primary": pagi.page !== i + 1
                                // 👆 Other pages get outline style
                            })
                        }
                    >
                        {i + 1}
                        {/* 👆 Button text: Shows page number (1, 2, 3...) */}
                    </button>
                    /*
                    👆
                    Page button JSX
                    1) return <button
                    - Creates one button per page
                    2) onClick={() => setPagi({ ...pagi, page: i + 1 })}
                    - When clicked:
                    a) Keeps old pagination values
                    b) Updates current page to i + 1
                    3) Dynamic button styling (clsx)
                    className={clsx({
                    - Applies CSS classes based on condition
                    */
                }
                )
            const preBtn = pagi.page === 1
                ? null
                // 👆 If on first page, don’t show “Pre” button
                : <button
                    // 👆 Otherwise, show “Pre” button
                    className='btn btn-danger fs-5 w-100 mt-3'
                    onClick={() => setPagi({
                        ...pagi,
                        page: pagi.page === 1 ? 1 : pagi.page - 1
                    })}
                /*
                👆 
                Moves to previous page
                Never goes below page 1
                */
                >
                    Pre
                </button>

            const nextBtn = pagi.page === totalBtn
                ? null
                // 👆 If on last page, hide “Next” button
                : <button
                    // 👆 Otherwise, show “Next” button
                    className='btn btn-success fs-5 w-100 mt-3'
                    onClick={() => setPagi({
                        ...pagi,
                        page: pagi.page === totalBtn ? totalBtn : pagi.page + 1
                    })}
                /*
                👆 
                Moves to next page
                Never exceeds last page
                */
                >
                    Next
                </button>
            allBtn.unshift(preBtn)
            /*
            👆
            Add Pre button at start
            Inserts “Pre” button at beginning of buttons array
            */
            allBtn.push(nextBtn)
            /*
            👆
            Add Next button at end
            Inserts “Next” button at end
            */
            return allBtn
            // 👆 Return all buttons: Sends buttons to JSX for rendering
        }
    }

    return <>
        <div className="container">
            <div className="col-sm-8 offset-sm-2">
                <div class="card my-3">
                    <div class="card-header alert alert-warning fs-3 text-center">
                        Pagination
                    </div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    {...formik.getFieldProps("title")}
                                    type="text"
                                    placeholder='title'
                                    className='form-control mt-3'
                                />
                                <div >{formik.errors.title}</div>
                            </div>
                            <div>
                                <input
                                    {...formik.getFieldProps("price")}
                                    type="text"
                                    placeholder='price'
                                    className='form-control mt-3'
                                />
                                <div >{formik.errors.price}</div>
                            </div>
                            <div>
                                <input
                                    {...formik.getFieldProps("desc")}
                                    type="text"
                                    placeholder='desc'
                                    className='form-control mt-3'
                                />
                                <div >{formik.errors.desc}</div>
                            </div>
                            <div>
                                <input
                                    {...formik.getFieldProps("hero")}
                                    type="text"
                                    placeholder='hero'
                                    className='form-control mt-3'
                                />
                                <div >{formik.errors.hero}</div>
                            </div>
                            <button type='submit' className='btn btn-success w-100 mt-3'>
                                Create
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <select onChange={event => setPagi({ page: 1, limit: event.target.value })} className='form-select'>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>

                {
                    handlePagination()
                }

                <table class="table table-bordered my-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>price</th>
                            <th>desc</th>
                            <th>hero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <img src={item.hero} height={50} alt="" />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {/* 
                {
                    handlePagination()
                }
                */}
            </div>
        </div>
    </>
}

export default Products