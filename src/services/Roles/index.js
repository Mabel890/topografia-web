import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;
const roleServices = {};

roleServices.listRoles = async () => {
  return await axios.get(`${baseUrl}/api/roles/listRoles`);
};

roleServices.serviceCreateRole = async (role) => {
  return await axios.post(`${baseUrl}/api/roles/RegisterRole`, role);
};

export default roleServices;
