import api from './api';

export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response; 
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching data");
  }
};

export const createData = async (endpoint, data) =>{
  try {
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error creating data")
  }
}

export const sendRequest = async (endpoint) =>{
  try {
    await api.post(endpoint)
    
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error send request")
    
  }
}

export const deleteData = async (endpoint) =>{
  try {
    const response = await api.delete(endpoint)
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error deleting data")
  }
}