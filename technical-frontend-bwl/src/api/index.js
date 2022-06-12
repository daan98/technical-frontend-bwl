import axios from "axios";

const userUrl = 'http://localhost:3001/user';
const updatedUserUrl = 'http://localhost:3001/user/:id';

export const GetUsers = () => axios.get(userUrl);
export const CreateUser = (data) => axios.post(userUrl, data);
export const UpdateUser = (id, data) => axios.put(`http://localhost:3001/user/${id}`, data);