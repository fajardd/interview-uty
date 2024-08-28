import axios from "axios";

export const getAllProduct = async ({ page, per_page, brand_id }) => {
  try {
    const response = await axios.get(
      `https://test-puskom.uty.ac.id/api/products?${page}&${per_page}&${brand_id}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API response error", error.response);
    } else {
      console.error("Error get AllProduct");
    }
    throw error;
  }
};
