import axios from "axios";

const ins = axios.create({
  baseURL: "http://localhost:5000",
});

export default ins;
