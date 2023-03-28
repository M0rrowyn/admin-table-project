import React from "react";
import "./style.css";
import CartImage from "../../assets/images/products-preview/cart.svg";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const ProductPreviewCard = ({ image, title, price, quantity }) => (
  <Card className="product-card">
    <CardMedia component="img" height="194" image={image} alt="Product" />
    <CardHeader
      className="product-card-title"
      disableTypography
      title={title}
    />
    <CardContent className="product-card-content">
      <div className="product-card-info">
        <div className="product-card-price">{price}₴</div>
        <div className="product-card-quantity">Кількість:{quantity}</div>
      </div>
    </CardContent>
    <CardActions className="product-card-actions">
      <Button className="product-card-button">
        <img src={CartImage} className="product-card-button-image" alt="Cart" />
        Готовий до відправки
      </Button>
    </CardActions>
  </Card>
);

export default ProductPreviewCard;
