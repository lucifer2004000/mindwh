import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};

export const bookSession = async (sessionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/book-session`, sessionData);
        return response.data;
    } catch (error) {
        console.error('Error booking session:', error);
        throw error;
    }
};

export const submitPost = async (postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/community-forum`, postData);
        return response.data;
    } catch (error) {
        console.error('Error submitting post:', error);
        throw error;
    }
};