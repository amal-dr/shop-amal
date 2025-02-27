import { Link } from "react-router-dom";
import './Nav.css'; 

export default function Nav() {
  return (
    <> <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
 
      <Link className="navbar-brand" to="/">AmalSHOP</Link>
      

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto"> 
          
        <li className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jewlery">Jewelry</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/men">Men</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/women">Women</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/electronics">Electronics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart <i className="bi bi-cart-check"></i></Link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
  <div><p></p></div></>
  );
}
