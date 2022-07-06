import { notification } from 'antd';
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from 'react-query'
import { useNavigate } from "react-router-dom";

import { keys } from './keys'

import { fetcher, authFetcher, fetchInfinite } from "./fetcher/fetcher";
import { uploader } from './uploader/uploader';
import { putUploader } from './uploader/uploader';
import { deleteData } from './deleteData/deleteData';
import { successmessage } from '../utils/message';

//blog category start 

export const useBlogCategory = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.blogCategory, () => authFetcher(`/blog-category${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useBlogCategoryPublic = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.blogCategoryPublic, () => authFetcher(`/blog-category/category-by-blog-count${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useAddBlogCategory = () => {
    const navigate = useNavigate()
    return useMutation((payload) => uploader("blog-category", payload), {
        onSuccess: () => {
            successmessage("Added Blog Category")
            navigate("/dashboard/blogCategory")
        }
    });
}
export const useEditBlogCategory = (id) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`blog-category/${id}`, payload), {
        onSuccess: () => {
            successmessage("Blog Category Edited")
            navigate("/dashboard/blogCategory")
        }
    }
    )
}

export const useDeleteBlogCategory = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteData(`blog-category/${id}`), {
        onSuccess: () => {
            successmessage("Deleted Successfully");
            queryClient.invalidateQueries(keys.blogCategory)
        }
    }
    )
}
// end blog category


//start blog

export const useBlog = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.blog, () => fetcher(`/blog${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}

export const useBlogInfinite = (blogSlug) => {

    //IMPORTANT DON"T REMOVE
    // fetchInfinite(`/blog/${blogSlug}?page=${pageParam}`)
    

    const { isLoading, data, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery([keys.blogInfinite,blogSlug], (pageParam) => fetchInfinite({ url: 'blog',slugs:blogSlug, page: 1, ...pageParam }),
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

export const useAddBlogs = () => {
    const navigate = useNavigate();

    return useMutation((payload) => uploader("blog", payload), {
        onSuccess: () => {
            successmessage("Blog added!");
            navigate("/dashboard/blogs");
        }
    });
}
export const useEditBlog = (slug) => {
    const navigate = useNavigate()
    return useMutation((payload) => putUploader(`blog/${slug}`, payload), {
        onSuccess: () => {
            successmessage("Successfully edited blog")
            navigate("/dashboard/blogs")
        }
    }
    )
}
export const useDeleteBlog = () => {
    const queryClient = useQueryClient();

    return useMutation((url) => {
        return deleteData(url)
    }, {
        onSuccess: () => queryClient.invalidateQueries(keys.blog)
    })
}

export const useSingleBlog = (slug) =>{
    const { isLoading, isError, data } = useQuery(keys.blog, () => fetcher(`/blog/${slug || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}
//end blog