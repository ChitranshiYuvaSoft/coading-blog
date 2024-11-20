import axios from "axios";
const API_URL = "https://documentmanagement-backend.onrender.com/api/user";

export const userLogin = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  console.log(response.data);
  return response.data;
};

export const userRegister = async (userData) => {
    console.log(userData)
  const response = await axios.post(`https://documentmanagement-backend.onrender.com/api/user/register`, userData);
  console.log(response);
  return response;
};
