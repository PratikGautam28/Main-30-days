import React, { useMemo, useState } from 'react'

const App = () => {

 const[search,setSearch]=useState("");
 const [count, setCount] = useState(0);

 const products=[

  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Keyboard", price: 50 },
  { id: 4, name: "Mouse", price: 30 },
  { id: 5, name: "Monitor", price: 300 },
 ]

 const filteredProduct=useMemo(()=>{
    console.log("Filtering products...");
  return products.filter((product)=>
    product.name.toLowerCase().includes(search.toLowerCase())
  
  )

 },[search])

  return (



    <div>

      <input type="text"
      placeholder='Search project'
      value={search}
      onChange={(e)=>setSearch(e.target.value)} />

{filteredProduct.map((item)=>{
  return <div key={item.id}>
    <h1>Name:  {item.name}</h1>
<p>Price :{item.price}</p>
  </div>
})
}
<h2>Count: {count}</h2>

<button onClick={() => setCount(count + 1)}>
  Increase Count
</button>

 </div>

  )
  
}

export default App
