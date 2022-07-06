import axios from "axios";

import { getBearerToken } from "../utils/auth";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        authorization: getBearerToken()
    }
});

export default axiosInstance;