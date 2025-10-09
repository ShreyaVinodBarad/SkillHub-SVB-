import { validate } from "./utils.js"

const name = document.getElementById("name")
const price = document.getElementById("price")
const description = document.getElementById("description")
const image = document.getElementById("image")
const category = document.getElementById("category")
const addProduct = document.getElementById("addProduct")
const URL = "http://localhost:5000/products"

addProduct.addEventListener("click", () => {
    if (validate(name, price, description, image, category)) {
        // console.log(name.value, price.value, description.value, image.value, category.value)
        createProduct()
        readProduct()
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
    } catch (error) {
        console.log(error)
    }
}
const readProduct = async () => {
    try {
        const res = await fetch(URL, { method: "GET" })
        const result = await res.json()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
const updateProduct = async () => {
    try {
        await fetch(URL, { method: "PATCH" })
    } catch (error) {
        console.log(error)
    }
}
const deleteProduct = async () => {
    try {
        await fetch(URL, { method: "DELETE" })
    } catch (error) {
        console.log(error)
    }
}

/*
            Method          Body            Id
Create      POST            Yes             No
Read        GET             No              No
Update      PUT/PATCH       Yes             Yes
Delete      DELETE          No              Yes
*/ 