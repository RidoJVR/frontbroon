import axios from "axios";

const baseURLApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/product",
});

export const getAllPublishes = async () => {
  const data = await baseURLApi.get("/");
  return data.data;
};

export const postpublish = (publish) =>
  baseURLApi.post("/", publish);

export const deletePublish = id => baseURLApi.delete(`/${id}`);

export const putPublish = (publish) => baseURLApi.put(`/${publish.id}`,publish);
