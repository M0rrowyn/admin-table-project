import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import { MdClear } from "react-icons/md";
import FormInput from "../FormInput";
import FormTextarea from "../FormTextarea";
import axios from "axios";
import { BASE_URL } from "../../constants";

const ProductModal = ({ setIsOpen, isOpen, title, product, fetchProducts }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const payload = isOpen ? product : {};

    setCurrentProduct({ ...payload });
  }, [isOpen]);

  const updateField = (event, field) => {
    setCurrentProduct({
      ...currentProduct,
      [field]: event.target.value,
    });
  };

  const onLogin = async () => {
    if (product?.id) {
      await axios.put(
        `${BASE_URL}/product/${product.id}`,
        currentProduct
      );
    } else {
      await axios.post(`${BASE_URL}/product`, currentProduct);
    }

    if (fetchProducts) {
      await fetchProducts();
    }

    setIsOpen(false);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      className="product-modal"
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <DialogTitle>
        <div className="product-modal-title">
          {title}
          <MdClear
            className="product-modal-clear-icon"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </DialogTitle>
      <DialogContent className="product-modal-form">
        <form id="form" action="">
          <FormInput
            label="Category"
            type="text"
            value={currentProduct?.category}
            onChange={(event) => updateField(event, "category")}
          />
          <FormInput
            label="Name"
            type="text"
            value={currentProduct?.name}
            onChange={(event) => updateField(event, "name")}
          />
          <FormInput
            label="Quantity"
            type="number"
            value={currentProduct?.quantity}
            onChange={(event) => updateField(event, "quantity")}
          />
          <FormInput
            label="Price"
            type="text"
            value={currentProduct?.price}
            onChange={(event) => updateField(event, "price")}
          />
          <FormTextarea
            label="Description"
            value={currentProduct?.description}
            rows="4"
            onChange={(event) => updateField(event, "description")}
          />
        </form>
        <DialogActions>
          <Button
            className="product-modal-cancel-button"
            variant="contained"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={onLogin}
            className="product-modal-submit-button"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
