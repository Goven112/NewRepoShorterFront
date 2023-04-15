
import axios, { Canceler } from "axios";

 

 

const get = async (
    url ,
    data ,
    paramsSerializer
  )  => {
    const response = await axios.get( url, {
      params: data,
      paramsSerializer: paramsSerializer,
    });
    return response;
  };
  
  const post = async (url , data ) => {
    const response = await axios.post( url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  };
  const remove = async (
    url ,
    data ,
    options  = {}
  )  => {
    const response = await axios.delete(  url, {
      ...options,
      params: data,
    });
    return response;
  };
  export default { get, post,remove };