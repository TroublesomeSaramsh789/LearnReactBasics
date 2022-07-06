import { useQuery } from "react-query";
import { keys } from "./keys";
import {fetcher, authFetcher} from './fetcher/fetcher'


export const useSubscribers = (queryParams) =>{
    const { isLoading, isError, data } = useQuery(keys.contact, () => authFetcher(`subscriber${queryParams || ""}`));
    return {
        isLoading, 
        isError, 
        data
    }
}