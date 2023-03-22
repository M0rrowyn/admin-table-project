import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowsIcon from "../../assets/images/admin-table/arrows.svg";
import PencilIcon from "../../assets/images/admin-table/pencil.svg";
import TrashCanIcon from "../../assets/images/admin-table/trash-can.svg";
import ConfirmNotification from "../../components/ConfirmNotification";
import ProductModal from "../../components/ProductModal";
import AdminTableButton from "../AdminTableButton";
import UserIcon from "../../assets/images/admin-table/user.svg";
import PlusIcon from "../../assets/images/admin-table/plus.svg";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const SortButton = (
    <button className="products-table-sort-button">
      <img src={ArrowsIcon} alt="Arrows"></img>
    </button>
  );

  return (
    <div>
      <div className="admin-header-button-container">
        <Link to="/product-preview">
          <AdminTableButton
            text="Preview"
            image={<img src={UserIcon} className="user-icon" alt="User"></img>}
          />
        </Link>
        <AdminTableButton
          text="Add product"
          image={<img src={PlusIcon} alt="User"></img>}
          onClick={() => {
            setCurrentProduct(null);
            setIsProductModalOpen(true);
          }}
        />
      </div>
      <div className="products-table-container">
        <h2 className="products-table-title">Products</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className="product-table-cell-wrapper">
                    <span>ID</span>
                    {SortButton}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="product-table-cell-wrapper">
                    <span>Category</span>
                    {SortButton}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="product-table-cell-wrapper">
                    <span>Name</span>
                    {SortButton}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="product-table-cell-wrapper">
                    <span>Quantity</span>
                    {SortButton}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="product-table-cell-wrapper">
                    <span>Price (₴)</span>
                    {SortButton}
                  </div>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <button
                      className="product-table-cell-button"
                      onClick={() => {
                        setCurrentProduct(product);
                        setIsProductModalOpen(true);
                      }}
                    >
                      <img src={PencilIcon} alt="Pencil"></img>
                    </button>
                    <button
                      className="product-table-cell-button"
                      onClick={() => setisDeleteModalOpen(true)}
                    >
                      <img src={TrashCanIcon} alt="Trashcan"></img>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ProductModal
          title={currentProduct ? "Edit product" : "Add Product"}
          product={currentProduct}
          isOpen={isProductModalOpen}
          setIsOpen={setIsProductModalOpen}
        />
        <ConfirmNotification
          isOpen={isDeleteModalOpen}
          setIsOpen={setisDeleteModalOpen}
        />
      </div>
    </div>
  );
};

export default ProductsTable;
