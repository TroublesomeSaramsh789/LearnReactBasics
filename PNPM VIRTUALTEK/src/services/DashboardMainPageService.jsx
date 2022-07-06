import { useQuery } from "react-query";
import { keys } from "./keys";
import {fetcher, authFetcher} from './fetcher/fetcher'

export const useGetMainDashboardData = (queryParams) => {
    const { isLoading, isError, data } = useQuery(keys.dashboardMainPage, () => authFetcher(`dashboard/for-admin${queryParams || ""}`));
    return {
        isLoading,
        isError,
        data
    }
}