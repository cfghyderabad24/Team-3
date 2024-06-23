import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; 

export const fetchAllTransactions = async (studentId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/transactions/student/${studentId}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch transactions for student ID:", studentId, error);
        throw error;
    }
};
