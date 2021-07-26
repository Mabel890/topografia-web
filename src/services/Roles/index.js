import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;
const roleServices = {};

roleServices.listRoles = async() => {
    return await axios.get(`${baseUrl}/api/roles/listRoles`)
}

roleServices.createRole = async() => {
    return await axios.get(`${baseUrl}/api/roles/RegisterRole`)
}



export default roleServices;