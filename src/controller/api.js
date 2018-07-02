import L from '@/config/axios'

export const people = data => L('/api/people', data);

