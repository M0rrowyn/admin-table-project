import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import ProductPreviewCard from "../../components/ProductPreviewCard";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="product-preview-page">
      <img src={LogoIcon} className="product-preview-logo" alt="Logo"></img>
      <div className="product-preview-card">
        {products.map((product) => (
          <Link key={product.id} to={`${product.id}`}>
            <ProductPreviewCard
              className="product-preview-card-item"
              image={product.image}
              title={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          </Link>
        ))}
      </div>
      <div className="product-preview-card">
        {products.map((product) => (
          <Link key={product.id} to={`${product.id}`}>
            <ProductPreviewCard
              className="product-preview-card-item"
              image={product.image}
              title={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsPreview;
