import { useContext } from "react";

import { useQuery } from "react-query";
import { keys } from "./keys";
import {authFetcher} from './fetcher/fetcher'




export const useGetProfile = (queryParams) =>{
    const { isLoading, isError, data } = useQuery(keys.userProfile, () => authFetcher(`auth/my-profile${queryParams || ""}`));
    return {
        isLoading, 
        isError, 
        data
    }
}
