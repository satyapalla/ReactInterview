import React, { useState,useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { getProducts } from './api';

function App() {
  const [data, setData] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header text={data?.headerText} />
      <ProductGrid products={data?.products}  selectHandler={selectProduct}/>
      <ProductPreview key={selectedProduct?.description} product={selectedProduct} />
    </div>
  );
}

export default App; 
