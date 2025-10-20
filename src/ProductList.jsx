import React from "react";
import useFetch from './UseFetchHook'
const ProductList = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products")

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <div className="product-container">
      {data &&
        data.slice(0, 10).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.images?.[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
