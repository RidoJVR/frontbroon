import axios from "axios";

const urlProductsApi = axios.create({
    urlProducts: "http://127.0.0.1:8000/api/product",
});

export const getAllPublishes = async () => {
    const data = await urlProductsApi.get("/");
    return data.data;
  };