import api from './api';

export interface MediaAsset {
  id: string;
  filename: string;
  type: 'image' | 'video';
  url: string;
  size: number;
  createdAt?: string;
}

export const mediaService = {
  getAll: () => api.get<{success: boolean, data: MediaAsset[]}>('/media'),
  getById: (id: string) => api.get<{success: boolean, url: string}>(`/media/${id}`),
  upload: (file: File) => {
    const formData = new FormData();
    formData.append('media', file);
    return api.post<{success: boolean, data: MediaAsset}>('/media/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  replace: (id: string, file: File) => {
    const formData = new FormData();
    formData.append('media', file);
    return api.put<{success: boolean, data: MediaAsset}>(`/media/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  delete: (id: string) => api.delete<{success: boolean, message: string}>(`/media/${id}`)
};
