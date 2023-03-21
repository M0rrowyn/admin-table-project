import React from "react";
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

const ProductModal = ({ setIsOpen, isOpen, title, product }) => (
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
        <FormInput label="Category" type="text" value={product?.category} />
        <FormInput label="Name" type="text" value={product?.name} />
        <FormInput label="Quantity" type="number" value={product?.quantity} />
        <FormInput label="Price" type="text" value={product?.price} />
        <FormTextarea
          label="Description"
          value={product?.description}
          rows="4"
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

export default ProductModal;
