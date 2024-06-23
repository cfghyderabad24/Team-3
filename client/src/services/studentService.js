import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; 

export const fetchStudents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/students/all`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch students", error);
        throw error;
    }
};