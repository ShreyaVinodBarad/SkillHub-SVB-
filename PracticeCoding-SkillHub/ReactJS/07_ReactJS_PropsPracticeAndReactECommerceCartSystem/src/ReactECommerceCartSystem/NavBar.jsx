import React from 'react'

const NavBar = ({ cart, setCart }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        React E-Commerce Cart System
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <button
                            type="button"
                            class="btn btn-success d-flex justify-content-center align-items-center gap-2"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#wishlist"
                        >
                            <i class="bi bi-cart fs-5"></i>
                            {cart.length}
                        </button>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start" id="wishlist">
                <div class="offcanvas-header alert alert-warning">
                    <h4 class="offcanvas-title" id="offcanvasExampleLabel">
                        Cart
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    {
                        cart.map(item => <div class="card mt-3">
                            <div class="card-body">
                                <img src={item.image} alt="" style={{ height: "220px", width: "100%", objectFit: "cover" }} />
                            </div>
                            <div class="card-footer alert alert-success mb-0 text-center">
                                <h4>{item.name}</h4>
                                <h5>Rs. {item.price}</h5>
                                <button
                                    type="button"
                                    class="btn btn-danger w-100"
                                    onClick={() => setCart(cart.filter(cartItem => cartItem.id !== item.id))}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar