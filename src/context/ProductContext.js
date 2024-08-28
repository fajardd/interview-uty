import { createContext, useState, useEffect } from "react";
import { getAllBrands } from "../services/brand.services";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [brands, setBrands] = useState({});
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const dataBrands = await getAllBrands();
        console.log("data brand:", dataBrands.name);
        setBrands(dataBrands);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        setLoading(false);
      }
    };
    fetchBrand();
  }, []);

  return (
    <ProductContext.Provider value={{ brands, err, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
