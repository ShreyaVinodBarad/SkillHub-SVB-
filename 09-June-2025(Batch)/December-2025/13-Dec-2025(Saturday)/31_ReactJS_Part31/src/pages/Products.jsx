import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { createProduct, readProduct } from '../redux/actions/product.actions'

const Products = () => {
    const [pagi, setPagi] = useState({ limit: 2, page: 1 })
    /*
    👆
    - useState is used to store data that can change in a component.
    pagi → current state value (pagination data).
    setPagi → function to update the pagination data.
    { limit: 2, page: 1 } → initial value
    limit: 2 → show 2 items per page
    page: 1 → start from page 1
    - Simply:
    This line creates pagination state with default page = 1 and items per page = 2.
    */

    const dispatch = useDispatch()
    /*
    👆
    This gives you the dispatch function.
    dispatch is used to send actions to Redux (for example: fetch data, add product, delete product).
    Think of it as a remote control to control Redux actions.
    */

    const { loading, error, allProducts, createSuccess, total } = useSelector(state => state.inventory)
    /*
    👆
    useSelector is used to read data from Redux store.
    state means the whole Redux store.
    state.inventory means you are taking data from the inventory reducer.
    { loading, error, allProducts, createSuccess, total }
    → This is object destructuring (taking values directly).
    So it is the same as writing:
    const loading = state.inventory.loading;
    const error = state.inventory.error;
    const allProducts = state.inventory.allProducts;
    const createSuccess = state.inventory.createSuccess;
    const total = state.inventory.total;
    */
    /*
    👆
    useDispatch() → Send data / actions
    useSelector() → Get data from Redux
    Destructuring → Short way to access values
    */

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            desc: "",
            hero: ""
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

    // 👇 Toast after create
    useEffect(() => {
        if (createSuccess) {
            toast.success("Product Create Success!")
        }
    }, [createSuccess])

    useEffect(() => {
        dispatch(readProduct(pagi))
    }, [pagi])
    /*
    👆
    - useEffect runs automatically when the component loads or when pagi changes.
    - dispatch(readProduct(pagi))
    sends an action to get products using pagination data (limit and page).
    - [pagi] is the dependency array
    means: run this code again only when pagi changes.
    - Simple meaning:
    Whenever page number or limit changes, fetch new products again.
    */

    return <>
        <div className="container">
            <div className="col-sm-8 offset-sm-2">
                <form onSubmit={formik.handleSubmit}>
                    <div class="card mt-3">
                        <div class="card-header alert alert-warning fs-3 text-center">
                            Pagination
                        </div>
                        <div class="card-body">
                            <div>
                                <input
                                    {...formik.getFieldProps("title")}
                                    type="text"
                                    placeholder='Enter Title...'
                                    className='form-control mt-3'
                                />
                                <div>
                                    {formik.errors.title}
                                </div>
                            </div>
                            <div>

                                <input
                                    {...formik.getFieldProps("price")}
                                    type="text"
                                    placeholder='Enter Price...'
                                    className='form-control mt-3'
                                />
                                <div>
                                    {formik.errors.price}
                                </div>
                            </div>
                            <div>
                                <input
                                    {...formik.getFieldProps("desc")}
                                    type="text"
                                    placeholder='Enter Description...'
                                    className='form-control mt-3'
                                />
                                <div>
                                    {formik.errors.desc}
                                </div>
                            </div>
                            <div>
                                <input
                                    {...formik.getFieldProps("hero")}
                                    type="text"
                                    placeholder='Enter Image URL...'
                                    className='form-control mt-3'
                                />
                                <div>
                                    {formik.errors.hero}
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 mt-3'>
                                Create
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <select class="form-select mt-3" onChange={event => setPagi({ ...pagi, limit: event.target.value })}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <button
                    onClick={() => setPagi({
                        ...pagi,
                        page: pagi.page > 1
                            ? pagi.page - 1
                            : 1
                    })}
                    className='mt-3 btn btn-danger w-50 fs-5'
                >
                    Pre
                </button>
                {/* 
        👆
        a) onClick={event => ...}
        - When the button is clicked, this function runs.
        b) setPagi({ ...pagi, page: ... })
        Updates the pagination state:
        ...pagi → keeps all existing values (like limit)
        page → updates only the page number
        pagi.page > 1 ? pagi.page - 1 : 1
        c) This is a condition:
        If current page is greater than 1 → go to previous page
        If page is already 1 → stay on page 1 (no negative pages)
        */}

                {
                    total && <button onClick={() => setPagi({
                        ...pagi,
                        page: pagi.page < Math.ceil(total / pagi.limit)
                            ? pagi.page + 1
                            : pagi.page
                        /*
                        👆
                        a) Math.ceil(total / pagi.limit)
                        total = total items
                        limit = items per page
                        Math.ceil = rounds up
                        - Gives total number of pages
                        b) Check current page
                        pagi.page < totalPages
                        Asks: Are we NOT on the last page?
                        c) If YES (true)
                        pagi.page + 1
                        - Move to the next page
                        d) If NO (false)
                        pagi.page
                        - Stay on the same page (don’t go beyond last page)
                        e) Small example
                        total = 10 items
                        limit = 2 items/page
                        total pages = 5
                        */
                    })}
                        className='mt-3 btn btn-success w-50 fs-5'
                    >
                        Next
                    </button>
                }
                {/* 
        👆
        1) total && <button>...</button>
        Means: Show the button only if total has a value
        If total is 0 or undefined, the button will not appear
        2) onClick={() => setPagi({...})}
        When the button is clicked, it updates pagination state
        setPagi is used to change page details
        3) ...pagi
        - Keeps the old pagination values (like limit)
        - Only updates what is written after this
        4) page: condition ? value1 : value2
        This is a ternary operator (short if–else)
            5) pagi.page < Math.ceil(total / pagi.limit)
            Checks: Is the current page less than total pages?
        Math.ceil(total / pagi.limit) = total number of pages 
        6) ? pagi.page + 1
        If yes → go to next page
        7) : pagi.page
        If no → stay on the same page
        */}

                <table class="table table-bordered my-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map(item => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <img src={item.hero} alt="image" style={{ height: "100px", borderRadius: "20px", textAlign: "center" }} />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Products