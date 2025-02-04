import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Fetch users from the backend
export const fetchUsers = async () => {
    const response = await apiClient.get('/admin/users');
    return response.data;
};

// Fetch bookings from the backend
export const fetchBookings = async () => {
    const response = await apiClient.get('/admin/bookings');
    return response.data;
};
