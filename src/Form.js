import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Form.css'


export default function Form(props) {
  const { productId } = useParams(); // Get productId from URL
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    selectedProductId: productId, // Automatically select the product from the URL
  });

 
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Display a Thank You message
    alert('Thank you for your order!');
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h3>Order Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productSelect" className="form-label">Select Product</label>
          <select
            className="form-select"
            id="productSelect"
            name="selectedProductId"
            value={userInfo.selectedProductId}
            onChange={handleChange}
            required
          >
              {props.products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
}
