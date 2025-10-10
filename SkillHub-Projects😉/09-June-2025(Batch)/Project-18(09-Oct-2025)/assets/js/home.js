const home = document.getElementById("home")
const URL = "http://localhost:5000/products"
const getAllProducts = async () => {
    try {
        const res = await fetch(URL, { method: "GET" })
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
                        <button type="button" class="btn btn-primary w-100">Add to Cart</button>
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
getAllProducts()