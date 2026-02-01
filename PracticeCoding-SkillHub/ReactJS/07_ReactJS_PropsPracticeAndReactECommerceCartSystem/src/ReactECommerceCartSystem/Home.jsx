import React from 'react'

const Home = ({ productDetailsArr, cart, setCart }) => {
    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    {
                        productDetailsArr.map(item => <div className='col-sm-4 mt-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img
                                        src={item.image}
                                        style={{ height: "210px", width: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div class="card-footer alert alert-warning mb-0 text-center">
                                    <h4>{item.name}</h4>
                                    <h5>Rs. {item.price}</h5>
                                    <button
                                        type="button"
                                        class="btn btn-primary w-100"
                                        onClick={() => setCart([...cart, item])}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home