import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import http from "../http";
import { Loading } from "./Loading";

export const ProductList = ({ uri, title }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    http
      .get(uri)
      .then(({ data }) => setProducts(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [uri]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    paginate(index);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const renderPaginationButtons = () => {
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        className={`btn btn-outline-dark btnn ${currentPage === 1 ? 'disabled' : ''}`}
        key="prev"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </button>
    );

    // Pagination buttons
    for (let index = 1; index <= totalPages; index++) {
      buttons.push(
        <button
          className={`btn ${
            activeButton === index ? "btn-dark" : "btn-outline-dark"
          } btnn`}
          type="button"
          key={index}
          onClick={() => handleButtonClick(index)}
        >
          {index}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        className={`btn btn-outline-dark btnn ${currentPage === totalPages ? 'disabled' : ''}`}
        key="next"
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    );

    return buttons;
  };

  // If there's only one page, render the products without the pagination section
  if (totalPages === 1) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 py-3">
            <div className="row">
              <div className="col-12 text-center text-uppercase">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-sm-2">
              {loading ? (
                <Loading />
              ) : (
                currentProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If there are multiple pages, render both the products and the pagination section
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 py-3">
          <div className="row">
            <div className="col-12 text-center text-uppercase">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-sm-2">
            {loading ? (
              <Loading />
            ) : (
              currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  isNew={uri === "product/latest"}
                />
              ))
            )}
          </div>
          <div className="pagination d-flex justify-content-center mt-5">
            {renderPaginationButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};
