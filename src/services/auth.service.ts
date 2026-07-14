import api from './api';

export const authService = {
  login: (credentials: {username: string, password: string}) => api.post<{success: boolean, token: string}>('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  profile: () => api.get('/auth/profile')
};
