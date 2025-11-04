import React from 'react'

const NavBar = ({ cart, setCart }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container d-flex justify-content-between align-items-center">
                    <a class="navbar-brand" href="#">React Cart</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {/* <a class="nav-link active" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a> */}
                            <button data-bs-toggle="offcanvas" data-bs-target="#wishlist" className='btn btn-secondary d-flex justify-content-center align-items-center gap-2'><i className="bi bi-cart"></i>{cart.length}</button>
                        </div>
                    </div>
                </div>
            </nav >
            <div className="offcanvas offcanvas-start" id='wishlist'>
                <div className="offcanvas-header alert alert-primary rounded-0"><h2>Cart</h2></div>
                <div className="offcanvas-body">
                    {
                        cart.map(item =>
                            <div class="card my-3">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <img src={item.image} className='img-fluid' style={{ height: "130px", width: "100%", objectFit: "cover" }} />
                                        </div>
                                        <div className="col-sm-9 d-flex flex-column justify-content-center justify-content-between alert alert-success" >
                                            <h5>{item.name}</h5>
                                            <h6>Rs. {item.price}</h6>
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                onClick={() => setCart(cart.filter(filteredItem => filteredItem.id !== item.id))}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div >
    )
}

export default NavBar