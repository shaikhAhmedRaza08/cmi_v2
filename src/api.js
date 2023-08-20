import axios from "axios";

const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
const api = axios.create({
  baseURL: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const apiEndPoints = {
  products: "products",
  colors: "colors",
  material: "material",
  featured: "featured",
};

export default api;