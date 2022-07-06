import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { fetcher, authFetcher } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';

// team details start 


export const useTeamDetails = (queryParams) => {
    
    for (const key in queryParams) {
        if (queryParams["search"].trim() === "") {
            delete queryParams.search
        }
    }
    const query = new URLSearchParams(queryParams).toString();

    const { isLoading, isError, data } = useQuery([keys.webTeamDetails, queryParams.page, queryParams.search], () => fetcher(`team?${query}`));
    return {
        isLoading,
        isError,
        data
    }
}
export const useOneTeamDetail = (id) => {
    const { isLoading, isError, data } = useQuery(keys.unitTeamDetail, () => authFetcher(`team/${id}`))
    return {
        isLoading,
        isError,
        data,
    }
}
export const useAddTeam = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("team", payload), {
        onSuccess: () => {
            successmessage("Added Team Successfully");
            navigate("/dashboard/team")
        }
    });
}
export const useEditTeam = (id) => {
    const navigate = useNavigate();
    return useMutation((payload) => putUploader(`team/${id}`, payload), {
        onSuccess: () => {
            successmessage("Team Member Edited Successfully");
            navigate("/dashboard/team")
        }
    });
}
export const useDeleteTeam = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`team/${id}`), {
        onSuccess: () => {
            successmessage("Delted Successfully");
            queryClient.invalidateQueries(keys.webTeamDetails)
        }
    }
    )
}

// team details end 

//guides start 
export const useGuideDetails = (queryParams) => {

    const { isLoading, isError, data } = useQuery(keys.guideDetails, () => authFetcher(`guide${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}
export const useDeleteGuide = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`guide/${id}`), {
        onSuccess: () => {
            successmessage("Delted Successfully");
            queryClient.invalidateQueries(keys.guideDetails)
        }
    }
    )
}


// guides end 


//testomonial start 
export const useTestoDetails = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.testomonialDetails, () => fetcher(`testimonial${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}
export const useAddTestomonial = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader("testimonial", payload), {
        onSuccess: () => {
            successmessage("Added Testomonial Suucessfully")
            navigate("/dashboard/testomonial")
        }
    });
}
export const useEditTestomonial = (id) => {
    const navigate = useNavigate();
    return useMutation((payload) => putUploader(`testimonial/${id}`, payload), {
        onSuccess: () => {
            successmessage("Edited Testomonial Suucessfully")
            navigate("/dashboard/testomonial")
        }
    }
    )
}

export const useDeleteTestomonial = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`testimonial/${id}`), {
        onSuccess: () => {
            successmessage("Delted Successfully");
            queryClient.invalidateQueries(keys.testomonialDetails)
        }
    }
    )
}

//testomonial end


