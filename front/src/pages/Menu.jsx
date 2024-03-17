import React from "react";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <div className="mt-2 mb-2">
        <nav className="sub-nav">
          <Link to="/" className="sub-link">
            Home
          </Link>{" "}
          /
          <Link to="/menu" className="sub-link">
            Menu
          </Link>
        </nav>
        <h2 className="text-center feature-title">OUR MENUS</h2>
      </div>
      <div className="mt-2 mb-2">
        <ProductList uri="product/latest" />
      </div>
    </>
  );
};
