import axios from "axios";

// A placer dans promabio-main/src/services/api.js
// Nécessite : npm install axios
//
// En local : REACT_APP_API_URL n'est pas défini -> fallback http://localhost:8000/api
// Une fois déployé : créer un fichier .env à la racine de promabio-main avec
//   REACT_APP_API_URL=https://ton-service.onrender.com/api

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000/api",
});

export const getProducts = (category) =>
    api.get("/products", { params: category ? { category } : {} }).then(r => r.data);

export const getProduct = (slug) =>
    api.get(`/products/${slug}`).then(r => r.data);

export const getArticles = () =>
    api.get("/articles").then(r => r.data);

export const getArticle = (slug) =>
    api.get(`/articles/${slug}`).then(r => r.data);

export default api;
