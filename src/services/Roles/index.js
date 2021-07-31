import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;
const roleServices = {};

roleServices.listRoles = async () => {
  return await axios.get(`${baseUrl}/api/roles/listRoles`);
};

roleServices.createRole = async () => {
  return await axios.get(`${baseUrl}/api/roles/RegisterRole`);
};

roleServices.updateRoles = async (id, name) => {
  return await axios.put(`${baseUrl}/api/roles/updateRoles/${id}`, {name: name});
};

roleServices.deleteRole = async (id, name) => {
  return await axios.delete(`${baseUrl}/api/roles/deleteRole/${id}`, {name: name});
};

roleServices.listRole = async (id) => {
  return await axios.get(`${baseUrl}/api/roles/listRole/${id}`);
};

export default roleServices;
