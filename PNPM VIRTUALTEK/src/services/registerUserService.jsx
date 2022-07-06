import { useQuery } from "react-query";
import { keys } from "./keys";
import {fetcher, authFetcher} from './fetcher/fetcher'


export const useUsers = (queryParams) =>{
    const { isLoading, isError, data } = useQuery(keys.blogCategory, () => authFetcher(`/user${queryParams || ""}`));
    return {
        isLoading, 
        isError, 
        data
    }
}