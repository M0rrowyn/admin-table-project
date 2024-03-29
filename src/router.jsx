import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import AdminTable from "./container/AdminTable";
import ProductPreview from "./container/ProductPreview";
import PageNotFound from "./container/PageNotFound";
import ProductSingleView from "./components/ProductSingleView";
import PrivateRoute from "../src/privateRouter";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/admin-table" element={<AdminTable />} />
        <Route path="/product-preview" element={<ProductPreview />} />
        <Route path="/product-preview/:id" element={<ProductSingleView />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
