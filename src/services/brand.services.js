import axios from "axios";

export const getAllBrands = async () => {
  try {
    const response = await axios.get(
      "https://test-puskom.uty.ac.id/api/brands"
    );
    return response.data.result;
  } catch (error) {
    if (error.response) {
      console.error("API response Error", error.response);
    } else {
      console.error("Failed get all brand", error.message);
    }
    throw error;
  }
};
