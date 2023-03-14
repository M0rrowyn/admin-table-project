import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import Notebook from "../../assets/images/products-preview/lenovo-laptop-y50.png";
import SportPants from "../../assets/images/products-preview/sport-pants.jpg";
import Bath from "../../assets/images/products-preview/bath.jpg";
import ProductPreviewCard from "../../components/ProductPreviewCard";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  return (
    <section className="product-preview-page">
      <img src={LogoIcon} className="product-preview-logo" alt="Logo"></img>
      <div className="product-preview-card">
        <Link to=":id">
          <ProductPreviewCard
            className="product-preview-card-item"
            image={Notebook}
            title="Ноутбук Lenovo Y50-70 Aluminum Black"
            price="25000₴"
            quantity="Кількість: 5"
          />
        </Link>
        <ProductPreviewCard
          className="product-preview-card-item"
          image={SportPants}
          title="Nike M Nk Df Acd21"
          price="4000₴"
          quantity="Кількість: 22"
        />
        <ProductPreviewCard
          className="product-preview-card-item"
          image={Bath}
          title="CERSANIT MITO 17"
          price="5000₴"
          quantity="Кількість: 1337"
        />
        <ProductPreviewCard
          className="product-preview-card-item"
          image={Notebook}
          title="Ноутбук Lenovo Y50-70 Aluminum Black"
          price="25000₴"
          quantity="Кількість: 5"
        />
        <ProductPreviewCard
          className="product-preview-card-item"
          image={SportPants}
          title="Nike M Nk Df Acd21"
          price="4000₴"
          quantity="Кількість: 22"
        />
        <ProductPreviewCard
          className="product-preview-card-item"
          image={Bath}
          title="CERSANIT MITO 17"
          price="5000₴"
          quantity="Кількість: 1337"
        />
      </div>
    </section>
  );
};

export default ProductsPreview;
