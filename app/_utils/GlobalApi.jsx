import axios from "axios";

const axiosClient = new axios.create({
  baseURL_: "http://localhost:1337/api",
});

const getCategory = () => axiosClient.get("/categories");

export default {
  getCategory,
};
