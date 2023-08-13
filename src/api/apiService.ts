import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

// Create an Axios instance with base URL and default config
const apiInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL, // Replace with your API base URL
    timeout: 10000, // Set request timeout
});

// Request interceptor
apiInstance.interceptors.request.use(
    // (config: AxiosRequestConfig) => {
    //     // Modify request config here if needed (e.g., adding headers)
    //     return config;
    // },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Modify response data here if needed
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Export the API instance
export default apiInstance;
