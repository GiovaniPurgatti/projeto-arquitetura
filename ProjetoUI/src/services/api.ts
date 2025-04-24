import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

const api_two = axios.create({
    baseURL: 'http://localhost:8081'
});

export const alunoServiceMysql = {
    getAll: async () => {
        const response = await api_two.get<Usuario[]>('/projeto/api/v1/usuario');
        return response.data;
    },

    create: async (usuario: Omit<Usuario, 'id'>) => {
        const response = await api_two.post<Usuario>('/projeto/api/v1/usuario', usuario);
        return response.data;
    },

    update: async (id: string, usuario: Omit<Usuario, 'id'>) => {
        const response = await api_two.put<Usuario>(`/projeto/api/v1/usuario/${id}`, usuario);
        return response.data;
    },

    delete: async (id: string) => {
        await api_two.delete(`/projeto/api/v1/usuario/${id}`);
    }
}; 

export const alunoServiceMongo = {
    getAll: async () => {
        const response = await api.get<Usuario[]>('/projeto/api/v0/usuario/listar');
        return response.data;
    },

    create: async (usuario: Omit<Usuario, 'id'>) => {
        const response = await api.post<Usuario>('/projeto/api/v0/usuario/postar', usuario);
        return response.data;
    },

    update: async (id: string, usuario: Omit<Usuario, 'id'>) => {
        const response = await api.put<Usuario>(`/projeto/api/v0/usuario/editar/${id}`, usuario);
        return response.data;
    },

    delete: async (id: string) => {
        await api.delete(`/projeto/api/v0/usuario/deletar/${id}`);
    }
};