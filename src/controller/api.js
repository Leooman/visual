import L from '@/config/axios'

export const user = data => L('/api/user', data);

export const login = data => L('/api/login', data, "POST");

