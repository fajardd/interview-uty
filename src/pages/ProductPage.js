import ListBrand from "../components/Layouts/ListBrand";
import { ProductProvider } from "../context/ProductContext";

const ProductPage = () => {
  return (
    <ProductProvider>
      <ListBrand />
    </ProductProvider>
  );
};

export default ProductPage;
