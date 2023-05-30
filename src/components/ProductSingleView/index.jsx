import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import ArrowLeftIcon from "../../assets/images/products-preview/arrow-left.svg";
import CheckArrowIcon from "../../assets/images/products-preview/check-arrow.svg";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";

const ProductSingleView = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/product/${id}`);
      setProduct(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <section className="product-single-view-page">
      <header className="product-single-view-header">
        <img
          src={LogoIcon}
          className="product-single-view-logo"
          alt="Logo"
        ></img>
      </header>
      <main className="product-single-view-main">
        <div className="product-single-view-container">
          <div className="product-single-view-title">
            <Link to="/product-preview">
              <img
                src={ArrowLeftIcon}
                className="product-single-view-arrow"
                alt="Arrow"
              ></img>
            </Link>
            <h3 className="product-single-viev-product-name">{product.name}</h3>
          </div>
          <div className="product-single-view-product-info">
            <div>
              <img
                src={product.image}
                className="product-single-view-image"
                alt="product"
              ></img>
            </div>
            <div className="product-single-view-about">
              <div className="product-single-view-available">
                <img
                  src={CheckArrowIcon}
                  className="product-single-view-check-arrow"
                  alt="Check arrow"
                ></img>
                <p className="product-single-view-available-info">
                  Є в наявності
                </p>
              </div>
              <p className="product-single-view-available-price">
                {product.price}₴
              </p>
              <p className="product-single-view-available-quantity">
                Кількість: {product.quantity}
              </p>
            </div>
          </div>
          <div className="product-single-view-description">
            <h6 className="product-single-view-description-title">
              Опис<span>{product.name}</span>
            </h6>
            <div className="product-single-view-first-line-description">
              {product.description}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductSingleView;
