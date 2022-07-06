import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { keys } from './keys'

import { fetcher, authFetcher, fetchInfinite } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';



export const useDestnationDetailsNormal = (slug) => {
    const { isLoading, isError, data } = useQuery(keys.detstinationDetails, () => fetcher(`trek/normal/${slug || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useHomeSlider = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.detstinationDetails, () => fetcher(`/slider`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useGetHomeDetails = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.home, () => fetcher(`/home/treklisting`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}


export const useGetGuides = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.detstinationDetails, () => fetcher(`slider`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useTwoBlogs = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.twoBlogs, () => fetcher(`blog`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}
export const useWebsiteSettings = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.websiteSettings, () => fetcher(`site-setting/site-setting`), {
        refetchOnWindowFocus: false
    });
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useGuideDetails = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.guideListing, () => fetcher(`guide`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}
export const useSingleGuideDetail = (slug) => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.unitGuideListing, () => fetcher(`guide/guide-detail/${slug}`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}



export const useVirtualTrekDetails = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.virtualTrekDetails, () => fetcher(`trek/virtual-public`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}


export const useNormalTrekDetails = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.normalTrekDetails, () => fetcher(`trek/normal-public`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

// export const useOurTeam = (queryParams) => {

//     const query = new URLSearchParams(queryParams).toString();

//     const { isLoading, isFetching, isError, data } = useQuery([keys.aboutTeam, queryParams?.page, queryParams.search ], () => fetcher(`team?${query}`));
//     return {
//         isLoading,
//         isFetching,
//         isError,
//         data
//     }
// }
export const useOurTeam = () => {

    const { isLoading, data, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(keys.aboutTeam, (pageParam) => fetchInfinite({ url: 'team', page: 1, ...pageParam }),
        {
            getNextPageParam: (lastPage, pages) => {
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

export const useGetGuideById = (id) => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.getGuideById, () => fetcher(`guide/guide-detail-by-id/${id}`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useAddContact = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`contactus`, payload), {
        onSuccess: (data) => {

            successmessage("Your Message is sent successfully");
            navigate("/")
        }
    });
}

export const useAddWishlistTrek = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => putUploader(`wishlist/trek/${id}`), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(keys.detstinationDetails)


        }
    });
}

export const useRemoveWishlistTrek = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`wishlist/trek/${id}`), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(keys.detstinationDetails)

        }
    })
}

export const useAddWishlistGuide = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => putUploader(`wishlist/guide/${id}`), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(keys.unitGuideListing)


        }
    });
}

export const useRemoveWishlistGuide = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`wishlist/guide/${id}`), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(keys.unitGuideListing)

        }
    })
}

export const useAddNormalBooking = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`normal-trek-plan`, payload), {
        onSuccess: () => {
            successmessage("Added Normal Trek Booking");
            // navigate("/")
        }
    })
}
export const useAddVirtualBooking = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`virtual-trek-plan`, payload), {
        onSuccess: () => {
            successmessage("Added Virtual Trek Booking");
            // navigate("/")
        }
    })
}

export const useGetVirtualBookingList = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.getVirtualBooking, () => fetcher(`virtual-trek-plan`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useGetNormalBookingList = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.getNormalBooking, () => fetcher(`normal-trek-plan`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useChangePassword = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`auth/change-password`, payload), {
        onSuccess: () => {
            successmessage("Changed Password Successfully");
            navigate("/login")
        }
    })
}

export const useGetDestinationWishList = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.destinationWishlist, () => fetcher(`wishlist/trek`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useGetGuideWishList = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.guideWishlist, () => fetcher(`wishlist/guide`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useForgetPassword = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`auth/forgot-password`, payload), {
        onSuccess: () => {
            successmessage("Please check your email");
            navigate("/")
        }
    })
}

export const useCheckForgetPasswordToken = (id) => {

    const { isLoading, isFetching, isError, data } = useQuery([keys.checkForgetPassword, id], () => fetcher(`auth/check-forgot-password-token/${id}`));

    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}
export const usePasswordReset = () => {
    const navigate = useNavigate();
    return useMutation((payload) => uploader(`auth/update-password-with-token`, payload), {
        onSuccess: () => {
            successmessage("Please reset successful");
            navigate("/login")
        }
    })
}

export const useGetTestomonial = () => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.getTestomonial, () => fetcher(`testimonial`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}

export const useGetSingleBlog = (slug) => {
    const { isLoading, isFetching, isError, data } = useQuery(keys.getSingleBlog, () => fetcher(`blog/${slug}`));
    return {
        isLoading,
        isFetching,
        isError,
        data
    }
}
