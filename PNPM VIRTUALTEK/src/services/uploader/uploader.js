import axios from "../../axios/axiosInstance"
import { getBearerToken } from "../../utils/auth";

export const uploader = async (url, payload) => {
    const { data } = await axios.post(url, payload,
        {
            headers: {
                authorization: getBearerToken()
            }
        }
    );

    return data;
}

export const putUploader = async (url, payload) => {
    const { data } = await axios.put(url, payload, {
        headers: {
            authorization: getBearerToken()
        }
    })
    return data
}