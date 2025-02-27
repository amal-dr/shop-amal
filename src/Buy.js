import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Buy.css'

export default function Buy(props) {
  const { productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null); // Set initial state to null for product

  useEffect(() => {
    // Find the product that matches the productId
    const foundProduct = props.products.find((prod) => prod.id === parseInt(productId));
    setProduct(foundProduct); // Set the product found by ID
  }, [productId, props.products]); // Depend on productId and products

  return (
    <div className="container mt-4">
      {product ? (
        <div className="card">
          <img 
            src={product.image} 
            alt={product.title} 
            className="card-img-top" 
            style={{ 'height': '200px', 'width':'200px', 'padding':'20px' }} 
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price} €</p>
            <Link to={`/form/${product.id}`} className="btn btn-success">
              Buy Now
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}
