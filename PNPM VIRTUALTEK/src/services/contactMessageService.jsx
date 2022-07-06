import { useQuery } from "react-query";
import { keys } from "./keys";
import {fetcher, authFetcher} from './fetcher/fetcher'


export const useContactMessage = (queryParams) =>{
    const { isLoading, isError, data } = useQuery(keys.contact, () => authFetcher(`contactus${queryParams || ""}`));
    return {
        isLoading, 
        isError, 
        data
    }
}