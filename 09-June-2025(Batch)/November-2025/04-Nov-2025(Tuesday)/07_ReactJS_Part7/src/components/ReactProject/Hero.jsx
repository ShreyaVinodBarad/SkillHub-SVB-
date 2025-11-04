import React from 'react'

const Hero = ({ productsDetailsArr, cart, setCart }) => {
    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    {
                        productsDetailsArr.map(item =>
                            <div className="col-sm-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img src={item.image} className='img-fluid' style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div class="card-footer alert alert-warning mb-0">
                                        <h4>{item.name}</h4>
                                        <h5>Rs. {item.price}</h5>
                                        <button type="button" class="btn btn-primary w-100" onClick={() => setCart([...cart, item])}>
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

export default Hero