import apiClient from './api-client';

// Fetch data from the backend
export const fetchData = async () => {
    try {
        const response = await apiClient.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
