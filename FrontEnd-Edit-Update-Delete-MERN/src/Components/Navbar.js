import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LMS-System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users Detail
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Add New
                </Link>
              </li>              
            </ul>
            <form className="d-flex">
              <Link to="/login" className="btn btn-primary me-2" type="submit">
                    <i class="fa-solid fa-user-plus"></i>Login
              </Link>

              <Link to="/register" className="btn btn-warning" type="submit">
                    <i class="fa fa-user" aria-hidden="true"></i>Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
