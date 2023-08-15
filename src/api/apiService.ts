import axios, { AxiosInstance, AxiosResponse } from 'axios';
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Create an Axios instance with base URL and default config
const apiInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://streamapi-production-d344.up.railway.app/api', // Replace with your API base URL
    timeout: 10000, // Set request timeout
});

// Function to make a request to a specific endpoint
export async function request(endpoint: string, config?: any): Promise<AxiosResponse> {
    try {
        const response = await apiInstance.request({
            url: endpoint,
            ...config,
        });
        return response;
    } catch (error) {
        // Handle error
        throw error;
    }
}

interface CommentProps {
    username: string;
    comment: string;
    videoID: string;
}

export async function submitComment(comment: CommentProps): Promise<boolean> {
    try {
        const response = await request('/comments/submit', {
            method: 'POST',
            data: comment,
        });
        return response.status === 200;
    } catch (error) {
        console.error('Error submitting comment:', error);
        return false;
    }
}

export default apiInstance