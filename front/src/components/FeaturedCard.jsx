import React from "react";
import { Link } from "react-router-dom";
import { imgUrl, isEmpty } from "../lib";
import { CartBtn } from "./CartBtn";

export const FeaturedCard = ({ product }) => {
  return (
    // <div className="col mt-3">
    //   <div className="col-12 bg-white text-center h-100 product-item featured-card">
    //     <div className="row h-100">
    //       <div className="col-12 p-0 mb-3">
    //         <Link to={`/product/${product._id}`}>
    //           <img src={imgUrl(product.images[0])} className="menu-image" alt={product.name} />
    //         </Link>
    //       </div>
    //       <div className="col-12 mb-3">
    //         <Link to={`/product/${product._id}`} className="product-name">
    //           {product.name}
    //         </Link>
    //       </div>
    //       <div className="col-12 mb-3">
    //         {isEmpty(product.discounted_price) ? (
    //           <span className="product-price-old">Rs. {product.price}</span>
    //         ) : (
    //           <>
    //             <span className="product-price-old">Rs. {product.price}</span>
    //             <br />
    //             <span className="product-price">Rs. {product.discounted_price}</span>
    //           </>
    //         )}
    //       </div>
    //       <div className="col-12 mb-3 align-self-end">
    //         <CartBtn product={product} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="card-list">
      <div className="card-item text-center h-100">
        <Link to={`/product/${product._id}`} className="card-link">
          <div className="col-12 p-0 mb-3">
            <img
              src={imgUrl(product.images[0])}
              className="card-image"
              alt={product.name}
            />
          </div>
          <div className="col-12 mb-3">
            <Link to={`/product/${product._id}`} className="product-name">
              {product.name}
            </Link>
          </div>
        </Link>
        <div className="col-12 mb-3">
          {isEmpty(product.discounted_price) ? (
            <span className="product-price-old">Rs. {product.price}</span>
          ) : (
            <>
              <span className="product-price-old">Rs. {product.price}</span>
              <br />
              <span className="product-price">
                Rs. {product.discounted_price}
              </span>
            </>
          )}
        </div>

        <div className="col-12 mb-3 align-self-end">
          <CartBtn product={product} />
        </div>
      </div>
    </div>
  );
};
