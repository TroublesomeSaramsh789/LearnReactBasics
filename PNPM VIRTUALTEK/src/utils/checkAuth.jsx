import axiosInstance from "../axios/axiosInstance";
import { getBearerToken } from "./auth";

export default async function CheckAuth({ setLoading, setIsAuthenticated, setProfile, setUserType,
setUserName }) {
    
    if (!getBearerToken()) {
        setIsAuthenticated(false);
        return false
    }

    try {
        setLoading(true)
        const { data } = await axiosInstance.get("/auth/my-profile");
        if (data) {
            setLoading(false);
            setIsAuthenticated(true);
            setUserType(data.data.userType);
            setUserName(data.data.fullName);
            localStorage.setItem("userType", data.data.userType);
            localStorage.setItem("userName", data.data.fullName);
            setProfile(data.data);
        }
        else {
            setLoading(false);
            setIsAuthenticated(false);
        }
        
    } catch (error) {
        setLoading(false);
        setIsAuthenticated(false);
    }
}