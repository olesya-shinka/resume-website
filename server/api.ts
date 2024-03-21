import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com'; 

interface User {
    id: number;
    email: string;
    password: string;
}

interface AuthResponse {
    token: string;
}

export async function register(email: string, password: string): Promise<void> {
    await axios.post(`${API_URL}/register`, { email, password });
}

export async function login(email: string, password: string): Promise<string> {
    const response = await axios.post<AuthResponse>(`${API_URL}/login`, { email, password });
    return response.data.token;
}

export async function getUserByEmail(email: string, token: string): Promise<User> {
    const response = await axios.get<User>(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            email
        }
    });
    return response.data;
}