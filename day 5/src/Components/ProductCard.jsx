import React from 'react'

const ProductCard = ({title,price,rating:{rate,count},tags:[maintag]}) => {
    
  return (
    <div>
        <h3>{title}</h3>
        <p>Rs {price}</p>
        <p>{rate}({count} reviews)</p>
        <p>Tag: {maintag}</p>
      
    </div>
  )
}

export default ProductCard
