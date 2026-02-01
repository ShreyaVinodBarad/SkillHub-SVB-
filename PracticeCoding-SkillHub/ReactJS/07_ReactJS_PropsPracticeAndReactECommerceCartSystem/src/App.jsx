import React, { useState } from 'react'
import ParentComponent from './PropsPractice/ParentComponent'
import Home from './ReactECommerceCartSystem/Home'
import NavBar from "./ReactECommerceCartSystem/NavBar"

const App = () => {
  const brand = "Dell"
  const [count, setCount] = useState(0)

  const [cart, setCart] = useState([])
  const productDetailsArr = [
    {
      id: 1,
      name: "Item-01",
      price: 10000,
      image: "https://images.unsplash.com/photo-1765873360422-d6803b4ce375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
      id: 2,
      name: "Item-02",
      price: 5000,
      image: "https://plus.unsplash.com/premium_photo-1739959814894-ee7360d0553b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
    {
      id: 3,
      name: "Item-03",
      price: 3500,
      image: "https://images.unsplash.com/photo-1767528137321-870256e722b2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Item-04",
      price: 10000,
      image: "https://images.unsplash.com/photo-1765873360422-d6803b4ce375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
      id: 5,
      name: "Item-05",
      price: 5000,
      image: "https://plus.unsplash.com/premium_photo-1739959814894-ee7360d0553b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
    {
      id: 6,
      name: "Item-06",
      price: 3500,
      image: "https://images.unsplash.com/photo-1767528137321-870256e722b2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  return (
    <div>
      {/* 
      <ParentComponent brand={brand} count={count} setCount={setCount}>
      </ParentComponent>
      */}


      <NavBar cart={cart} setCart={setCart}></NavBar>

      <Home productDetailsArr={productDetailsArr} cart={cart} setCart={setCart}></Home>
    </div>
  )
}

export default App