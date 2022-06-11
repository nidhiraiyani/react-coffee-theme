import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="text-center bussiness d-none d-lg-block py-5">
        <h2 className="text-primary text-uppercase mt-5">A free bootstrap business theme</h2>
        <h1 className="text-light text-uppercase mb-4">Business Casual</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light p-4 fw-bold fs-4">
        <div className="container-fluid">
          <Link to='/' className="text-uppercase text-decoration-none d-lg-none">Start Bootstrap</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item px-4 py-2">
                <Link className="nav-link fs-6 active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item px-4 py-2">
                <Link className="nav-link fs-6" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item px-4 py-2">
                <Link className="nav-link fs-6" to="/products">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item px-4 py-2">
                <Link className="nav-link fs-6" to="/store">
                  STORE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
