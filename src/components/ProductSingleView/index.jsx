import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import ArrowLeftIcon from "../../assets/images/products-preview/arrow-left.svg";
import CheckArrowIcon from "../../assets/images/products-preview/check-arrow.svg";
import { Link } from "react-router-dom";
import Notebook from "../../assets/images/products-preview/lenovo-laptop-y50.png";

const ProductSingleView = () => {
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
            <h3 className="product-single-viev-product-name">
              Ноутбук Lenovo Y50-70 Aluminum Black
            </h3>
          </div>
          <div className="product-single-view-product-info">
            <img
              src={Notebook}
              className="product-single-view-image"
              alt="product"
            ></img>
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
              <p className="product-single-view-available-price">25000₴</p>
              <p className="product-single-view-available-quantity">
                Кількість: 5
              </p>
            </div>
          </div>
          <div className="product-single-view-description">
            <h6 className="product-single-view-description-title">
              Опис<span>Ноутбук Lenovo Y50-70 Aluminum Black</span>
            </h6>
            <div className="product-single-view-first-line-description">
              <h4>15.6-дюймовий дисплей стандарту Full HD</h4>
              <p>
                Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full
                HD (1920 x 1080)
              </p>
            </div>
            <div className="product-single-view-second-line-description">
              <h4>Динаміки преміум-класу</h4>
              <p>
                Стереофонічні динаміки JBL, що забезпечують розкішне звучання з
                ефектом присутності, ідеально підходять для відео, ігор і музики
              </p>
            </div>
            <div>
              <h4>Dolby Advanced Audio</h4>
              <p>
                Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці
                можна відтворити кришталево чіткий просторовий звук за допомогою
                вбудованих динаміків.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductSingleView;
