import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from './Action'; // Assuming this is correctly defined
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const savedProducts = useSelector((state) => state.savedProducts); // Get saved products from Redux store

  // Modified handleSave to accept productId
  const handleSave = (productId) => {
    dispatch(removeProduct(productId)); // Dispatch action to remove product
  };

  return (
    <div className="cart-container">
      <h3 className="cart-heading">Saved Products</h3>
      {savedProducts.length === 0 ? (
        <p className="no-products">No products saved yet.</p>
      ) : (
        <div className="cart-grid">
          {savedProducts.map((product) => (
            <div className="cart-card" key={product.id}>
              <img
                src={product.image}
                className="cart-img"
                alt={product.title}
              />
              <div className="cart-body">
                <h5 className="cart-title">{product.title}</h5>
                <p className="cart-price">{product.price} €</p>
                {/* <button 
                  className="remove-btn"
                  onClick={() => handleSave(product.id)}
                >
                  Cancel Save
                </button> */}
                 <Link to={`/buy/${product.id}`} className="btn btn-primary btn-sm flex-grow-1 me-2">
              More
            </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
