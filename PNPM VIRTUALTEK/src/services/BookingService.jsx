import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { fetcher} from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';

import { successmessage } from '../utils/message';


export const useAddNormalBook = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("normal-trek-plan", payload), {
        onSuccess: () => {
            successmessage("Your Trek is booked. We will contact you soon");
            navigate("/")
        }
    });
}


export const useGetAllNormalBooking =(queryParams) =>{
    for (const key in queryParams) {
        if (queryParams["search"].trim() === "") {
            delete queryParams.search
        }
    }
    const query = new URLSearchParams(queryParams).toString();

    const { isLoading, isError, data } = useQuery([keys.getNormalBooking, queryParams.page, queryParams.search], () => fetcher(`normal-trek-plan?${query}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useGetAllVirtualBooking =(queryParams) =>{
    for (const key in queryParams) {
        if (queryParams["search"].trim() === "") {
            delete queryParams.search
        }
    }
    const query = new URLSearchParams(queryParams).toString();

    const { isLoading, isError, data } = useQuery([keys.getVirtualBooking, queryParams.page, queryParams.search], () => fetcher(`virtual-trek-plan?${query}`));
    return {
        isLoading,
        isError,
        data
    }
}