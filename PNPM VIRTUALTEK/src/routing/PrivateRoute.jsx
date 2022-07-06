import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import LoaderComp from '../components/LoaderComp/LoaderComp';

export function RequireAuth() {
    const { isAuthenticated, loading, profile } = useContext(AuthContext)

    useEffect(() => {


    }, [isAuthenticated, loading, profile])

    if (loading) {
        return <LoaderComp />
    }

    if (!loading && isAuthenticated && (profile?.userType === 'Admin' || profile?.userType === 'Guide')) {

        return <Outlet />
    }

    return <Navigate to="/login" />
}


export function RequireAuthUserGuide() {
    const { isAuthenticated, loading, profile } = useContext(AuthContext)

    useEffect(() => {

    }, [isAuthenticated, loading, profile])

    if (loading) {
        return <LoaderComp />
    }

    if (!loading && isAuthenticated) {

        return <Outlet />
    }

    return <Navigate to="/login" />
}