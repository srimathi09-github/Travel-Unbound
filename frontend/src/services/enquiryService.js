import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const submitEnquiry = async (formData) => {
  const response = await api.post("/api/enquiry", formData);

  return response.data;
};