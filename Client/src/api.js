import axios from 'axios';

console.log();


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers:{
    'Content-Type': 'application/json',
  }
})

export default api;