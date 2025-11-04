import React, { useState } from 'react'
import ParentComponent from './components/PropsPractice/ParentComponent'
import NavBar from './components/ReactProject/NavBar'
import Hero from './components/ReactProject/Hero'

const App = () => {
  const brand = "Dell"
  let [count, setCount] = useState(0)
  const arr = [
    { id: 1, name: "Item-01", image: "https://images.unsplash.com/photo-1761932786133-8704e335e614?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400", price: 15000 },
    { id: 2, name: "Item-02", image: "https://images.unsplash.com/photo-1761123141836-3b3221dac3e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400", price: 8000 },
    { id: 3, name: "Item-03", image: "https://plus.unsplash.com/premium_photo-1761298779234-6f1f02431c7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400", price: 20000 },
    { id: 4, name: "Item-04", image: "https://images.unsplash.com/photo-1762022403007-71bb1e3a4fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400", price: 35000 },
    { id: 5, name: "Item-05", image: "https://images.unsplash.com/photo-1762062313689-5ae5398c1c13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400", price: 10000 }
  ]
  const [cart, setCart] = useState([])
  return (
    <div>
      {/* <ParentComponent brandName={brand} count={count} setCount={setCount}>
      </ParentComponent> */}
      <NavBar cart={cart} setCart={setCart}></NavBar>
      <Hero productsDetailsArr={arr} cart={cart} setCart={setCart}></Hero>
    </div>
  )
}

export default App