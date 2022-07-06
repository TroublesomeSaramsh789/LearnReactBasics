import axios from "../../axios/axiosInstance";
import { getBearerToken } from "../../utils/auth";

export const deleteData = async(url)=>{
    const {data} = await axios.delete(url,  {
        headers: {
            authorization: getBearerToken()
        }
    })
    return data;
}