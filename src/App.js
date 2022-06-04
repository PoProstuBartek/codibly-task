import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Pagination from './components/Pagination';
import { Typography } from '@mui/material';
import ProductsTable from './components/ProductsTable';

function App() {

  const productsUrl = 'https://reqres.in/api/products';
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(productsUrl);
      setLoading(false);
      setProducts(res.data.data);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
      // setProductPerPage(res.data.per_page); db says 6
    };
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [productPerPage, setProductPerPage] = useState(5);

  return (
    <div className="App">
      <Typography variant='h2' margin={6}>Products</Typography>
      { loading 
        ? <p>Loading data</p>
        :<>
          <Input filter={filter} setFilter={setFilter} />
          <ProductsTable 
            products={products}
            filter={filter}
            page={page}
            productPerPage={productPerPage}
          />
          <Pagination totalPages={totalPages} setPage={setPage} page={page}/>
        </>
      }
    </div>
  );
}

export default App;