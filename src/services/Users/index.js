import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;
const userServices = {};

userServices.login = async (users) => {
  return await axios.post(`${baseUrl}/api/users/login`, users);
};

userServices.register = async (users) => {
  return await axios.post(`${baseUrl}/api/users/register`, users);
};
export default userServices;
