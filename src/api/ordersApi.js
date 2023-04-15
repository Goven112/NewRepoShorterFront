import { AxiosError } from "axios";
import Constants from "../utilities/Constrans.ts"
 
import api from "./api";
 

 

export const getClubById = async (id ) => {
  return await api.get(`Club/Profile/${id}`, id).catch((error) => {
    throw new Error(error);
  });
};

export const createOrder = async (data ) => {
  debugger
  return api.post(Constants.API_URL_CREATE_POST, data).catch((error) => {
    throw new Error(error);
  });
};
export const RegisterUser = async (data ) => {
 
  return api.post(Constants.API_URL_REGISTER_POST, data).catch((error) => {
    throw new Error(error);
  });
};
export const LoginUser = async (data ) => {
 
  return api.post(Constants.API_URL_LOGIN_POST, data).catch((error) => {
    throw new Error(error);
  });
};

export const CreateLink = async (data ) => {
 
  return api.post(Constants.API_URL_CREATE_LINK_POST, data).catch((error) => {
    throw new Error(error);
  });
};

 export const TEST = async (id ) => {
  return await api.get(`Club/Profile/${id}`, id).catch((error) => {
    throw new Error(error);
  });
};
export const getAllLinks = async () => {
  return api.get(Constants.API_URL_GET_ALL_LINKS);
};
export const getLinkById = async (id ) => {
  return await api.get(`${Constants.API_URL_GET_LINK_BY_ID}/${id}`).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
};

export const getUserById = async (id) => {
  return await api.get(`${Constants.API_URL_GET_USER_BY_ID}/${id}`).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
};


export const deleteUrlById = async (id) => {
  const response = await api.remove(`${Constants.API_URL_DELETE_URL_BY_ID}/${id}`);

  return response;
};
 
export default {
  
  createOrder,
  LoginUser,
  RegisterUser,
  CreateLink,
  getAllLinks,
  getLinkById,
  getUserById,
  deleteUrlById
};
