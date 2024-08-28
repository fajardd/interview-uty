import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const ListBrand = () => {
  const { brands, err, loading } = useContext(ProductContext);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (err) {
    return <div>Error: {err}</div>;
  }

  return (
    <div className="px-32 py-16">
      <p className="text-[32px] font-medium">PRODUCTS</p>

      {brands.length > 0 &&
        brands.map((brand, index) => {
          <div key={index}>
            <p>{brand.name}</p>
          </div>;
        })}
    </div>
  );
};

export default ListBrand;
