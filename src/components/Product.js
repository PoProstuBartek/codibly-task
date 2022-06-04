import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const Product = ({ id, name, year, color }) => {
  return (
    <TableRow style={{background: `${color}`}}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{year}</TableCell>
    </TableRow>
    )
  }

export default Product;