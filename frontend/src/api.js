// frontend/src/api.js
import axios from "axios";

// ✅ Base URL (auto uses Render backend in production, localhost for local testing)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://global-light.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Example: Register new user
export const registerUser = async (userData) => {
  const response = await api.post("/api/auth/register", userData);
  return response.data;
};

// ✅ Example: Login
export const loginUser = async (credentials) => {
  const response = await api.post("/api/auth/login", credentials);
  return response.data;
};

// ✅ Example: Get all users (protected)
export const getUsers = async (token) => {
  const response = await api.get("/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Example: Chat or AI message endpoint
export const sendChatMessage = async (message) => {
  const response = await api.post("/api/chat", { message });
  return response.data;
};

// ✅ Example: Get system info or status
export const getSystemStatus = async () => {
  const response = await api.get("/api/status");
  return response.data;
};

export default api;
