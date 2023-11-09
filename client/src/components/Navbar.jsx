import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Ürünler
                </Link>
              </li>
            </ul>
            {currentUser ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">Hoşgeldin: {currentUser.name}</li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sepet">
                    Sepet
                    <i class="fa-solid fa-cart-shopping fa-beat"></i>
                    <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger" />
                    <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Kayıt Ol
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
