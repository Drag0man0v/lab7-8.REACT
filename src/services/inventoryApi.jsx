import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

export const inventoryApi = {
  getAll: () => api.get('/inventory'),
  getById: (id) => api.get(`/inventory/${id}`),
  delete: (id) => api.delete(`/inventory/${id}`),

  create: (formData) => api.post('/inventory', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  update: (id, data) => api.put(`/inventory/${id}`, data),

  updatePhoto: (id, file) => {
    const formData = new FormData();
    formData.append('photo', file);
    return api.put(`/inventory/${id}/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
};
