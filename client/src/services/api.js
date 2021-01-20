import axios from 'axios';
import router from '../router';

const baseUrl = '/api';

const api = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
    withCredentials: true,
    }
});


api.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        console.log(error);
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.push('/login');
                    break;
  
                default:
                break;
            }
            return Promise.reject(error.response);
        }
    }
  );

export default api;

