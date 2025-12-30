import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getArtikel = async () => {
  try {
    const response = await api.get("/artikel");
    return response.data;
  } catch (error) {
    console.error("Gagal ambil data:", error);
    throw error;
  }
};
