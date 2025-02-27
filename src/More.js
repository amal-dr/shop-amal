import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct, removeProduct } from './Action';
import './More.css';

const More = (props) => {
  const { id } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  const savedProducts = useSelector((state) => state.savedProducts);

  // Simulate fetching product data (replace this with your actual API call or logic)
  useEffect(() => {
    // Assuming `productData` is your data source or fetch logic
    const productData = [
      { id: 1, title: 'Product 1', description: 'Description of product 1', price: 100, image: 'image_url_1' },
      { id: 2, title: 'Product 2', description: 'Description of product 2', price: 150, image: 'image_url_2' },
      { id: 3, title: 'Product 3', description: 'Description of product 3', price: 200, image: 'image_url_3' }
    ];
    
    const fetchedProduct = productData.find((product) => product.id === parseInt(id));
    setProduct(fetchedProduct);
  }, [id]);

  // Check if the product is saved
  const isProductSaved = savedProducts.some((savedProduct) => savedProduct.id === parseInt(id));

  const handleSave = () => {
    if (isProductSaved) {
      dispatch(removeProduct(product));
    } else {
      dispatch(saveProduct(product));
    }
  };

  const handleBuy = () => {
    // Handle buy logic here (could be redirect to checkout, etc.)
    alert(`Buying ${product.title}`);
  };

  if (!product) return <div>Loading...</div>; // Show loading while product data is being fetched

  return (
    <div className="product-detail">
      <div className="product-card shadow-sm">
        <img
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>{product.price} €</strong></p>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary btn-sm" onClick={handleBuy}>
              Buy Now
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleSave}>
              {isProductSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;

