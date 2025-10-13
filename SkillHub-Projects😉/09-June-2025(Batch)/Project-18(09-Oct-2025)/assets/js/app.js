import { validate, addToast } from "./utils.js"

const name = document.getElementById("name")
const price = document.getElementById("price")
const description = document.getElementById("description")
const image = document.getElementById("image")
const category = document.getElementById("category")
const addProduct = document.getElementById("addProduct")
const URL = "http://localhost:5000/products"
const root = document.getElementById("root")

addProduct.addEventListener("click", () => {
    if (validate(name, price, description, image, category)) {
        // console.log(name.value, price.value, description.value, image.value, category.value)
        createProduct()
        readProduct()
        reset()
    }
    else {
        console.log("All fields are required!")
    }
})

const createProduct = async () => {
    try {
        const productData = {
            name: name.value,
            price: price.value,
            description: description.value,
            image: image.value,
            category: category.value
        }
        await fetch(URL, {
            method: "POST",
            body: JSON.stringify(productData),
            headers: {
                "Content-Type": "application/json"
            } // 👈 For Backend
        })
        console.log("Product Created Successfully!")
        addToast("Product Created Successfully!", "success")
    } catch (error) {
        console.log(error)
    }
}
const readProduct = async () => {
    try {
        const res = await fetch(URL, { method: "GET" })
        const result = await res.json()
        console.log(result)
        const x = result.map(item =>
            `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
                <td><img src="${item.image}" style="width:100px;height:100px;object-fit:contain;border-radius:4px;background-color: #f5f5f5;"/></td>
                <td>${item.category}</td>
                <td class="d-flex justify-content-center align-items-center gap-2">
                    <button type="button" class="btn btn-warning" id="editProduct"><i class="bi bi-pencil"></i></button>
                    <button type="button" class="btn btn-danger" id="deleteProduct" onclick = "deleteProduct(${item.id})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
            `
        ).join("")
        // console.log(x)
        root.innerHTML = x
    } catch (error) {
        console.log(error)
    }
}
const updateProduct = async () => {
    try {
        await fetch(URL, { method: "PATCH" })
        addToast("Product Details Updated Successfully!", "success")
    } catch (error) {
        console.log(error)
    }
}
window.deleteProduct = async id => {
    // 👆 Goes to global scope because problem when using module
    try {
        await fetch(`${URL}/${id}`, { method: "DELETE" })
        console.log("Produt Deleted Successfully!")
        readProduct()
        addToast("Product Deleted Successfully!", "danger")
    } catch (error) {
        console.log(error)
    }
}

const reset = () => {
    // name.value = ""
    // price.value = ""
    // description.value = ""
    // image.value = ""
    // category.value = ""

    // name.classList.remove("is-valid", "is-invalid")
    // price.classList.remove("is-valid", "is-invalid")
    // description.classList.remove("is-valid", "is-invalid")
    // image.classList.remove("is-valid", "is-invalid")
    // category.classList.remove("is-valid", "is-invalid")

    for (const item of [name, price, description, image, category]) {
        item.value = ""
        item.classList.remove("is-valid")
    }
}

readProduct()
/*
            Method          Body            Id
Create      POST            Yes             No
Read        GET             No              No
Update      PUT/PATCH       Yes             Yes
Delete      DELETE          No              Yes
*/ 