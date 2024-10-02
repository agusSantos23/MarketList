import api from './api';

export const createData = async (endpoint, data) =>{
  try {
    const response = await api.post(endpoint, data);
    return response.data;
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