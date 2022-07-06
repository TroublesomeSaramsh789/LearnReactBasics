
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { fetcher, authFetcher, fetchInfinite } from "./fetcher/fetcher";
import { uploader, putUploader } from './uploader/uploader';

import { successmessage } from '../utils/message';

export const useAddLive = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("livefeed", payload), {
        onSuccess: () => {
            successmessage("Live Uploaded");
            navigate("/dashboard/my-lives")
        }
    });
}

export const useGetMyLives = (queryParams) => {


    const { isLoading, isError, data } = useQuery([keys.getMyLives, queryParams.page], () => fetcher(`livefeed/for-guide?page=${queryParams.page}`));

    return {
        isLoading,
        isError,
        data
    }
}

export const useChangeLiveStatus = () => {
    const queryClient = useQueryClient();
    return useMutation((payload) => uploader(`livefeed/${payload._id}/change-status`, payload.status), {
        onSuccess: () => queryClient.invalidateQueries(keys.getMyLives)
    });
}


export const useGetLive = (liveId) => { 
    const { isLoading, isError, data } = useQuery(keys.getLiveDetails, () => authFetcher(`livefeed/${liveId}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useGetPublicLive = () => {

    const { isLoading, data, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(keys.publicLive, (pageParam) => fetchInfinite({ url: 'livefeed/for-public', page: 1, ...pageParam }),
        {
            getNextPageParam: (lastPage) => {
                if (lastPage?.data?.pagination?.nextPage) {
                    return {
                        page: lastPage.data.pagination.page + 1
                    }
                    
                }
            }
        }
    );
    return {
        data,
        isLoading,
        isError,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    }
}

export const useNotifyMe = () =>{
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    return useMutation((id) => putUploader(`/livefeed/${id}/notify-when-live`), {
        onSuccess: (data) => {
            successmessage("Thanks for subscription. You will be notified 1 hour before");
            queryClient.invalidateQueries(keys.publicLive)
            navigate(`/userdashboard/live-listing`)
        }
    });
}