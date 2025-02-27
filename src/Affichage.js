import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveProduct, removeProduct } from './Action'
import './Affichage.css'


export default function Affichage({ product }) {
  const dispatch = useDispatch();

  const savedProducts = useSelector((state) => state.savedProducts);


  const isProductSaved = savedProducts.some((savedProduct) => savedProduct.id === product.id);


  const handleSave = () => {
    if (isProductSaved) {
      dispatch(removeProduct(product))
    } else {
      dispatch(saveProduct(product))
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card product-card shadow-sm hover-scale">
        <img
          style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "15px 15px 0 0" }}
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h5>
          <p className="card-text text-muted">
            <span className="fw-bold">{product.price} €</span>
            <br />
            {product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
          <Link to={`/buy/${product.id}`} className="btn btn-primary btn-sm flex-grow-1 me-2">
              More
            </Link>

            <button className="btn btn-danger btn-sm" onClick={handleSave}>
              {isProductSaved ? 'Saved' : 'Save'} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
