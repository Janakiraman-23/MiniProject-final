import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer'; 

function LogoutConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="mt-2">
      <p><b>Are You Sure You Want To Logout?</b></p>
      <button className="btn btn-danger mx-2" onClick={onConfirm}>Yes</button>
      <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();
  let data = useCart();

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#eac674' }}>
        <div className="container-fluid">
        <img src="https://i.pinimg.com/originals/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.png" width="120px" height="80px" alt="logo" />
        <Link className="navbar-brand fs-1 fst-italic mb-3 blue-brand" to="/" >TASTE TRIBE </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/" style={{ 
    display: 'inline-block', justifyContent: 'center',  width: '70%', margin: '0 auto' }}>Home</Link>
              </li>
              {(localStorage.getItem("authToken")) &&
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrder"   style={{ 
    display: 'inline-block', textAlign: 'center',  width: '70%', margin: '0 auto',alignItems:"center" }}> MyOrders</Link>
                </li>
              }
            </ul>
            {(!localStorage.getItem("authToken")) ? (
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
              </div>
            ) : (
              <div>
                <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>
                  My Cart {" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                  Logout
                </div>
                {showLogoutConfirmation && (
                  <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      
    </div>
    
  );
}
