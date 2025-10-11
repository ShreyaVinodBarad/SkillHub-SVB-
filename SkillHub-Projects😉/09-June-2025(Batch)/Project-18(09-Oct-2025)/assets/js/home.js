const home = document.getElementById("home")
const count = document.getElementById("count")
const URL = "http://localhost:5000"
const getAllProducts = async () => {
    try {
        const res = await fetch(`${URL}/products`, { method: "GET" })
        const data = await res.json()
        home.innerHTML = data.map(item =>
            `
            <div class="col-sm-4 my-3">
                <div class="card">
                    <div class="card-body">
                        <img src="${item.image}" alt="" style = "width:100%; height:150px; object-fit:contain;background-color: #f5f5f5;">
                        <div class = "alert alert-success my-3">
                        <h5 class="text-center">${item.name}</h5>
                        <div class="text-center">Price: Rs. ${item.price}</div>
                        <div class="text-center">${item.description}</div>
                        </div>
                        <button type="button"                              onclick = "handleAddToCart('${item.id}','${item.name}','${item.price}','${item.description}','${item.image}')" class="btn btn-primary w-100">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            `
        ).join("")
    }
    catch (error) {
        console.log(error)
    }
}

window.handleAddToCart = async (id, name, price, description, image) => {
    try {
        const cartData = { pid: id, name, price, description, image }
        await fetch(`${URL}/cart`, {
            method: "POST",
            body: JSON.stringify(cartData),
            headers: { "Content-type": "application/json" }
        })
        displayCart()
        console.log("Add to Cart Successfully!")
    }
    catch (error) {

    }
}

const displayCart = async () => {
    try {
        const res = await fetch(`${URL}/cart`)
        const data = await res.json()
        count.innerHTML = data.length
        document.querySelector("#cart>.offcanvas-body").innerHTML = data.map(item => `
            <div class="card my-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="${item.image}" alt="" style = "width:100%; height:150px; object-fit:contain;background-color: #f5f5f5;">
                        </div>
                        <div class="col-sm-8 text-center d-flex justify-content-center align-items-center flex-column alert alert-success mb-0">
                            <h5>${item.name}</h5>
                            <h6>Price: ${item.price} Rs.</h6>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12">
                            <button type="button"                           onclick = "handleDeleteFromCart('${item.pid}')" class="btn btn-danger w-100">
                                Remove Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join("")

    }
    catch (error) {
        console.log(error)
    }
}

getAllProducts()
displayCart()