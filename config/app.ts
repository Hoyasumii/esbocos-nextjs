import axios from "axios";

const app = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default app;