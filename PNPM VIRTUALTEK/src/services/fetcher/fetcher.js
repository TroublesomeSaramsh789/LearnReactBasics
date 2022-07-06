import axios from "../../axios/axiosInstance"
import { getBearerToken } from "../../utils/auth";

export const fetcher = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export const authFetcher = async (url) => {

    const bearerToken = getBearerToken()
    const { data } = await axios.get(url,
        {
            headers: {
                authorization: getBearerToken()
            }
        }
    )
    return data
}

export const fetchInfinite = async (pageParam) => {
    console.log("From Fetch Infinite",pageParam)
    let finalUrl = ``
    const { url, page } = pageParam;

    if(pageParam.slugs){
        finalUrl = `${url}?page=${pageParam?.pageParam?.page || page}&categorySlug=${pageParam.slugs}`
    }
    else{
        finalUrl = `${url}?page=${pageParam?.pageParam?.page || page}`
    }
    const { data } = await axios.get(finalUrl);
    return data;
}

