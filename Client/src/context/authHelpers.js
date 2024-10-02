import api from "../api";

export const checkAuth = async () => {
  try {
    const response = await api.get('/verify-token');
    return response.data.user;
  } catch (error) {
    console.error('Not authenticated', error);
    return null;
  }
};
