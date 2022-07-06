import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { authFetcher } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';


export const useGetVirutalTreks = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.virtualTrek, () => authFetcher(`trek/virtual${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}
export const useAddOverviewVP = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("trek/virtual-trek-overview", payload), {
        onSuccess: (data) => {

            successmessage("Added Overview Successfully Please proceed adding");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}
export const useEditOverviewVP = (id) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/virtual-trek-overview`, payload), {
        onSuccess: (data) => {
            successmessage("Edited Overview Successfully Please proceed adding");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}
export const useEditDetailsVP = (id) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/trek-detail`, payload), {
        onSuccess: (data) => {
            successmessage("Edited Overview Successfully Please proceed adding");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}

export const useEditPriceVP = (id) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/virtual-trek-pricing`, payload), {
        onSuccess: (data) => {
            successmessage("Edited Price Successfully Please proceed adding");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}


// itenary starts 
export const useEditItenaryVP = (id) => {

    const navigate = useNavigate()
    return useMutation((payload) => uploader(`trek/${id}/virtual-trek-itinerary`, payload), {
        onSuccess: (data) => {
            successmessage("Added Itenary");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}
export const useUnitEditItenaryVP = (id) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`trek/${id}/virtual-trek-itinerary/${payload._id}`, payload.body), {
        onSuccess: (data) => {
            successmessage("Edited Itenary");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}
export const useUnitDeleteItenaryVP = (id) => {
    const navigate = useNavigate()
    return useMutation((idFAQ) => deleteData(`trek/${id}/virtual-trek-itinerary/${idFAQ}`), {
        onSuccess: (data) => {
            successmessage("Deleted Itenary Data");
            navigate(`/dashboard/virtualPackage/edit/${data.data._id}`, {
                state: {
                    packageData: data.data
                }
            })
        }
    });
}

// itenary ends
export const useDeleteVirtualPackage = () => {
    const queryClient = useQueryClient();

    return useMutation((url) => {
        return deleteData(url)
    }, {
        onSuccess: () => queryClient.invalidateQueries(keys.virtualTrek)
    })
}

export const usePublishUnpulishVirtual = () => {
    const queryClient = useQueryClient();
    return useMutation((payload) => uploader("trek/change-publish-trek-status", payload), {
        onSuccess: (data) => {
            successmessage("Edited Publish Status");
            queryClient.invalidateQueries(keys.virtualTrek)
        }
    });
}
