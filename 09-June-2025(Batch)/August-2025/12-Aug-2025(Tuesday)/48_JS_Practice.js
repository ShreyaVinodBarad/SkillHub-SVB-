const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 80000, stock: 5 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 50000, stock: 10 },
    { id: 3, name: "Headphones", category: "Electronics", price: 2000, stock: 30 },
    { id: 4, name: "Keyboard", category: "Electronics", price: 1500, stock: 20 },
    { id: 5, name: "Shoes", category: "Fashion", price: 2500, stock: 15 },
    { id: 6, name: "T-shirt", category: "Fashion", price: 800, stock: 50 },
    { id: 7, name: "Jeans", category: "Fashion", price: 1500, stock: 25 },
    { id: 8, name: "Washing Machine", category: "Home Appliance", price: 30000, stock: 7 },
    { id: 9, name: "Refrigerator", category: "Home Appliance", price: 45000, stock: 4 },
    { id: 10, name: "Microwave", category: "Home Appliance", price: 12000, stock: 6 },
    { id: 11, name: "Book", category: "Stationery", price: 500, stock: 100 },
    { id: 12, name: "Pen", category: "Stationery", price: 20, stock: 200 },
    { id: 13, name: "Notebook", category: "Stationery", price: 50, stock: 150 },
    { id: 14, name: "Table", category: "Furniture", price: 7000, stock: 8 },
    { id: 15, name: "Chair", category: "Furniture", price: 3000, stock: 12 },
];
// 👇 Task - 01 : Array of Product Names
const arrOfProductNames = products.map(item => item.name);
console.log(arrOfProductNames);

// 👇 Task - 02 : Add discount property 10% off
const discountPropertyAdding = products.map(item => {
    return { ...item, discount: 10 / 100 * item.price };
})
console.log(discountPropertyAdding);

// 👇 Task - 03 : Product price above 10000
const productPriceFilter = products.filter(item => item.price > 10000);
console.log(productPriceFilter);

// 👇 Task - 04 : Products in Fashion Category
const productFashionCategory = products.filter(item => item.category === "Fashion");
console.log(productFashionCategory);

// 👇 Task - 05 : Product priced between 1000 and 5000
const priceFilter = products.filter(item => item.price > 1000 && item.price < 5000);
console.log(priceFilter);

// 👇 Task - 06 : Total Price of all products
const totalPriceOfProducts = products.reduce((sum, item) => {
    return sum + item.price;
}, 0)
console.log(totalPriceOfProducts);

// 👇 Task - 07 : Total stock count
const totalStockCount = products.reduce((sum, item) => {
    return sum + item.stock;
}, 0)
console.log(totalStockCount);

// 👇 Task - 08 : Products names of category Fashion
const productsOfCategoryFashion = products.filter(item => item.category === "Fashion").map(item => item.name);
console.log(productsOfCategoryFashion);

// 👇 Task - 09 : Total Stock of Fashion Products
const stockOfFashionProducts = products.filter(item => item.category === "Fashion").reduce((sum, item) => {
    return sum + item.stock;
}, 0);
console.log(stockOfFashionProducts);

// 👇 Task - 10 : Filter expensive products - price above 20000 and get their name
const expensiveProducts = products.filter(item => item.price > 20000).map(item => item.name);
console.log(expensiveProducts);