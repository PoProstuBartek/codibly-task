import React from 'react';
import Product from './Product'

const Products = ({ products }) => {
  return (
    products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        year={product.year}
        color={product.color}
      />
    ))
  )
}

export default Products