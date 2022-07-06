import { useQuery, useMutation,useQueryClient} from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { authFetcher } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';



export const useGetNormalTreks = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.normalTrek, () => authFetcher(`trek/normal${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}
export const useAddOverviewNP = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("trek/normal-trek-overview", payload), {
        onSuccess: (data) => {
            
            successmessage("Added Overview Successfully Please proceed adding");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state:{
                    packageData:data.data
                }
            })
        }
    });
}

export const useEditOverviewNP = (id) =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/normal-trek-overview`, payload), {
        onSuccess: (data) => {
            successmessage("Edited Overview Successfully Please proceed adding");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state:{
                    packageData:data.data
                }
            })
        }
    });
}

export const useEditDetailsNP = (id) =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/trek-detail`, payload), {
        onSuccess: (data) => {
            successmessage("Edited Overview Successfully Please proceed adding");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state:{
                    packageData:data.data
                }
            })
        }
    });
}

export const useEditPricesNP = (id) =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/normal-trek-pricing`, payload), {
        onSuccess: (data) => {
            successmessage("Edited pricing Successfully please proceed adding");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state:{
                    packageData:data.data
                }
            })
        }
    });
}
export const useEditGalleryNP = (id, packageType='normal') =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/trek-gallary`, payload), {
        onSuccess: (data) => {
            successmessage("Edited pricing Successfully please proceed adding");
            navigate(`/dashboard/${packageType}Package/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
export const useEditMetaNP = (id, packageType='normal') =>{
    
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/meta`, payload), {
        onSuccess: (data) => {
            successmessage("Edited pricing Successfully please proceed adding");
            navigate(`/dashboard/${packageType}Package/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}

// faq starts 
export const useEditFAQ = (id, packageType ='normal')=>{

    const navigate = useNavigate()
    return useMutation((payload) => uploader(`trek/${id}/trek-faq`, payload), {
        onSuccess: (data) => {
            successmessage("Edited pricing Successfully please proceed adding");
            navigate(`/dashboard/${packageType}Package/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
export const useUnitEditFAQ = (id, packageType='normal') =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/trek-faq/${payload._id}`, payload.body), {
        onSuccess: (data) => {
            successmessage("Edited pricing Successfully please proceed adding");
            navigate(`/dashboard/${packageType}Package/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
export const useUnitDeleteFAQ = (id, packageType="normal") =>{
    const navigate = useNavigate()
    return useMutation((idFAQ) => deleteData(`trek/${id}/trek-faq/${idFAQ}`), {
        onSuccess: (data) => {
            successmessage("Deleted FAQ Data");
            navigate(`/dashboard/${packageType}Package/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}


//faq ends

//itenary starts 
export const useEditItenary = (id)=>{

    const navigate = useNavigate()
    return useMutation((payload) => uploader(`trek/${id}/normal-trek-itinerary`, payload), {
        onSuccess: (data) => {
            successmessage("Added Itenary");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
export const useUnitEditItenary = (id) =>{
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/normal-trek-itinerary/${payload._id}`, payload.body), {
        onSuccess: (data) => {
            successmessage("Edited Itenary");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
export const useUnitDeleteItenary = (id) =>{
    const navigate = useNavigate()
    return useMutation((idFAQ) => deleteData(`trek/${id}/normal-trek-itinerary/${idFAQ}`), {
        onSuccess: (data) => {
            successmessage("Deleted Itenary Data");
            navigate(`/dashboard/normalPackage/edit/${data.data._id}`,{
                state: {
                    packageData:data.data
                }
            })
        }
    });
}
//itenary ends 

export const useDeleteNormalPackage = () => {
    const queryClient = useQueryClient();

    return useMutation((url) => {
        return deleteData(url)
    }, {
        onSuccess: () => queryClient.invalidateQueries(keys.normalTrek)
    })
}

export const usePublishUnpulishNormal = () => {
    const queryClient = useQueryClient();
    return useMutation((payload) => uploader("trek/change-publish-trek-status", payload), {
        onSuccess: (data) => {
            successmessage("Edited Publish Status");
            queryClient.invalidateQueries(keys.normalTrek)
        }
    });
}