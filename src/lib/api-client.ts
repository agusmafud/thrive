import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

api.interceptors.response.use((response) => response.data);
