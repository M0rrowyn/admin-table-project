import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import ProductsTable from "../../components/ProductsTable";

const AdminTable = () => (
  <section className="admin-page">
    <img src={LogoIcon} className="admin-page-logo" alt="Logo"></img>
    <ProductsTable />
  </section>
);

export default AdminTable;
