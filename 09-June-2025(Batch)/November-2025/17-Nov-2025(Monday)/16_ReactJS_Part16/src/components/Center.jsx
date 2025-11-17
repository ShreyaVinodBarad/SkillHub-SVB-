import React from 'react'

const Center = ({ children, allProducts, deleteProducts, setSelectedProduct }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning text-center fs-4">
                                Products CRUD
                            </div>
                            <div class="card-body">
                                {children}
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.map(item => {
                                        return <tr>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.price}
                                            </td>
                                            <td>
                                                {item.desc}
                                            </td>
                                            <td>
                                                {item.category}
                                            </td>
                                            <td>
                                                {item.stock}
                                            </td>
                                            <td className='d-flex flex-column gap-3'>
                                                <button
                                                    type="button"
                                                    class="btn btn-warning"
                                                    onClick={() => setSelectedProduct(item)}
                                                >
                                                    <i className="bi  bi-pencil"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                    onClick={() => deleteProducts(item.id)}
                                                >
                                                    <i className="bi  bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center