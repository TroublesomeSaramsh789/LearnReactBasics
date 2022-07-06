import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { fetcher, authFetcher } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';

//fetch api details 
const settingSlug = "site-setting"

export const useWebsiteSettings = (queryParams) => {

    const { isLoading, isError, data } = useQuery(keys.websiteSettings, () => fetcher(`/site-setting/${settingSlug}${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}


// Details Edit 
export const useEditDetails = () => {

    return useMutation((payload) => putUploader(`/site-setting/${settingSlug}/details`, payload), {
        onSuccess: () => {
            successmessage("Successfully edited details")

        }
    }
    )
}
export const useEditSocial = () => {

    return useMutation((payload) => putUploader(`/site-setting/${settingSlug}/social`, payload), {
        onSuccess: () => {
            successmessage("Successfully edited social")
        }
    }
    )
}
//details edit ends

//galleyr edit starts 
export const useEditGallery = () =>{
    return useMutation((payload) => putUploader(`/site-setting/${settingSlug}/gallary`, payload), {
        onSuccess: () => {
            successmessage("Successfully edited gallery")
        }
    }
    )
}
//gallery edit ends 

// meta edit starts 
export const useEditMeta = () =>{
    return useMutation((payload) => putUploader(`/site-setting/${settingSlug}/meta`, payload), {
        onSuccess: () => {
            successmessage("Successfully edited meta")
        }
    }
    )
}
//slider add ends 
export const useSliderDetails = (queryParams) =>{
    const { isLoading, isError, data } = useQuery(keys.slider, () => fetcher(`slider${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
 
}
export const useAddSlider = () => {
    const queryClient = useQueryClient()
    return useMutation((payload) => uploader("slider", payload), {
        onSuccess: () => {
            successmessage("Added Slider Successfully");
            queryClient.invalidateQueries(keys.slider)
        }
    });
}


export const useDeleteSlider = () =>{
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`slider/${id}`), {
        onSuccess: () => {
            successmessage("Delted Successfully");
            queryClient.invalidateQueries(keys.slider)
        }
    }
    )
}
export const useEditSlider = ()=>{
    const queryClient = useQueryClient()

    return useMutation((payload) => putUploader(`slider/${payload._id}`, payload.body), {
        
        onSuccess: () => {
            successmessage("Team Member Edited Successfully");
            queryClient.invalidateQueries(keys.slider)
        }
    });
}
//slider add 