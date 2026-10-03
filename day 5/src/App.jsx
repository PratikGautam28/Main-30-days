import React from 'react'
import ProductCard from './Components/ProductCard';

const App = () => {

const products = [
  { id: 1, title: "Laptop", price: 80000, rating: { rate: 4.5, count: 120 }, tags: ["tech", "work"] },
  { id: 2, title: "Headphones", price: 3500, rating: { rate: 4.1, count: 80 }, tags: ["music", "tech"] },
  { id: 3, title: "Backpack", price: 2500, rating: { rate: 3.8, count: 45 }, tags: ["bag", "travel"] },
];

  return (
    <div>
      {products.map(({id,...rest})=>(
        <ProductCard key={id}{...rest}/>
))}
    </div>
  )
}

export default App
