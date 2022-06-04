import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import Product from './Product';
import Products from './Products';

const ProductsTable = ({ products, filter, page, productPerPage }) => {

  const startIdx = (page - 1) * productPerPage;
  const selectedProducts = products.slice(startIdx, startIdx + productPerPage);

  const generateProducts = () => {
    const idx = filter - 1;

    if ( filter === 0 ){
      return (
        <Products products={selectedProducts}/>
      )
    } else {
      return filter > products.length
      ? <TableRow>
          <TableCell>404</TableCell>
          <TableCell>index</TableCell>
          <TableCell>not found</TableCell>
        </TableRow>
      :
      <Product 
        key={products[idx].id}
        id={products[idx].id}
        name={products[idx].name}
        year={products[idx].year}
        color={products[idx].color}
      />
    }
  }

  return (
    <TableContainer className='tableContainer'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateProducts()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTable;