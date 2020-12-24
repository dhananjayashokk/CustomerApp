import axios from 'axios';
import { config } from '../config/config';

const AxiosHeader = () => {
    const response =  axios.create({
        baseURL: config.API_BASE_URL,
        headers: {"Content-Type": "application/json","X-Requested-With": "XMLHttpRequest", "ApiKey":"3mKmivKjaYmFJmw0CIUk" },
    });

    return response
}
  
export { AxiosHeader };