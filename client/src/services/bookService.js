import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; 

export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/books/books`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch books", error);
        throw error;
    }
};