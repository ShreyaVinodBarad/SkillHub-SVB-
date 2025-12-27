import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useGetPublicProductsQuery } from "../redux/apis/public.api"
import { addToCart } from "../redux/slices/cart.slice"

const Home = () => {
    const { data, isLoading, isError, error } = useGetPublicProductsQuery()
    /*
    👆 
    This line gets products from the server using RTK Query and gives you useful information about the request.
    What each part means:
    a) data 👉 The products you get from the API (response).
    b) isLoading 👉 true while data is being fetched.
    c) isError 👉 true if something went wrong.
    d) error 👉 Details about the error (if any).
    */
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "Unable to Fetch Data!")
        }
    }, [isError])

    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        data && data.map(item => {
                            return <div className="col-sm-4">
                                <div class="card mt-3">
                                    <div class="card-header">
                                        <img src={item.hero} className='img-fluid' />
                                    </div>
                                    <div class="card-body alert alert-warning mb-0">
                                        <h3 className='text-center'>{item.title}</h3>
                                        <p className='fs-4 text-center'>Price: {item.price}</p>
                                        <p className='fs-5 text-center'>{item.desc}</p>
                                        <button
                                            type="button"
                                            class="btn btn-primary w-100"
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            Add to Cart
                                        </button>
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